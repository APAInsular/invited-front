import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { lang: urlLang } = useParams();
    const [language, setLanguage] = useState("es");
    const [isContextReady, setIsContextReady] = useState(false);

    // Sincronizar idioma con la URL
    useEffect(() => {
        if (urlLang && ["es", "en"].includes(urlLang)) {
            setLanguage(urlLang);
            setIsContextReady(true);
        } else {
            setIsContextReady(true);
        }
    }, [urlLang]);

    const changeLanguage = (newLang) => {
        setLanguage(newLang);

        // Actualizar el idioma en la URL
        if (location && navigate) {
            const pathParts = location.pathname.split('/');

            // Reemplazar el segmento de idioma
            if (["es", "en"].includes(pathParts[1])) {
                pathParts[1] = newLang;
            } else {
                // Insertar nuevo idioma si no existe
                pathParts.splice(1, 0, newLang);
            }

            const newPath = pathParts.join('/');
            navigate(newPath);
        }
    };

    // Si el contexto no está listo, mostrar un loader
    if (!isContextReady) {
        return <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>;
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error(
            "useLanguage must be used within a LanguageProvider. " +
            "Wrap your root component with <LanguageProvider>"
        );
    }

    return context;
};