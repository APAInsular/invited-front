import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from '../config/axiosConfig';
import Swal from 'sweetalert2'
import { span } from "framer-motion/client";
import usePageTranslation from "../hooks/usePageTranslation";

export default function MakeInvitationForm() {
    const navigate = useNavigate();
    const { templateName } = useParams();
    const formattedTemplateName = templateName.replace(/^Plantilla/, "Plantilla ");

    const [previewImage, setPreviewImage] = useState();

    const { lang } = useParams();

    const { translate: t, loadingTranslation } = usePageTranslation('makeInvitationPage');

    const [isLoading, setIsLoading] = useState(false);

    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);

    const [userInfo, setUserInfo] = useState({
        novioName: "",
        noviaName: ""
    });

    const [templatePreview, setTemplatePreview] = useState('/images/Plantilla_0.png');

    const [formData, setFormData] = useState({
        weddingDate: "",
        template: "s",
        foodType: "Sin Preferencias",
        guestCount: "",
        customMessage: "",
        dressCode: "",
        musicUrl: "",
        musicTitle: "",
        user_id: "",
        groomDescription: "",
        brideDescription: "",
        location: {  // Localización de la boda
            city: "",
            country: ""
        },
        coverImage: null,
        images: []
    });

    useEffect(() => {
        switch (formData.template) {
            case 'Plantilla Romantica':
                setTemplatePreview('/images/Plantilla_0.png');
                break;
            case 'Plantilla Acuarela':
                setTemplatePreview('/images/Plantilla_1.png');
                break;
            case 'Plantilla Erase una vez':
                setTemplatePreview('/images/Plantilla_2.png');
                break;
            case 'Plantilla Havana Moderna':
                setTemplatePreview('/images/Havana_Moderna.png');
                break;
            default:
                setTemplatePreview('');
        }
    }, [formData.template]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem('auth_token');
                if (!token) return;

                const response = await apiClient.get('/api/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setUser(response.data);

                setFormData(prevData => ({ ...prevData, "user_id": response.data.id }));

                setUserInfo({
                    novioName: `${response.data.name} ${response.data.firstSurname}`,
                    noviaName: `${response.data.partner.name} ${response.data.partner.firstSurname}`,
                });

            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            }
        };

        fetchUser();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleChangeLocation = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            location: {
                ...prevData.location,
                [name]: value
            }
        }));
    };

    const localizedLink = (path) => {
        return `/${lang}${path}`;
    };

    const addEvent = () => {
        setEvents([...events, { name: "", time: "", location: { city: "", country: "" }, description: "" }]);
    };

    const updateEvent = (index, field, value) => {
        const updatedEvents = [...events];
        if (field === "location.city" || field === "location.country") {
            const [locationField, subField] = field.split('.');
            updatedEvents[index][locationField][subField] = value;
        } else {
            updatedEvents[index][field] = value;
        }
        setEvents(updatedEvents);
    };

    const removeEvent = (index) => {
        setEvents(events.filter((_, i) => i !== index));
    };

    const validateDate = (formData) => {
        const weddingDate = new Date(formData.weddingDate);
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1); // Fecha de mañana

        if (weddingDate < tomorrow) {
            Swal.fire({
                icon: "error",
                title: "Fecha no válida",
                text: "La fecha de la boda no puede ser anterior a mañana.",
            });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const token = sessionStorage.getItem('auth_token');

        if (formData.coverImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(formData.coverImage);
        }

        const form = new FormData();
        form.append('coverImage', formData.coverImage);

        formData.images.forEach((file, index) => {
            form.append(`images[${index}]`, file);
        });

        for (const key in formData) {
            if (key !== 'coverImage' && key !== 'images') {
                form.append(key, formData[key]);
            }
        }

        if (!validateDate(formData)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "La fecha debe ser a partir de mañana",
            });
        }

        const finalData = {
            ...formData,
            events
        };

        try {
            const response = await apiClient.post("/api/weddings", finalData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setIsLoading(false)
            localizedLink('/thankyou')
        } catch (error) {
            console.error("Error al crear la invitación:", error);

            switch (error.response.data.message) {
                case "The events field is required.":
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Debes añadir un evento como mínimo",
                    });
                    break;
                default:
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.response.data.message,
                    });
            }
        }
    };

    const handleCoupleImageUpload = (event) => {
        const file = event.target.files[0];
        setFormData(prevFormData => ({
            ...prevFormData,
            coverImage: file
        }));
    };

    const handleGalleryUpload = (event) => {
        const files = Array.from(event.target.files);
        setFormData(prevFormData => ({
            ...prevFormData,
            images: files
        }));
    };



    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    return (
        <Container className="mt-5" style={{ backgroundColor: "#F9E9E8", padding: "50px", textAlign: "center" }}>
            <h2 className="m-0" style={{ fontSize: "2rem", fontWeight: "bold" }}>{t('formTitle')}</h2>
            <p className="mb-2 m-0 fw-lighter" style={{ fontSize: "0.8rem" }}>{t('formSubtitle')}</p>
            <p style={{ marginTop: "1px", fontSize: "12px" }}>{t('requiredFieldsNote')}</p>

            <Form onSubmit={handleSubmit} style={{ maxWidth: "800px", margin: "0 auto", marginTop: "20px" }}>
                {/* Partner Names */}
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder={t('partnerName')}
                                name="groomName"
                                value={userInfo.groomName}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder={t('partnerName')}
                                name="brideName"
                                value={userInfo.brideName}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Date and Template */}
                <Row className="align-items-center mb-3">
                    <Col xs={12} md={6}>
                        <Row className="align-items-center">
                            <Col xs={12} className="align-items-center">
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('weddingDate')}</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="weddingDate"
                                        value={formData.weddingDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} className="align-items-center">
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('templateLabel')}</Form.Label>
                                    <Form.Select
                                        name="template"
                                        value={formData.template}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Plantilla Romantica">{t('templateOptions.romantic')}</option>
                                        <option value="Plantilla Acuarela">{t('templateOptions.watercolor')}</option>
                                        <option value="Plantilla Erase una Vez">{t('templateOptions.fairytale')}</option>
                                        <option value="Plantilla Dulce" disabled>{t('templateOptions.sweet')}</option>
                                        <option value="Plantilla Oscura" disabled>{t('templateOptions.dark')}</option>

                                        <option value="Plantilla Havana Moderna">{t('templateOptions.havana')}</option>
                                        <option value="Plantilla Armonioso Malta" >{t('templateOptions.malta')}</option>
                                        <option value="Plantilla Jardin Melbourne" >{t('templateOptions.melbourne')}</option>
                                        <option value="Plantilla Sanfrancisco Arcoiris" >{t('templateOptions.arcoiris')}</option>
                                        <option value="Plantilla Tradicional Londres" >{t('templateOptions.londres')}</option>
                                        <option value="Plantilla Alegre Las Vegas" >{t('templateOptions.vegas')}</option>
                                        <option value="Plantilla Elegante Paris" >{t('templateOptions.paris')}</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        {templatePreview && (
                            <div className="text-center w-100">
                                <img
                                    src={templatePreview}
                                    alt={t('templatePreviewAlt')}
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        maxHeight: '400px',
                                        borderRadius: '8px',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                        )}
                    </Col>
                </Row>

                {/* Location */}
                <h4 className="m-0">{t('locationTitle')}</h4>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('city')}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t('city')}
                                name="city"
                                value={formData.location.city}
                                onChange={handleChangeLocation}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('country')}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t('country')}
                                name="country"
                                value={formData.location.country}
                                onChange={handleChangeLocation}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Itinerary */}
                <h4 className="m-0">{t('itineraryTitle')}</h4>
                <p className="fw-lighter mb-2" style={{ fontSize: "0.8rem" }}>{t('itinerarySubtitle')}</p>
                {events.map((event, index) => (
                    <Row key={index} className="mb-3">
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Form.Control
                                type="text"
                                placeholder={t('eventName')}
                                value={event.name}
                                onChange={(e) => updateEvent(index, "name", e.target.value)}
                                required
                            />
                        </Col>
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Form.Control
                                type="time"
                                placeholder={t('eventTime')}
                                value={event.time}
                                onChange={(e) => updateEvent(index, "time", e.target.value)}
                                required
                            />
                        </Col>
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Form.Control
                                type="text"
                                placeholder={t('eventCity')}
                                value={event.location.city}
                                onChange={(e) => updateEvent(index, "location.city", e.target.value)}
                            />
                        </Col>
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Form.Control
                                type="text"
                                placeholder={t('eventLocation')}
                                value={event.location.country}
                                onChange={(e) => updateEvent(index, "location.country", e.target.value)}
                            />
                        </Col>
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Form.Control
                                type="text"
                                placeholder={t('eventDescription')}
                                value={event.description}
                                onChange={(e) => updateEvent(index, "description", e.target.value)}
                            />
                        </Col>
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Button
                                variant="danger"
                                onClick={() => removeEvent(index)}
                                className="w-100"
                            >
                                {t('removeEvent')}
                            </Button>
                        </Col>
                    </Row>
                ))}
                <Button variant="secondary" onClick={addEvent} className="mb-3">
                    {t('addEvent')}
                </Button>

                {/* Food and Guests */}
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('foodTypeLabel')}</Form.Label>
                            <Form.Select name="foodType" value={formData.foodType} onChange={handleChange} required>
                                <option value="Sin Preferencias">{t('foodOptions.none')}</option>
                                <option value="Vegetariana">{t('foodOptions.vegetarian')}</option>
                                <option value="Vegana">{t('foodOptions.vegan')}</option>
                                <option value="Mixta">{t('foodOptions.mixed')}</option>
                                <option value="Otra">{t('foodOptions.other')}</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('guestCountLabel')}</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={t('guestCountLabel')}
                                name="guestCount"
                                value={formData.guestCount}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Dress Code and Message */}
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('dressCode')}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t('dressCode')}
                                name="dressCode"
                                value={formData.dressCode}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('customMessage')}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t('customMessage')}
                                name="customMessage"
                                value={formData.customMessage}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Music */}
                <h4 className="m-0">{t('musicTitle')}</h4>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('musicTitle')}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t('musicTitle')}
                                name="musicTitle"
                                value={formData.musicTitle}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('musicUrl')}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t('musicUrl')}
                                name="musicUrl"
                                value={formData.musicUrl}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Images */}
                <Row>
                    <Col xs={12} md={6}>
                        <h4 className="m-0">{t('coupleImage')}</h4>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleCoupleImageUpload}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4 className="m-0">{t('galleryImages')}</h4>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleGalleryUpload}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button
                    type="submit"
                    style={{ zIndex: 99999, cursor: 'pointer' }}
                    onClick={handleSubmit}
                    onTouchEnd={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                    }}
                    disabled={isLoading}
                >
                    {isLoading ? t('loadingText') : t('submitButton')}
                </Button>
            </Form>
        </Container>
    );
}
