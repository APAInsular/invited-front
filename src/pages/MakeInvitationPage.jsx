import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from '../config/axiosConfig';

export default function MakeInvitationForm() {
    const navigate = useNavigate();
    const { templateName } = useParams();
    const formattedTemplateName = templateName.replace(/^Plantilla/, "Plantilla ");

    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);

    const [userInfo, setUserInfo] = useState({
        novioName: "",
        noviaName: ""
    });

    const [formData, setFormData] = useState({
        Wedding_Date: "",
        template: formattedTemplateName,
        foodType: "Sin Preferencias",
        guestCount: "",
        customMessage: "",
        Dress_Code: "",
        Music: "",
        user_id: "",
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

                console.log(response.data)

                setFormData(prevData => ({ ...prevData, "user_id": response.data[0].id }))

                setUserInfo({
                    novioName: `${response.data[0].Name}${response.data[0].First_Surname}`,
                    noviaName: `${response.data[0].partner.Name}${response.data[0].partner.First_Surname}`,
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

    const addEvent = () => {
        setEvents([...events, { name: "", time: "", location: "", description: "" }]);
    };

    const updateEvent = (index, field, value) => {
        const updatedEvents = [...events];
        updatedEvents[index][field] = value;
        setEvents(updatedEvents);
    };

    const removeEvent = (index) => {
        setEvents(events.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem('auth_token');

        const finalData = {
            ...formData,
            events
        };

        console.log(finalData)

        try {
            const response = await apiClient.post("/api/weddings", finalData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            console.log("Invitación creada:", response.data);
            navigate(`/invitacion/${userInfo.novioName}-${userInfo.noviaName}/${response.data.wedding.id}`);
        } catch (error) {
            console.error("Error al crear la invitación:", error);
        }
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
                            <Form.Control type="date" name="Wedding_Date" value={formData.Wedding_Date} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Select name="template" value={formData.template} onChange={handleChange} required>
                                <option value="Plantilla Romantica">Plantilla Romántica</option>
                                <option value="Plantilla Simple">Plantilla Simple</option>
                                <option value="Plantilla Dramatica">Plantilla Dramática</option>
                                <option value="Plantilla Dulce">Plantilla Dulce</option>
                                <option value="Plantilla Oscura">Plantilla Oscura</option>
                            </Form.Select>
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
                            <Form.Control type="text" placeholder="Ubicación" value={event.location} onChange={(e) => updateEvent(index, "location", e.target.value)} required />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Descripción" value={event.description} onChange={(e) => updateEvent(index, "description", e.target.value)} required />
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
                            <Form.Control type="text" placeholder="Codigo de vestimenta" name="Dress_Code" value={formData.Dress_Code} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Musica" name="Music" value={formData.Music} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={4} placeholder="Mensaje Personalizado" name="customMessage" value={formData.customMessage} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" variant="danger">Crear Invitación</Button>
            </Form>
        </Container>
    );
}
