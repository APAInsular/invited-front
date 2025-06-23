import React from "react";
import { Link, useParams } from "react-router-dom";

const Footer = () => {
    const { lang } = useParams();
    // Función para generar enlaces con el idioma actual
    const localizedLink = (path) => {
        return `/${lang}${path}`;
    };

    return (
        <footer className="bg-light py-3 mt-auto">
            <div className="container">
                <nav className="d-flex flex-wrap justify-content-center gap-3 mb-2">
                    <a href={localizedLink("/aviso-legal")} className="text-decoration-none" style={{ color: "#bc7272" }}>
                        Aviso Legal
                    </a>
                    <a href={localizedLink("/politica-de-privacidad")} className="text-decoration-none" style={{ color: "#bc7272" }}>
                        Política de Privacidad
                    </a>
                    <a href={localizedLink("/terminos-y-condiciones")} className="text-decoration-none" style={{ color: "#bc7272" }}>
                        Términos y Condiciones
                    </a>
                    <a href={localizedLink("/politica-de-cookies")} className="text-decoration-none" style={{ color: "#bc7272" }}>
                        Política de Cookies
                    </a>
                </nav>
                <div className="d-flex justify-content-center mb-2">
                    <div className="d-flex justify-content-center mb-2">
                        <a target="_blank" rel="noopener noreferrer" href="https://peerlist.io/javierjg/project/invited" title="Peerlist">
                            <img src="/assets/icons/Peerlist_Launchpad.png" alt="Peerlist" style={{ width: "300px" }} />
                        </a>
                    </div>
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