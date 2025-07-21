import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/WeddingWebsite.css';

import WeddingTimeLine from './components/WeddingTimeLine';
import CountDown from './components/CountDown';
import CoupleNames from './components/CoupleNames';
import WeddingForm from './components/WeddingForm';
import Gallery from './components/Gallery';
import SongLink from './components/SongLink';
import ChurchLocation from './components/Location';
import ImagenLogo from '../Images/Logo_invited_recortado-removebg-preview.png';
import { BsJustify } from 'react-icons/bs';

import { useLanguage } from '../context/LanguageContext';
import LanguageSelectorPopup from '../components/LanguageSelectorPopUp';
import usePageTranslation from '../hooks/usePageTranslation';

const images = [
    "/images/Image1.jpg",
    "/images/Image2.jpg",
    "/images/Image3.jpg",
    "/images/Image4.jpg",
    "/images/Image5.jpg",
    "/images/Image6.jpg",
    "/images/Image7.jpg",
    "/images/Image8.jpg",
];

const WeddingWebsite = ({ wedding }) => {
    const [newImages, setNewImages] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const { changeLanguage } = useLanguage();

    const { t, loadingTranslation } = usePageTranslation('template1WeddingPage');

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
        const storedLang = sessionStorage.getItem('language');
        if (storedLang) {
            changeLanguage(storedLang);
        } else {
            setShowPopup(true);
        }
    }, []);

    const handleLanguageSelect = (lang) => {
        changeLanguage(lang)
        sessionStorage.setItem('language', lang);
        setShowPopup(false);
    };

    const imageUrl = `${baseUrl}${wedding.coverImage}`;

    if (showPopup) {
        return <LanguageSelectorPopup onSelect={handleLanguageSelect} />;
    }

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    //console.log(t('weddingForm'))

    return (
        <div>
            <div className="invitacionContainer">
                <div className="contenedorFoto">
                    {
                        wedding.id === 9 ?
                            <img
                                src="/boda, a, a.jpg" // Usa la URL completa aquí
                                alt="Foto de los novios"
                                className="fotoNovios"
                            /> :
                            <img
                                src={imageUrl} // Usa la URL completa aquí
                                alt="Foto de los novios"
                                className="fotoNovios"
                            />
                    }
                </div>
            </div>

            <CoupleNames groom={wedding.user.name} bride={wedding.user.partner.name} />
            <br />
            <hr />
            <br />
            <SongLink songUrl={wedding.musicUrl} songTitle={wedding.musicTitle} text={t('songLink')} />
            <br />
            <hr />
            <br />
            <CountDown weddingDate={wedding.weddingDate} text={t('countdown')} />
            <br />
            <hr />
            <br />
            <ChurchLocation location={wedding.location.city} country={wedding.location.country} text={t('churchLocation')} />
            <br />
            <hr />
            <br />
            <WeddingTimeLine events={wedding.events} text={t('timeline')} />
            <br />
            <hr />
            <br />
            {wedding.id === 9 ? <Gallery images={images} speed={20} text={t('gallery')} /> : <Gallery images={newImages} speed={20} text={t('gallery')} />}
            <br />
            <hr />
            <br />
            <WeddingForm weddingId={wedding.id} text={t('weddingForm')} fields={t('weddingForm.fields')} />
            <br />
            <hr />
            <br />
            <div className="d-flex justify-content-center align-items-center mb-5" style={{ flexDirection: "column" }}>
                <h2>Hecho con mucho amor por el equipo de</h2>
                <img src={ImagenLogo} alt="" style={{ width: "200px" }} />
            </div>
        </div>
    );
};

export default WeddingWebsite;