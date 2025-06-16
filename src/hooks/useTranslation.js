// src/hooks/useTranslation.js
import { useLanguage } from "../context/LanguageContext";

const useTranslation = () => {
    const { language } = useLanguage();

    // Aquí importamos dinámicamente los archivos JSON
    const translations = {
        en: {
            title: "Make your digital invitations",
            subtitle: "Easy, elegant, and with real-time guest confirmations",
            why: {
                title: "Why choose us?",
                reasons: "Professional designs and instant notifications"
            },
            cta: "Create invitation"
        },
        es: {
            title: "Crea tus invitaciones digitales",
            subtitle: "Fácil, elegante y con confirmaciones en tiempo real",
            why: {
                title: "¿Por qué elegirnos?",
                reasons: "Diseños profesionales y notificaciones instantáneas"
            },
            cta: "Crear invitación"
        }
    };

    return (key) => {
        // Divide la clave por puntos para manejar objetos anidados
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value[k];
            if (value === undefined) break;
        }

        return value || `[${key}]`; // Devuelve la clave si no encuentra la traducción
    };
};

export default useTranslation;