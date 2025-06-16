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

  // Función para obtener traducciones con soporte para objetos anidados
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

    return value || `[${key}]`;
  };

  return { t, loading, error };
};

export default usePageTranslation;