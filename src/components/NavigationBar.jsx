import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import ImagenLogo from '../Images/Logo_Invited_SinFondo.png';

const NavigationBar = () => {
    const { user, logout } = useContext(AuthContext);
    const [hovered, setHovered] = useState(null);

    const styles = {
        default: {
            padding: "5px 10px",
            margin: "4px 8px",
            border: "2px solid #F19292",
            borderRadius: "5px",
            color: "#F19292",
            textDecoration: "none",
            transition: "all 0.3s ease-in-out",
            fontWeight: "bold"
        },
        hover: {
            backgroundColor: "#F19292",
            color: "#FAF9F8",
            fontWeight: "bold"
        },
        select: {
            fontSize: "1rem",
            padding: "0.4rem 0.8rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            backgroundColor: "white",
            cursor: "pointer"
        },
        option: {
            fontSize: "1rem"
        }
    };

    const redirectToMain = () => {
        window.location.href = "/";
    };

    return (
        <Navbar bg="light" variant="light" expand="lg" fixed="top" style={{ boxShadow: "0 2px 10px grey" }}>
            <Container>
                <Navbar.Brand onClick={redirectToMain}>
                    <img src={ImagenLogo} alt="Logo" style={{ width: "120px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" style={hovered === "home" ? { ...styles.default, ...styles.hover } : styles.default}
                            onMouseEnter={() => setHovered("home")}
                            onMouseLeave={() => setHovered(null)}>Inicio
                        </Nav.Link>
                        <Nav.Link
                            href="/about-us"
                            style={hovered === "about" ? { ...styles.default, ...styles.hover } : styles.default}
                            onMouseEnter={() => setHovered("about")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Sobre nosotros
                        </Nav.Link>
                        <Nav.Link
                            href="/crowfunding"
                            style={hovered === "crowfunding" ? { ...styles.default, ...styles.hover } : styles.default}
                            onMouseEnter={() => setHovered("crowfunding")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Crowfunding
                        </Nav.Link>
                        <Nav.Link
                            href="https://blog.invited.es"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={hovered === "blog" ? { ...styles.default, ...styles.hover } : styles.default}
                            onMouseEnter={() => setHovered("blog")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Blog
                        </Nav.Link>
                        <Nav.Link
                            href="/contact"
                            style={hovered === "contact" ? { ...styles.default, ...styles.hover } : styles.default}
                            onMouseEnter={() => setHovered("contact")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Contacto
                        </Nav.Link>

                        {/* <select style={{ ...styles.select }} value={language} onChange={handleChange}>
                            <option style={{ ...styles.option }} value="es">🇪🇸 ES</option>
                            <option style={{ ...styles.option }} value="en">🇬🇧 EN</option>
                        </select> */}

                        {!user ? (
                            <>
                                <Nav.Link href="/login" style={hovered === "login" ? { ...styles.default, ...styles.hover } : styles.default}
                                    onMouseEnter={() => setHovered("login")}
                                    onMouseLeave={() => setHovered(null)}>Iniciar Sesión</Nav.Link>

                                <Nav.Link href="/register" style={hovered === "register" ? { ...styles.default, ...styles.hover } : styles.default}
                                    onMouseEnter={() => setHovered("register")}
                                    onMouseLeave={() => setHovered(null)}>Registro</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/dashboard" style={hovered === "profile" ? { ...styles.default, ...styles.hover } : styles.default}
                                    onMouseEnter={() => setHovered("profile")}
                                    onMouseLeave={() => setHovered(null)}>Panel</Nav.Link>
                                <Button variant="outline-light" onClick={logout} style={hovered === "logout" ? { ...styles.default, ...styles.hover } : styles.default}
                                    onMouseEnter={() => setHovered("logout")}
                                    onMouseLeave={() => setHovered(null)}>Cerrar Sesión</Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
