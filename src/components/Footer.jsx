import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-light py-3 mt-auto">
            <div className="container">
                <nav className="d-flex flex-wrap justify-content-center gap-3 mb-2">
                    <Link to="/aviso-legal" className="text-decoration-none">
                        Aviso Legal
                    </Link>
                    <Link to="/politica-de-privacidad" className="text-decoration-none">
                        Política de Privacidad
                    </Link>
                    <Link to="/terminos-y-condiciones" className="text-decoration-none">
                        Términos y Condiciones
                    </Link>
                    <Link to="/politica-de-cookies" className="text-decoration-none">
                        Política de Cookies
                    </Link>
                </nav>
                <p className="text-center text-muted mb-0">
                    &copy; Invited.es - Desarrollada con <span className="text-danger">♥</span> por{" "}
                    <a
                        href="https://platita.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                    >
                        Platita Software
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;