import React, { useState, useRef, useEffect } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faUserPlus, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';

const UserMenu = ({ user, logout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);

    // Cerrar el menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const styles = {
        default: {
            padding: "5px 10px",
            margin: "4px 8px",
            border: scrolled ? "2px solid #F19292" : "2px solid #fff",
            borderRadius: "5px",
            color: scrolled ? "#F19292" : "#fff",
            textDecoration: "none",
            transition: "all 0.3s ease-in-out",
            fontWeight: "bold",
            backgroundColor: 'transparent'
        },
        hover: {
            backgroundColor: scrolled ? "#F19292" : "#fff",
            color: scrolled ? "white" : "#F19292"
        },
        menuButton: {
            ...(scrolled ? {
                border: "2px solid #F19292",
                color: "#F19292"
            } : {
                border: "2px solid #fff",
                color: "#fff"
            }),
            background: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            padding: '5px 10px',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.3s ease-in-out',
            fontWeight: 'bold'
        },
        dropdown: {
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: scrolled ? 'white' : '#333',
            border: scrolled ? '2px solid #F19292' : '2px solid #fff',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            minWidth: '200px',
            zIndex: 1000,
            marginTop: '5px',
            overflow: 'hidden'
        },
        menuItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 12px'
        }
    };

    return (
        <div ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
            <Button
                variant="outline-light"
                onClick={toggleMenu}
                style={{
                    ...styles.menuButton,
                    ...(hoveredItem === 'trigger' ? styles.hover : {})
                }}
                onMouseEnter={() => setHoveredItem('trigger')}
                onMouseLeave={() => setHoveredItem(null)}
                aria-expanded={isOpen}
                aria-label="Menú de usuario"
            >
                <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                {user?.name && <span style={{ marginRight: '5px' }}>{user.name}</span>}
                <span style={{ fontSize: '12px' }}>{isOpen ? '▲' : '▼'}</span>
            </Button>

            {isOpen && (
                <div style={styles.dropdown}>
                    {!user ? (
                        <>
                            <Nav.Link
                                href="/login"
                                style={hoveredItem === "login" ? { ...styles.default, ...styles.hover } : styles.default}
                                onMouseEnter={() => setHoveredItem("login")}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div style={styles.menuItem}>
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                    <span>Iniciar Sesión</span>
                                </div>
                            </Nav.Link>

                            <Nav.Link
                                href="/register"
                                style={hoveredItem === "register" ? { ...styles.default, ...styles.hover } : styles.default}
                                onMouseEnter={() => setHoveredItem("register")}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div style={styles.menuItem}>
                                    <FontAwesomeIcon icon={faUserPlus} />
                                    <span>Registro</span>
                                </div>
                            </Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link
                                href="/dashboard"
                                style={hoveredItem === "profile" ? { ...styles.default, ...styles.hover } : styles.default}
                                onMouseEnter={() => setHoveredItem("profile")}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div style={styles.menuItem}>
                                    <FontAwesomeIcon icon={faCog} />
                                    <span>Panel de Usuario</span>
                                </div>
                            </Nav.Link>

                            <Nav.Link
                                as="button"
                                onClick={logout}
                                style={hoveredItem === "logout" ? { ...styles.default, ...styles.hover } : styles.default}
                                onMouseEnter={() => setHoveredItem("logout")}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div style={styles.menuItem}>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    <span>Cerrar Sesión</span>
                                </div>
                            </Nav.Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserMenu;