import React, { useState, useRef, useEffect } from 'react';
import { Nav, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faUserPlus, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';

const UserMenu = ({ user, logout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const styles = {
        default: {
            color: '#F19292',
            textDecoration: 'none',
            padding: '8px 15px',
            display: 'block',
            transition: 'all 0.3s ease'
        },
        hover: {
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '4px'
        },
        menuButton: {
            background: 'none',
            border: 'none',
            color: '#F19292',
            cursor: 'pointer',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center'
        },
        dropdown: {
            position: 'absolute',
            top: '100%',
            right: '0',
            backgroundColor: '#333',
            borderRadius: '4px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            minWidth: '200px',
            zIndex: 1000,
            marginTop: '5px'
        },
        menuItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        }
    };

    return (
        <div ref={menuRef} className='d-flex align-items-center' style={{ position: 'relative', display: 'inline-block' }}>
            <Button
                variant="outline-light"
                onClick={toggleMenu}
                style={styles.menuButton}
                aria-expanded={isOpen}
                aria-label="Menú de usuario"
            >
                <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                {user && user.name && (
                    <span style={{ marginRight: '5px' }}>{user.name}</span>
                )}
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