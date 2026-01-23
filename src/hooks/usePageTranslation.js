import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const usePageTranslation = (pageName) => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setLoading(true);

        // Importación dinámica del archivo JSON
        const module = await import(`../translate/${language}/${pageName}.json`);

        setTranslations(module.default || module);
        setError(null);
      } catch (err) {
        console.error(`Error loading translations for ${pageName}:`, err);
        setError(err);
        setTranslations({});
      } finally {
        setLoading(false);
      }
    };

    if (language) {
      loadTranslations();
    }
  }, [language, pageName]);

  // Función mejorada para obtener traducciones
  const t = (key) => {
    if (!translations) return `[${key}]`;

    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }

    // Si el valor es undefined, retornar la clave entre corchetes
    if (value === undefined) {
      return `[${key}]`;
    }

    // Si el valor es un objeto, retornarlo tal cual (para text, fields, etc.)
    // Si es un string/número, también retornarlo
    return value;
  };

  return { t, loading, error };
};

export default usePageTranslation;