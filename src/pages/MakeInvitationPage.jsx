import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from '../config/axiosConfig';
import Swal from 'sweetalert2'
import { span } from "framer-motion/client";

export default function MakeInvitationForm() {
    const navigate = useNavigate();
    const { templateName } = useParams();
    const formattedTemplateName = templateName.replace(/^Plantilla/, "Plantilla ");

    const [previewImage, setPreviewImage] = useState();

    const [isLoading, setIsLoading] = useState(false);

    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);

    const [userInfo, setUserInfo] = useState({
        novioName: "",
        noviaName: ""
    });

    const [formData, setFormData] = useState({
        weddingDate: "",
        template: formattedTemplateName,
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

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "justo antes de ejecutar el post",
        });

        try {
            const response = await apiClient.post("/api/weddings", finalData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "justo despues de ejecutar el post",
            });

            setIsLoading(false)
            navigate("/thankyou")
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

    return (
        <Container className="mt-5" style={{ backgroundColor: "#F9E9E8", padding: "50px", textAlign: "center" }}>
            <h2 className="m-0" style={{ fontSize: "2rem", fontWeight: "bold" }}>Crea tu Invitación</h2>
            <p className="mb-2 m-0 fw-lighter" style={{ fontSize: "0.8rem" }}>Llena el formulario y genera tu invitación en minutos.</p>
            <p style={{ marginTop: "1px", fontSize: "12px" }}>(*) campos obligatorios</p>
            <Form onSubmit={handleSubmit} style={{ maxWidth: "800px", margin: "0 auto", marginTop: "20px" }}>
                {/* Nombre de la pareja - ahora se apila en móviles */}
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Nombre Pareja*" name="groomName" value={userInfo.novioName} required />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Nombre Pareja*" name="brideName" value={userInfo.noviaName} required />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Fecha y plantilla - se apilan en móviles */}
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de la boda*</Form.Label>
                            <Form.Control type="date" name="weddingDate" value={formData.weddingDate} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Plantilla a utilizar*</Form.Label>
                            <Form.Select name="template" value={formData.template} onChange={handleChange} required>
                                <option value="Plantilla Romantica">Plantilla Romántica</option>
                                <option value="Plantilla Acuarela">Plantilla Acuarela</option>
                                <option value="Plantilla Simple" disabled>Plantilla Simple</option>
                                <option value="Plantilla Dramatica" disabled>Plantilla Dramática</option>
                                <option value="Plantilla Dulce" disabled>Plantilla Dulce</option>
                                <option value="Plantilla Oscura" disabled>Plantilla Oscura</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Localización de la Boda */}
                <h4 className="m-0">Localización de la Boda</h4>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Ciudad*</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad" name="city" value={formData.location.city} onChange={handleChangeLocation} required />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Localizacion*</Form.Label>
                            <Form.Control type="text" placeholder="Localizacion" name="country" value={formData.location.country} onChange={handleChangeLocation} required />
                        </Form.Group>
                    </Col>
                </Row>

                <h4 className="m-0">Itinerario de la Celebración</h4>
                <p className="fw-lighter mb-2" style={{ fontSize: "0.8rem" }}>Añade todos los hitos de tu celebración</p>
                {events.map((event, index) => (
                    <Row key={index} className="mb-3">
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Form.Control type="text" placeholder="Nombre*" value={event.name} onChange={(e) => updateEvent(index, "name", e.target.value)} required />
                        </Col>
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Form.Control type="time" placeholder="Hora" value={event.time} onChange={(e) => updateEvent(index, "time", e.target.value)} required />
                        </Col>
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Form.Control type="text" placeholder="Ciudad" value={event.location.city} onChange={(e) => updateEvent(index, "location.city", e.target.value)} />
                        </Col>
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Form.Control type="text" placeholder="Localización" value={event.location.country} onChange={(e) => updateEvent(index, "location.country", e.target.value)} />
                        </Col>
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Form.Control type="text" placeholder="Descripción" value={event.description} onChange={(e) => updateEvent(index, "description", e.target.value)} />
                        </Col>
                        <Col xs={12} md={2} className="mb-2 mb-md-0">
                            <Button variant="danger" onClick={() => removeEvent(index)} className="w-100">Eliminar</Button>
                        </Col>
                    </Row>
                ))}
                <Button variant="secondary" onClick={addEvent} className="mb-3">Añadir Evento</Button>

                {/* Tipo de alimentación y número de invitados */}
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Tipo de alimentacion*</Form.Label>
                            <Form.Select name="foodType" value={formData.foodType} onChange={handleChange} required>
                                <option value="Sin Preferencias">Sin Preferencias</option>
                                <option value="Vegetariana">Vegetariana</option>
                                <option value="Vegana">Vegana</option>
                                <option value="Mixta">Mixta</option>
                                <option value="Otra">Otra</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Numero de invitados*</Form.Label>
                            <Form.Control type="number" placeholder="Número de Invitados" name="guestCount" value={formData.guestCount} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Código de vestimenta y mensaje */}
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Código de vestimenta*</Form.Label>
                            <Form.Control type="text" placeholder="Código de vestimenta" name="dressCode" value={formData.dressCode} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Mensaje para los invitados*</Form.Label>
                            <Form.Control type="text" placeholder="Mensaje personal" name="customMessage" value={formData.customMessage} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Música */}
                <h4 className="m-0">Música</h4>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Titulo de la cancion*</Form.Label>
                            <Form.Control type="text" placeholder="Título de la canción" name="musicTitle" value={formData.musicTitle} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Enlace de la musica (YouTube)*</Form.Label>
                            <Form.Control type="text" placeholder="Enlace a la música" name="musicUrl" value={formData.musicUrl} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Imágenes */}
                <Row>
                    <Col xs={12} md={6}>
                        <h4 className="m-0">Imagen de la Pareja*</h4>
                        <Form.Group className="mb-3">
                            <Form.Control type="file" accept="image/*" onChange={handleCoupleImageUpload} required />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4 className="m-0">Galería de Imágenes*</h4>
                        <Form.Group className="mb-3">
                            <Form.Control type="file" accept="image/*" multiple onChange={handleGalleryUpload} />
                        </Form.Group>
                    </Col>
                </Row>

                <Button
                    type="submit"
                    style={{ zIndex: 99999, cursor: 'pointer' }}
                    onClick={handleSubmit}
                    onTouchEnd={(e) => {
                        e.preventDefault();        // evita doble envío
                        handleSubmit(e);
                    }}
                >
                    {isLoading ? 'Cargando...' : 'Enviar'}
                </Button>
            </Form>
        </Container>
    );
}
