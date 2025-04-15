import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-light py-3 mt-auto">
            <div className="container">
                <nav className="d-flex flex-wrap justify-content-center gap-3 mb-2">
                    <a href="/aviso-legal" className="text-decoration-none" style={{ color: "#bc7272" }}>
                        Aviso Legal
                    </a>
                    <a href="/politica-de-privacidad" className="text-decoration-none" style={{ color: "#bc7272" }}>
                        Política de Privacidad
                    </a>
                    <a href="/terminos-y-condiciones" className="text-decoration-none" style={{ color: "#bc7272" }}>
                        Términos y Condiciones
                    </a>
                    <a href="/politica-de-cookies" className="text-decoration-none" style={{ color: "#bc7272" }}>
                        Política de Cookies
                    </a>
                </nav>
                <div className="d-flex justify-content-center mb-2">
                    <a rel='nofollow' href='https://www.bodas.net/' title='Bodas.net'><img alt='Bodas.net' src='https://www.bodas.net/images/sellos/Sello-bodas-peq--pp271919.png' /></a>
                </div>
                <p className="text-center text-muted mb-0">
                    &copy; Invited.es - Desarrollada con <span className="text-danger">♥</span> por{" "}
                    <a
                        href="https://platita.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                        style={{ color: "#bc7272" }}
                    >
                        Platita Software
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;