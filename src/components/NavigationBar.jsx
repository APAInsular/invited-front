import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import apiClient from '../config/axiosConfig';
import ImagenLogo from '../Images/Logo_Invited_SinFondo.png';

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

    const redirectToMain = () => {
        if (user) {
            window.location.href = `/${user.Name}&${user.partner.Name}`;
        } else {
            window.location.href = '/';
        }
    }

    // Obtener el usuario autenticado al cargar el componente
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem('auth_token');

                if (!token) {
                    console.log("No hay usuario autenticado.");
                    return;
                }

                const response = await apiClient.get('/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log('Usuario:', response.data);
                setUser(response.data);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log("Usuario no autorizado. Redirigiendo al login...");
                } else {
                    console.error("Error al obtener el usuario:", error);
                }
            }
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            const token = sessionStorage.getItem('auth_token');

            await apiClient.post('/api/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            setUser(null);
            sessionStorage.removeItem('auth_token');
            window.location.href = '/login';
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <Navbar bg="light" variant="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand onClick={() => redirectToMain()}>
                    <img src={ImagenLogo} alt="Logo" style={{ width: "120px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="/"
                            style={hovered === "home" ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
                            onMouseEnter={() => setHovered("home")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Inicio
                        </Nav.Link>

                        <Nav.Link
                            href={user ? `/invitation/${user.name}/templates` : "/invitation/noseque/templates"}
                            style={hovered === "invitation" ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
                            onMouseEnter={() => setHovered("invitation")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Crear invitación
                        </Nav.Link>

                        {!user ? (
                            <>
                                <Nav.Link
                                    href="/login"
                                    style={hovered === "login" ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
                                    onMouseEnter={() => setHovered("login")}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    Iniciar Sesión
                                </Nav.Link>

                                <Nav.Link
                                    href="/register"
                                    style={hovered === "register" ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
                                    onMouseEnter={() => setHovered("register")}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    Registro
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link
                                    href="/dashboard"
                                    style={hovered === "profile" ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
                                    onMouseEnter={() => setHovered("profile")}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    Panel
                                </Nav.Link>
                                <Button
                                    variant="outline-light"
                                    onClick={handleLogout}
                                    style={hovered === "logout" ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
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
