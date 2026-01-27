import React, { useState, useRef, useEffect } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faUserPlus, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import usePageTranslation from '../hooks/usePageTranslation';

const UserMenu = ({ user, logout }) => {
    const { translate: t, loadingTranslation } = usePageTranslation('navigation');
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);
    const { lang } = useParams();

    // Debug user state changes
    useEffect(() => {
        console.log('User state changed:', user);
    }, [user]);

    // Close menu when clicking outside
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

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const localizedLink = (path) => {
        return `/${lang}${path}`;
    };

    const styles = {
        menuButton: {
            border: scrolled ? "2px solid #F19292" : "2px solid #fff",
            color: scrolled ? "#F19292" : "#fff",
            background: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            padding: '5px 10px',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.3s ease-in-out',
            fontWeight: 'bold',
            ...(hoveredItem === 'trigger' && {
                backgroundColor: scrolled ? "#F19292" : "#fff",
                color: scrolled ? "white" : "#F19292"
            })
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
            padding: '8px 12px',
            color: scrolled ? '#333' : '#fff',
            textDecoration: 'none',
            '&:hover': {
                backgroundColor: scrolled ? "#F19292" : "#fff",
                color: scrolled ? "white" : "#F19292"
            }
        }
    };

    // Enhanced user check with debugging
    const isUserLoggedIn = (() => {
        const isValid = user && typeof user === 'object' && Object.keys(user).length > 0;
        if (!isValid && user !== null) {
            console.warn(t('userMenu.errors.invalidUserObject'), user);
        }
        return isValid;
    })();

    if (loadingTranslation) {
        return null; // or a loading spinner
    }

    return (
        <div ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
            <Button
                variant="outline-light"
                onClick={toggleMenu}
                style={styles.menuButton}
                onMouseEnter={() => setHoveredItem('trigger')}
                onMouseLeave={() => setHoveredItem(null)}
                aria-expanded={isOpen}
                aria-label={t('userMenu.userMenuLabel')}
            >
                <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                {isUserLoggedIn && user.name && (
                    <span style={{ marginRight: '5px' }}>{user.name}</span>
                )}
                <span style={{ fontSize: '12px' }}>{isOpen ? '▲' : '▼'}</span>
            </Button>

            {isOpen && (
                <div style={styles.dropdown}>
                    {!isUserLoggedIn ? (
                        <>
                            <Nav.Link
                                href={localizedLink("/login")}
                                style={styles.menuItem}
                                onMouseEnter={() => setHoveredItem("login")}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <FontAwesomeIcon icon={faSignInAlt} />
                                <span>{t('userMenu.signIn')}</span>
                            </Nav.Link>

                            <Nav.Link
                                href={localizedLink("/register")}
                                style={styles.menuItem}
                                onMouseEnter={() => setHoveredItem("register")}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <FontAwesomeIcon icon={faUserPlus} />
                                <span>{t('userMenu.register')}</span>
                            </Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link
                                href={localizedLink("/dashboard")}
                                style={styles.menuItem}
                                onMouseEnter={() => setHoveredItem("profile")}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <FontAwesomeIcon icon={faCog} />
                                <span>{t('userMenu.dashboard')}</span>
                            </Nav.Link>

                            <Nav.Link
                                as="button"
                                onClick={logout}
                                style={styles.menuItem}
                                onMouseEnter={() => setHoveredItem("logout")}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                <span>{t('userMenu.logOut')}</span>
                            </Nav.Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

UserMenu.propTypes = {
    user: PropTypes.oneOfType([
        PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        }),
        PropTypes.oneOf([null, undefined])
    ]),
    logout: PropTypes.func.isRequired
};

UserMenu.defaultProps = {
    user: null
};

export default UserMenu;