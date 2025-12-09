import React, { useCallback, useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import usePageTranslation from '../hooks/usePageTranslation';
import LanguageSelectorPopup from '../components/LanguageSelectorPopUp';

const BaseTemplate = ({ translationPage, children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { changeLanguage } = useLanguage();

  const { t: trad, loadingTranslation } = usePageTranslation(translationPage);

  const handleLanguageSelect = useCallback((lang) => {
    changeLanguage(lang);
    sessionStorage.setItem("language", lang);
    setShowPopup(false);
  }, [changeLanguage]);

  useEffect(() => {
    const storedLang = sessionStorage.getItem("language");
    if (storedLang) {
      changeLanguage(storedLang);
    } else {
      setShowPopup(true);
    }
  }, []);

  if (showPopup)
    return <LanguageSelectorPopup onSelect={handleLanguageSelect} />;

  if (loadingTranslation)
    return <div className="text-center py-5">Loading translations...</div>;

  const injectedProps = { trad, loadingTranslation };

  return (
    <>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, injectedProps)
          : child
      )}
    </>
  );
};

export default BaseTemplate;
