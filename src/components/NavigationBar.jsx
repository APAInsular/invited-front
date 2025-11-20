import ImagenLogo from '../Images/Logo_invited_recortado-removebg-preview.png';
import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LanguageSelector from './LanguageSelector';
import UserMenu from './UserMenu';
import ImagenLogoBlanco from '../Images/Logo_invited_recortado_blanco.png';
import usePageTranslation from '../hooks/usePageTranslation';

const NavigationBar = () => {
    const { user, logout } = useContext(AuthContext);
    const [hovered, setHovered] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const { lang } = useParams();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const localizedLink = (path) => {
        return `/${lang}${path}`;
    };

    const styles = {
        default: {
            padding: "5px 10px",
            margin: "4px 8px",
            border: scrolled ? "2px solid #F19292" : "2px solid #fff",
            borderRadius: "5px",
            color: scrolled ? "#F19292" : "#fff",
            textDecoration: "none",
            transition: "all 0.3s ease-in-out",
            fontWeight: "bold"
        },
        hover: {
            backgroundColor: scrolled ? "#F19292" : "#fff",
            color: scrolled ? "white" : "#F19292"
        },
        navbar: {
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
            boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.4s ease-in-out',
            padding: '10px 0'
        }
    };

    const { t, loadingTranslation } = usePageTranslation('navigation');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    return (
        <Navbar expand="lg" style={styles.navbar} fixed="top">
            <Container>
                <Navbar.Brand as={Link} to={localizedLink("/")} style={{ fontWeight: 'bold', color: '#F19292' }}>
                    <img src={ImagenLogo} alt="Logo" style={{ width: "120px" }} />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${scrolled ? '%23F19292' : 'white'}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: '24px 24px',
                        width: '40px',
                        height: '40px',
                        zIndex: 1100,
                    }}
                >
                    <span style={{ display: 'none' }}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" style={{
                    backgroundColor: scrolled ? 'transparent' : 'rgba(0, 0, 0, 0.8)',
                    borderRadius: '10px',
                    padding: '10px'
                }}>
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to={localizedLink("/")}
                            style={hovered === "home" ? { ...styles.default, ...styles.hover } : styles.default}
                            onMouseEnter={() => setHovered("home")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {t('navigation.home')}
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={localizedLink("/about-us")}
                            style={hovered === "about" ? { ...styles.default, ...styles.hover } : styles.default}
                            onMouseEnter={() => setHovered("about")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {t('navigation.about')}
                        </Nav.Link>
                        <Nav.Link
                            href="https://blog.invited.es/"
                            style={hovered === "blog" ? { ...styles.default, ...styles.hover } : styles.default}
                            onMouseEnter={() => setHovered("blog")}
                            onMouseLeave={() => setHovered(null)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('navigation.blog')}
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={localizedLink("/contact")}
                            style={hovered === "contact" ? { ...styles.default, ...styles.hover } : styles.default}
                            onMouseEnter={() => setHovered("contact")}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {t('navigation.contact')}
                        </Nav.Link>
                    </Nav>
                    <LanguageSelector scrolled={scrolled} />
                    <UserMenu user={user} logout={logout} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;