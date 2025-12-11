import CoupleNames from './components/CoupleNames_Plantilla_1';
import SongLink from './components/SongLink_Plantilla_1';
import Location from './components/Location_Plantilla_1';
import CountDown from './components/CountDown_Plantilla_1';
import Gallery from './components/Gallery_Plantilla_1';
import WeddingTimeLine from './components/WeddingTimeLine_Plantilla_1';
import WeddingForm from './components/WeddingForm_Plantilla_1';
import { useEffect, useState } from 'react';

import { useLanguage } from "../../context/LanguageContext"
import LanguageSelectorPopup from '../../components/LanguageSelectorPopUp';
import usePageTranslation from '../../hooks/usePageTranslation';

import "./styles/style_Template1.css";

const Template_1 = ({ wedding }) => {
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
                    text={t('songLink')}
                />
                <Location
                    location={wedding.location.city}
                    country={wedding.location.country}
                    text={t('churchLocation')}
                />
                <CountDown
                    weddingDate={wedding.weddingDate}
                    text={t('countdown')}
                />
            </section>
            <section className="py-5 mt-4 section-bg bg-itinerario-template1">
                <WeddingTimeLine
                    events={wedding.events}
                    text={t('timeline')}
                />
            </section>
            <section className="py-5 mt-4 section-bg bg-portada-template1">
                <Gallery
                    images={newImages}
                    speed={20}
                    text={t('gallery')}
                />
            </section>
            <section className="py-5 section-bg bg-gallery-template1">
                <WeddingForm
                    weddingId={wedding.id}
                    text={t('weddingForm')}
                    fields={t('weddingForm.fields')}
                />
            </section>
        </div>
    );
};

export default Template_1;