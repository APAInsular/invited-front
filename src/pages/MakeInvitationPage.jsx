import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from '../config/axiosConfig';

export default function MakeInvitationForm() {
    const navigate = useNavigate();
    const { templateName } = useParams();
    const formattedTemplateName = templateName.replace(/^Plantilla/, "Plantilla ");

    const [previewImage, setPreviewImage] = useState();


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
                ...prevData.location, // Mantener las propiedades previas de location
                [name]: value // Solo modificar la propiedad específica
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem('auth_token');

        // Preview Logic (from handleImageChange)
        if (formData.coverImage) { // Assuming coverImage is the image you want to preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result); // Set the preview image
            };
            reader.readAsDataURL(formData.coverImage);
        }

        // FormData Creation (from previous example)
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

        const finalData = {
            ...formData,
            events
        };
        console.log(finalData);
        try {
            const response = await apiClient.post("/api/weddings", finalData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            navigate(`/invitacion/${userInfo.novioName}-${userInfo.noviaName}/${response.data.wedding.id}`);
        } catch (error) {
            console.error("Error al crear la invitación:", error);
        }
    };

    const handleCoupleImageUpload = (event) => {
        const file = event.target.files[0];
        setFormData(prevFormData => ({
            ...prevFormData,
            coverImage: file
        }));
    };

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file && validateAndSetImage(file)) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setPreviewImage(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

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
            <Form onSubmit={handleSubmit} style={{ maxWidth: "800px", margin: "0 auto", marginTop: "20px" }}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Nombre Pareja" name="groomName" value={userInfo.novioName} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Nombre Pareja" name="brideName" value={userInfo.noviaName} required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="date" name="weddingDate" value={formData.weddingDate} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Select name="template" value={formData.template} onChange={handleChange} required>
                                <option value="Plantilla Romantica">Plantilla Romántica</option>
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
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Ciudad" name="city" value={formData.location.city} onChange={handleChangeLocation} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="País" name="country" value={formData.location.country} onChange={handleChangeLocation} required />
                        </Form.Group>
                    </Col>
                </Row>


                <h4 className="m-0">Itinerario de la Celebración</h4>
                <p className="fw-lighter mb-2" style={{ fontSize: "0.8rem" }}>Añade todos los hitos de tu celebración</p>
                {events.map((event, index) => (
                    <Row key={index} className="mb-3">
                        <Col>
                            <Form.Control type="text" placeholder="Nombre" value={event.name} onChange={(e) => updateEvent(index, "name", e.target.value)} required />
                        </Col>
                        <Col>
                            <Form.Control type="time" value={event.time} onChange={(e) => updateEvent(index, "time", e.target.value)} required />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Ubicación Ciudad" value={event.location.city} onChange={(e) => updateEvent(index, "location.city", e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Ubicación País" value={event.location.country} onChange={(e) => updateEvent(index, "location.country", e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Descripción" value={event.description} onChange={(e) => updateEvent(index, "description", e.target.value)} />
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={() => removeEvent(index)}>Eliminar</Button>
                        </Col>
                    </Row>
                ))}
                <Button variant="secondary" onClick={addEvent}>Añadir Evento</Button>

                <Row className="mt-3">
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Select name="foodType" value={formData.foodType} onChange={handleChange} required>
                                <option value="Sin Preferencias">Sin Preferencias</option>
                                <option value="Vegetariana">Vegetariana</option>
                                <option value="Vegana">Vegana</option>
                                <option value="Mixta">Mixta</option>
                                <option value="Otra">Otra</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="number" placeholder="Número de Invitados" name="guestCount" value={formData.guestCount} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Código de vestimenta" name="dressCode" value={formData.dressCode} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Mensaje personal" name="customMessage" value={formData.customMessage} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Música */}
                <h4 className="m-0">Música</h4>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Título de la canción" name="musicTitle" value={formData.musicTitle} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Enlace a la música" name="musicUrl" value={formData.musicUrl} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h4 className="m-0">Imagen de la Pareja</h4>
                        <Form.Group className="mb-3">
                            <Form.Control type="file" accept="image/*" onChange={handleCoupleImageUpload} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <h4 className="m-0">Galería de Imágenes</h4>
                        <Form.Group className="mb-3">
                            <Form.Control type="file" accept="image/*" multiple onChange={handleGalleryUpload} />
                        </Form.Group>
                    </Col>
                </Row>

                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
}
