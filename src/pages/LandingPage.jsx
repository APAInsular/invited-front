import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiClient from '../config/axiosConfig';

const LandingPage = () => {
    const [user, setUser] = useState(null);

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

    return (
        <div>
            {/* Hero Section */}
            <section className="hero bg-cover text-white text-center py-5" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?wedding")', height: '100vh' }}>
                <div className="overlay bg-dark bg-opacity-50 d-flex justify-content-center align-items-center h-100">
                    <div>
                        <h1 className="display-4">Crea tus invitaciones de boda únicas</h1>
                        <h2>{user ? `Bienvenido, ${user.name}` : 'Bienvenido a nuestra página!'}</h2>
                        <p className="lead">Diseña, personaliza y comparte tus invitaciones de manera fácil y rápida.</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features py-5">
                <Container>
                    <h2 className="text-center mb-4">¿Por qué elegirnos?</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Personalización Total</Card.Title>
                                    <Card.Text>Elige entre miles de plantillas y personaliza los colores, las fuentes y las imágenes.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Envío Digital</Card.Title>
                                    <Card.Text>Envía tus invitaciones a través de email o redes sociales en minutos.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Impresión de Alta Calidad</Card.Title>
                                    <Card.Text>Si prefieres las invitaciones físicas, las imprimimos por ti con la mejor calidad.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Call to Action Section */}
            <section className="cta bg-danger text-white text-center py-5">
                <h2>¡Empieza a crear tu invitación ahora!</h2>
                <Button href="/create" variant="light" size="lg">Crear Invitación</Button>
            </section>

            {/* Footer Section */}
            <footer className="footer bg-dark text-white text-center py-3">
                <p>&copy; 2025 Invitaciones de Boda. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
