import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLanguage } from '../context/LanguageContext'; // Ajusta la ruta según tu estructura

const LanguageSelector = () => {
    const { language, changeLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'es', name: 'Español', flag: 'https://flagcdn.com/es.svg' },
        { code: 'en', name: 'English', flag: 'https://flagcdn.com/gb.svg' }
    ];

    const selectedLang = languages.find(lang => lang.code === language);

    // Cerrar el dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode); // Actualiza el contexto de idioma
        setIsOpen(false);
    };

    // Estilos personalizados
    const styles = {
        container: {
            position: 'relative',
            display: 'inline-block',
            fontFamily: 'Arial, sans-serif',
            width: '120px',
            margin: '4px 8px'
        },
        triggerButton: {
            display: 'flex',
            alignItems: 'center',
            padding: '5px 10px',
            border: '2px solid #F19292',
            borderRadius: '5px',
            color: '#F19292',
            textDecoration: 'none',
            transition: 'all 0.3s ease-in-out',
            fontWeight: 'bold',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            width: '100%',
            justifyContent: 'space-between'
        },
        triggerButtonHover: {
            backgroundColor: 'rgba(241, 146, 146, 0.1)',
            transform: 'scale(1.02)'
        },
        dropdown: {
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            border: '2px solid #F19292',
            borderRadius: '5px',
            marginTop: '5px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: 1000,
            overflow: 'hidden'
        },
        option: {
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            cursor: 'pointer',
            backgroundColor: 'white',
            transition: 'all 0.3s ease-in-out',
            color: '#333',
            textDecoration: 'none',
            fontWeight: 'normal'
        },
        optionHover: {
            backgroundColor: 'rgba(241, 146, 146, 0.1)',
            color: '#F19292',
            fontWeight: 'bold'
        },
        optionSelected: {
            backgroundColor: 'rgba(241, 146, 146, 0.2)',
            color: '#F19292',
            fontWeight: 'bold'
        }
    };

    return (
        <div style={styles.container} ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    ...styles.triggerButton,
                    ...(hoveredItem === 'trigger' ? styles.triggerButtonHover : {})
                }}
                onMouseEnter={() => setHoveredItem('trigger')}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={selectedLang.flag}
                        alt={selectedLang.name}
                        width="24"
                        style={{ marginRight: '8px' }}
                    />
                    <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                        {selectedLang.code}
                    </span>
                </div>
                <span style={{ fontSize: '12px' }}>{isOpen ? '▲' : '▼'}</span>
            </div>

            {isOpen && (
                <div style={styles.dropdown}>
                    {languages.map(lang => {
                        const isSelected = language === lang.code;
                        const isHovered = hoveredItem === lang.code;

                        return (
                            <div
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                onMouseEnter={() => setHoveredItem(lang.code)}
                                onMouseLeave={() => setHoveredItem(null)}
                                style={{
                                    ...styles.option,
                                    ...(isSelected ? styles.optionSelected : {}),
                                    ...(isHovered ? styles.optionHover : {})
                                }}
                            >
                                <img
                                    src={lang.flag}
                                    alt={lang.name}
                                    width="24"
                                    style={{ marginRight: '10px' }}
                                />
                                <div>
                                    <div style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                        {lang.code}
                                    </div>
                                    <div style={{ fontSize: '12px', color: '#666' }}>
                                        {lang.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;