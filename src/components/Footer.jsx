import React from "react";
import { Link, useParams } from "react-router-dom";
import usePageTranslation from '../hooks/usePageTranslation';

const Footer = () => {
    const { lang } = useParams();
    // Función para generar enlaces con el idioma actual
    const localizedLink = (path) => {
        return `/${lang}${path}`;
    };
    const { t, loadingTranslation } = usePageTranslation('footerPage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }
    return (
        <footer className="bg-light py-3 mt-auto">
            <div className="container">
                <nav className="d-flex flex-wrap justify-content-center gap-3 mb-2">
                    <a href={localizedLink("/aviso-legal")} className="text-decoration-none" style={{ color: "#bc7272" }}>
                        {t('legalNotice')}
                    </a>
                    <a href={localizedLink("/politica-de-privacidad")} className="text-decoration-none" style={{ color: "#bc7272" }}>
                        {t('privacyPolicy')}
                    </a>
                    <a href={localizedLink("/terminos-y-condiciones")} className="text-decoration-none" style={{ color: "#bc7272" }}>
                        {t('termsOfUse')}
                    </a>
                    <a href={localizedLink("/politica-de-cookies")} className="text-decoration-none" style={{ color: "#bc7272" }}>
                        {t('cookiePolicy')}
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
                    {t('footer')}
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