// src/context/LanguageContext.jsx
import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const pathLang = location.pathname.split("/")[1];
    const defaultLang = pathLang === "en" ? "en" : "es";
    const [language, setLanguage] = useState(defaultLang);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        const pathParts = location.pathname.split("/");
        pathParts[1] = lang;
        navigate(pathParts.join("/"));
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
