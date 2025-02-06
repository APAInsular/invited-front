import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import apiClient from '../config/axiosConfig';
import ImagenLogo from '../Images/Logo_Invited_SinFondo.png'

const NavigationBar = () => {
    const [user, setUser] = useState(null);

    const defaultStyle = {
        padding: "5px 10px",
        margin: "0px 8px",
        border: "2px solid #F19292",
        borderRadius: "5px",
        color: "#F19292",
        textDecoration: "none",
        transition: "all 0.3s ease-in-out",
        fontWeight: "bold"
    };

    const hoverStyle = {
        backgroundColor: "#F19292",
        color: "#FAF9F8",
        fontWeight: "bold"
    };

    const [hovered, setHovered] = useState(null);

    // Obtener el usuario autenticado al cargar el componente
    useEffect(() => {
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

                console.log('Usuario:', response.data);
                setUser(response.data)
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log("Usuario no autorizado. Redirigiendo al login...");
                    // Aquí puedes redirigir al login o mostrar un mensaje al usuario
                } else {
                    console.error("Error al obtener el usuario:", error);
                }
            }
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            // Obtener el token CSRF desde el meta tag
            const getCSRFToken = () => {
                const match = document.cookie.match(new RegExp('(^| )XSRF-TOKEN=([^;]+)'));
                return match ? match[2] : null;
            };

            const csrfToken = getCSRFToken();

            // Hacer la solicitud POST para cerrar sesión
            await apiClient.post('/api/partner/logout', {}, {
                headers: {
                    'X-CSRF-TOKEN': csrfToken,  // Incluir el token CSRF en los encabezados
                },
                withCredentials: true, // Para asegurar que las cookies de sesión sean enviadas
            });

            setUser(null); // Limpiar el estado de usuario
            localStorage.removeItem('auth_token'); // Eliminar el token de autenticación local
            window.location.href = '/login'; // Redirigir a la página de login
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <Navbar bg="light" variant="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/"><img src={ImagenLogo} alt="Logo" style={{ width: "120px" }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {["Inicio", user ? `invitation/${user.name}/templates` : "invitation/noseque/templates", "login", "register"].map((path, index) => (
                            <Nav.Link
                                key={index}
                                href={path === "Inicio" ? "/" : `/${path}`}
                                style={hovered === index ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {path === "Inicio" ? "Inicio" : path.includes("invitation") ? "Crear invitación" : path === "login" ? "Iniciar Sesión" : "Registro"}
                            </Nav.Link>
                        ))}

                        {user && (
                            <>
                                <Nav.Link
                                    href="/profile"
                                    style={hovered === "profile" ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
                                    onMouseEnter={() => setHovered("profile")}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    Perfil
                                </Nav.Link>
                                <Button
                                    variant="outline-light"
                                    onClick={handleLogout}
                                    style={
                                        hovered === "logout"
                                            ? { backgroundColor: "white", color: "#F19292", border: "2px solid white" }
                                            : { border: "2px solid white", color: "white" }
                                    }
                                    onMouseEnter={() => setHovered("logout")}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    Cerrar Sesión
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
