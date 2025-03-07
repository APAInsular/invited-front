import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiClient from '../config/axiosConfig';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Llamamos a la API para obtener el usuario autenticado
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem('auth_token');

                if (!token) {
                    // Si no hay token, no intentamos obtener el usuario
                    console.log("No hay usuario autenticado.");
                    return;
                }

                const response = await apiClient.get('/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(response.data)

                console.log('Usuario:', response.data);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log("Usuario no autorizado. Redirigiendo al login...");
                    // Aquí puedes redirigir al login o mostrar un mensaje al usuario
                } else {
                    console.error("Error al obtener el usuario:", error);
                }
            }
        };
        fetchUser();  // Solo llamamos a la función que obtiene los datos
    }, []);

    const colStyle = {
        backgroundColor: "#F9E9E8",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        margin: "10px",
        cursor: "pointer",
        textAlign: "center"
    };

    const handleNavigation = (path) => {
        if (user) {
            navigate(`/${user.Name}&${user.partner.Name}/invitation` + path);
        } else {
            navigate('/login')
        }
    };

    return (
        <div className="mt-5" style={{ backgroundColor: "#FAF9F8", color: "#2F2F2F", minHeight: "100vh" }}>
            {/* Hero Section */}
            <header className='mt-5' style={{ backgroundColor: "#FAF9F8", color: "white", textAlign: "center", padding: "50px" }}>
                <h1 className='mt-5' style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#F19292" }}>Crea Invitaciones Personalizadas prueba publica</h1>
                {user && (
                    <h3 className='mt-5' style={{ color: "#F19292" }}>Bienvenido {user.name} y {user.partner.name}</h3>
                )
                }
                <p style={{ marginTop: "10px", fontSize: "1.2rem", color: "#F19292" }}>Bodas, cumpleaños y más, con plantillas listas para ti.</p>
                <Button variant="light" style={{ marginTop: "10px", color: "#FAF9F8", backgroundColor: "#F19292", fontWeight: "bold" }}>Comenzar</Button>
            </header>

            {/* Templates Section */}
            <Container className="text-center" style={{ padding: "50px" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Elige una Plantilla</h2>
                <p style={{ marginTop: "10px" }}>Personaliza tus invitaciones con nuestras opciones.</p>
                <Row className="mt-4 justify-content-center">
                    <Col md={3} style={colStyle} onClick={() => handleNavigation(`/PlantillaRomantica/form`)}>Plantilla Romantica</Col>
                    <Col md={3} style={colStyle} onClick={() => handleNavigation(`/PlantillaSimple/form`)}>Plantilla Simple</Col>
                    <Col md={3} style={colStyle} onClick={() => handleNavigation(`/PlantillaDramatica/form`)}>Plantilla Dramática</Col>
                </Row>
                <Row className="mt-4 justify-content-center">
                    <Col md={4} style={colStyle} onClick={() => handleNavigation(`/PlantillaDulce/form`)}>Plantilla Dulce</Col>
                    <Col md={4} style={colStyle} onClick={() => handleNavigation(`/PlantillaOscuro/form`)}>Plantilla Oscuro</Col>
                </Row>
            </Container>

            {/* Form Section */}
            <div style={{ backgroundColor: "#F9E9E8", padding: "50px", textAlign: "center" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Crea tu Invitación</h2>
                <p style={{ marginTop: "10px" }}>Llena el formulario y genera tu invitación en minutos.</p>
                <Form style={{ maxWidth: "500px", margin: "0 auto", marginTop: "20px" }}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Nombre del evento" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Fecha y hora" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" placeholder="Mensaje" />
                    </Form.Group>
                    <Button variant="danger" style={{ backgroundColor: "#F19292", borderColor: "#F19292", fontWeight: "bold" }}>Generar Invitación</Button>
                </Form>
            </div>
        </div>
    );
};

export default LandingPage;
