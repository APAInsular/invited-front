import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import apiClient from '../config/axiosConfig';

const NavigationBar = () => {
    const [user, setUser] = useState(null);

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
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">Invitaciones de Boda</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        {user ? (
                            <>
                                <Nav.Link href={`/invitation/${user.name}/templates`}>Crear invitación</Nav.Link>
                                <Nav.Link href="/profile">Perfil</Nav.Link>
                                <Button variant="outline-light" onClick={handleLogout}>Cerrar Sesión</Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link href={`/invitation/noseque/templates`}>Crear invitación</Nav.Link>
                                <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                                <Nav.Link href="/register">Registro</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
