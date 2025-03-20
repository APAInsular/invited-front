import React from "react";
import PrivacyPolicy from "../pages/legalPages/PrivacyPolicy";
import ConditionsOfUse from "../pages/legalPages/ConditionsOfUse";
import LegalNotice from "../pages/legalPages/LegalNotice";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6 text-center">
            <div className="container mx-auto">
                <p className="mb-2">&copy; {new Date().getFullYear()} Isla32. Todos los derechos reservados.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#aviso-legal" className="hover:underline">Aviso Legal</a>
                    <a href="#politica-privacidad" className="hover:underline">Política de Privacidad</a>
                    <a href="#condiciones-uso" className="hover:underline">Condiciones de Uso</a>
                </div>
                <div className="hidden">
                    <LegalNotice />
                    <PrivacyPolicy />
                    <ConditionsOfUse />
                </div>
            </div>
        </footer>
    );
};

export default Footer;