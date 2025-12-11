import React, { useCallback, useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import usePageTranslation from "../hooks/usePageTranslation";
import LanguageSelectorPopup from "../components/LanguageSelectorPopUp";


/**
 * BaseTemplate
 *
 * What this component does:
 *
 * - Imports the application's base styles.
 * - Loads the translation data.
 * - Passes the translated values to its child component.
 *
 * Recommendation:
 * - Use this template only when rendering a single child component.
 *
 * @param {Object} props
 * @param {Object} props.translationPage - Translation data for the page.
 * @param {ReactNode} props.children -*
 */
const BaseTemplate = ({ translationPage, wedding, children }) => {
  const baseUrl = process.env.REACT_APP_AWS_URL;

  const [showPopup, setShowPopup] = useState(false);
  const { changeLanguage } = useLanguage();
  const [newImages, setNewImages] = useState([]);

  const changeImages = useCallback(() => {
    if (wedding.images) {
      const imageUrls = wedding.images.map(
        (image) => `${baseUrl}${image.image}`
      );
      setNewImages(imageUrls);
    }
  }, []);

  useEffect(() => {
    changeImages();
  }, [wedding.images]);

  const { t: trad, loadingTranslation } = usePageTranslation(translationPage);

  const handleLanguageSelect = useCallback(
    (lang) => {
      changeLanguage(lang);
      sessionStorage.setItem("language", lang);
      setShowPopup(false);
    },
    [changeLanguage]
  );

  const imageUrl = `${baseUrl}${wedding.coverImage}`;

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

  const injectedProps = {
    wedding,
    images: newImages,
    coverImage: imageUrl,
    trad,
    loadingTranslation,
  };

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
