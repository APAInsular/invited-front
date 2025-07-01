import React from 'react';
import "../templates/Template_1/styles/style_Template1.css"

const LanguageSelectorPopup = ({ onSelect }) => {
    return (
        <div className="language-popup">
            <div className="popup-content">
                <h2>Select Language / Selecciona idioma</h2>
                <button onClick={() => onSelect('es')}>Español</button>
                <button onClick={() => onSelect('en')}>English</button>
            </div>
        </div>
    );
};

export default LanguageSelectorPopup;
