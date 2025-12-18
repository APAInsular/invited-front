import React from 'react';
import CoupleNames from './components/CoupleNames_Plantilla_5';
import SongLink from './components/SongLink_Plantilla_5';
import Location from './components/Location_Plantilla_5';
import CountDown from './components/CountDown_Plantilla_5';
import Gallery from './components/Gallery_Plantilla_5';
import WeddingTimeLine from './components/WeddingTimeLine_Plantilla_5';
import WeddingForm from './components/WeddingForm_Plantilla_5';


import LanguageSelectorPopup from '../../components/LanguageSelectorPopUp';
import { useLanguage } from "../../context/LanguageContext";
import usePageTranslation from '../../hooks/usePageTranslation';

import "./styles/style_Template5.css"

import { useEffect, useState } from 'react';

const Template_5 = ({ wedding }) => {
    const [newImages, setNewImages] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const { changeLanguage } = useLanguage();

    const { t, loadingTranslation } = usePageTranslation();

    const baseUrl = process.env.REACT_APP_AWS_URL;

    const changeImages = () => {
        if (wedding.images) {
            const imageUrls = wedding.images.map((image) => `${baseUrl}${image.image}`);
            setNewImages(imageUrls);
        }
    };
    

    useEffect(() => {
        changeImages();
    }, [wedding.images]);

    useEffect(() => {
        const storedLang = localStorage.getItem('language');
        if (storedLang) {
            changeLanguage(storedLang);
        } else {
            setShowPopup(true);
        }
    }, []);

    const handleLanguageSelect = (lang) => {
        changeLanguage(lang)
        localStorage.setItem('language', lang);
        setShowPopup(false);
    };

    const imageUrl = `${baseUrl}${wedding.coverImage}`;

    if (showPopup) {
        return <LanguageSelectorPopup onSelect={handleLanguageSelect} />;
    }

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }


    return (
        <div className='body-template5'>
            <section className="text-center  py-4 section-bg-template5 bg-portada-template5">
                <CoupleNames imageUrl={imageUrl} groom={wedding.user.name} bride={wedding.user.partner.name} location={wedding.location.city} date={wedding.weddingDate} />
            </section>
            <section className="section-bg-template5 bg-countdown-template5">
                <SongLink songUrl={wedding.musicUrl} songTitle={wedding.musicTitle} text={t('songLink')} />
                <Location location={wedding.location.city} country={wedding.location.country} text={t('churchLocation')} />
                <CountDown weddingDate={wedding.weddingDate} text={t('countdown')} />
            </section>
            <section className="section-bg-template5 bg-itinerario-template5">
                <WeddingTimeLine events={wedding.events} text={t('timeline')} />
            </section>
            <section className="section-bg-template5 bg-gallery-template5">
                <Gallery images={newImages} speed={20} text={t('gallery')} />
            </section>
            <section className="section-bg-template5 bg-itinerario-template5">
                <WeddingForm weddingId={wedding.id} text={t('weddingForm')} />
            </section>
            
        </div>
    );
};

export default Template_5;