import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = ({ scrolled }) => {
    const { language, changeLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'es', name: 'Español', flag: 'https://flagcdn.com/es.svg' },
        { code: 'en', name: 'English', flag: 'https://flagcdn.com/gb.svg' }
    ];

    const selectedLang = languages.find(lang => lang.code === language) || languages[0];

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
        changeLanguage(langCode);
        setIsOpen(false);
    };

    // Estilos basados en el estado scrolled
    const styles = {
        container: {
            position: 'relative',
            display: 'inline-block',
            fontFamily: 'Arial, sans-serif',
            margin: '4px 8px'
        },
        triggerButton: {
            display: 'flex',
            alignItems: 'center',
            padding: '5px 10px',
            border: scrolled ? '2px solid #F19292' : '2px solid #fff',
            borderRadius: '5px',
            color: scrolled ? '#F19292' : '#fff',
            textDecoration: 'none',
            transition: 'all 0.3s ease-in-out',
            fontWeight: 'bold',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            justifyContent: 'space-between'
        },
        triggerButtonHover: {
            backgroundColor: scrolled ? '#F19292' : '#fff',
            color: scrolled ? 'white' : '#F19292'
        },
        dropdown: {
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
            border: scrolled ? '2px solid #F19292' : '2px solid #fff',
            borderRadius: '5px',
            marginTop: '5px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: 1000,
            overflow: 'hidden',
            backdropFilter: 'blur(5px)'
        },
        option: {
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'all 0.3s ease-in-out',
            color: scrolled ? '#333' : '#fff',
            textDecoration: 'none',
            fontWeight: 'normal'
        },
        optionHover: {
            backgroundColor: scrolled ? 'rgba(241, 146, 146, 0.3)' : 'rgba(255, 255, 255, 0.3)',
            color: scrolled ? '#F19292' : '#fff',
            fontWeight: 'bold'
        },
        optionSelected: {
            backgroundColor: scrolled ? 'rgba(241, 146, 146, 0.2)' : 'rgba(255, 255, 255, 0.2)',
            color: scrolled ? '#F19292' : '#fff',
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
                        height="18"
                        style={{ marginRight: '8px' }}
                    />
                    <span style={{ fontWeight: 'bold', textTransform: 'uppercase', marginRight: "25px" }}>
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
                                    height="18"
                                    style={{ marginRight: '10px' }}
                                />
                                <div>
                                    <div style={{ fontSize: '12px', color: scrolled ? '#666' : '#ddd' }}>
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