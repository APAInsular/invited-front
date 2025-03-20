import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiClient from '../config/axiosConfig';
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import '../templates/styles/LandingPage.css'

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
            <section id="inicio" class="hero">
                <div class="hero-overlay">
                    <div class="container hero-content">
                        <h1>Crea tus invitaciones de boda digitales</h1>
                        <p>Fácil, elegante y con confirmaciones de invitados en tiempo real.</p>
                        {
                            user ?
                                <Link to={`/${user.name}&${user.partner.name}/invitation/plantilla/form`} class="btn btn-primary">Empieza Ahora</Link>
                                :
                                <Link to="/login" class="btn btn-primary">Empieza Ahora</Link>
                        }
                    </div>
                </div>
            </section>

            <div className="container mt-3">
                <Card className="shadow-lg rounded-4" style={{ backgroundColor: "#FAF9F8", border: "none" }}>
                    <Card.Body>
                        <Card.Text className="mb-4" style={{ fontSize: "1.1rem", color: "#555" }}>
                            <ul style={{ lineHeight: "1.8" }}>
                                <li>Personalización del itinerario</li>
                                <li>Tabla con los invitados y sus acompañantes</li>
                                <li>Correos cada vez que alguien confirme</li>
                                <li>Cuenta atrás para tu boda</li>
                                <li>Diseño bonito y elegante</li>
                                <li>Comodidad a la hora de enviar y manejar las invitaciones</li>
                                <li>La tendrás al instante una vez se haya realizado el pago</li>
                                <li>Podrás elegir una canción especial para que suene mientras tus invitados ven la invitación</li>
                            </ul>
                        </Card.Text>
                        <Card.Title className="text-center mb-4" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
                            <span style={{ color: "#E57373" }}>Precio:</span> 119€
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>

            <section id="como-funciona" class="como-funciona">
                <div class="container">
                    <h2>Cómo Funciona</h2>
                    <div class="pasos">
                        <div class="paso">
                            <span>1</span>
                            <h3>Regístrate</h3>
                            <p>Crea tu cuenta e inicia tu proyecto de invitación digital.</p>
                        </div>
                        <div class="paso">
                            <span>2</span>
                            <h3>Personaliza</h3>
                            <p>Elige la plantilla, colores y añade la información de tu boda.</p>
                        </div>
                        <div class="paso">
                            <span>3</span>
                            <h3>Comparte</h3>
                            <p>Envía la invitación a tus invitados por email, WhatsApp o redes sociales.</p>
                        </div>
                        <div class="paso">
                            <span>4</span>
                            <h3>Gestiona</h3>
                            <p>Revisa confirmaciones y mantén todo bajo control en tu panel.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta" class="cta-section">
                <div class="container">
                    <h2>Comienza Hoy Mismo</h2>
                    <p>Convierte tu boda en una experiencia digital inolvidable.</p>
                    <a href="#" class="btn btn-secondary">Crear Mi Invitación</a>
                </div>
            </section>

            <section id="contacto" class="contacto">
                <div class="container">
                    <h2>¿Tienes preguntas?</h2>
                    <p>Déjanos tu mensaje y te responderemos en breve.</p>
                    <form action="#" method="POST" class="form-contacto">
                        <label for="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" required />

                        <label for="email">Correo Electrónico</label>
                        <input type="email" id="email" name="email" required />

                        <label for="mensaje">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </section>

            <footer class="footer">
                <div class="container">
                    <nav class="footer-nav">
                        <Link to={"/avisoLegal"}>Aviso Legal</Link>
                        <Link to={"/politicaDePrivacidad"}>Política de Privacidad</Link>
                        <Link to={"/condicionesDeUso"}>Términos y Condiciones</Link>
                        <Link to={"/politicaDeCookies"}>Política de Cookies</Link>
                    </nav>
                    <p class="footer-copy">
                        &copy; Invited.es Desarrollada con &hearts; by
                        <a href="https://platita.es" target="_blank" rel="noopener noreferrer">Platita Software</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
