import React from 'react';
import CoupleNames from './components/CoupleNames_Plantilla_1';
import SongLink from './components/SongLink_Plantilla_1';
import Location from './components/Location_Plantilla_1';
import CountDown from './components/CountDown_Plantilla_1';
import Gallery from './components/Gallery_Plantilla_1';
import WeddingTimeLine from './components/WeddingTimeLine_Plantilla_1';
import WeddingForm from './components/WeddingForm_Plantilla_1';
import "./styles/style_Template1.css";
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Template_1 = ({ wedding }) => {
    const [newImages, setNewImages] = useState([]);
    const [showLanguageModal, setShowLanguageModal] = useState(false);
    const { language, changeLanguage } = useLanguage();
    const baseUrl = process.env.REACT_APP_AWS_URL;

    const changeImages = () => {
        if (wedding.images) {
            const imageUrls = wedding.images.map((image) => `${baseUrl}${image.image}`);
            setNewImages(imageUrls);
        }
    }

    useEffect(() => {
        changeImages();
        // Mostrar modal si no hay idioma seleccionado (opcional)
        const langFromStorage = localStorage.getItem('weddingLanguage');
        if (!langFromStorage) {
            setShowLanguageModal(true);
        }
    }, [wedding.images]);

    const handleLanguageSelect = (selectedLang) => {
        changeLanguage(selectedLang);
        setShowLanguageModal(false);
        localStorage.setItem('weddingLanguage', selectedLang);
    };

    const imageUrl = `${baseUrl}${wedding.coverImage}`;

    if (showLanguageModal) {
        return (
            <div className="language-modal-overlay">
                <div className="language-modal">
                    <h2>Selecciona tu idioma / Select your language</h2>
                    <div className="language-options">
                        <button
                            onClick={() => handleLanguageSelect('es')}
                            className="language-button"
                        >
                            Español
                        </button>
                        <button
                            onClick={() => handleLanguageSelect('en')}
                            className="language-button"
                        >
                            English
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='body'>
            <section className="header-invite text-center py-4 section-bg bg-portada-template1">
                <CoupleNames
                    imageUrl={imageUrl}
                    groom={wedding.user.name}
                    bride={wedding.user.partner.name}
                    location={wedding.location.city}
                    date={wedding.weddingDate}
                />
            </section>
            <section className="section-bg bg-countdown-template1 mt-4 py-5">
                <SongLink
                    songUrl={wedding.musicUrl}
                    songTitle={wedding.musicTitle}
                />
                <Location
                    location={wedding.location.city}
                    country={wedding.location.country}
                />
                <CountDown
                    weddingDate={wedding.weddingDate}
                />
            </section>
            <section className="py-5 mt-4 section-bg bg-itinerario-template1">
                <WeddingTimeLine
                    events={wedding.events}
                />
            </section>
            <section className="py-5 mt-4 section-bg bg-portada-template1">
                <Gallery
                    images={newImages}
                    speed={20}
                />
            </section>
            <section className="py-5 section-bg bg-gallery-template1">
                <WeddingForm
                    weddingId={wedding.id}
                />
            </section>
        </div>
    );
};

export default Template_1;