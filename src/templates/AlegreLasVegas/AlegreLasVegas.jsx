import React from 'react';
import CoupleNames from './components/CoupleNames_Plantilla_4';
import SongLink from './components/SongLink_Plantilla_4';
import Location from './components/Location_Plantilla_4';
import CountDown from './components/CountDown_Plantilla_4';
import Gallery from './components/Gallery_Plantilla_4';
import WeddingTimeLine from './components/WeddingTimeLine_Plantilla_4';
import WeddingForm from './components/WeddingForm_Plantilla_4';

import "./styles/AlegreLasVegas.css"

const AlegreLasVegas = ({ wedding, trad: t, images, coverImage }) => {
  

    return (
        <div className='body-template4'>
            <section className="text-center  py-4 section-bg-template4 bg-portada-template4">
                <CoupleNames imageUrl={coverImage} groom={wedding.user.name} bride={wedding.user.partner.name} location={wedding.location.city} date={wedding.weddingDate} />
            </section>
            <section className=" section-bg-template4 bg-countdown-template4">
                <SongLink songUrl={wedding.musicUrl} songTitle={wedding.musicTitle} text={t('songLink')} />
                <Location location={wedding.location.city} country={wedding.location.country} text={t('churchLocation')} />
                <CountDown weddingDate={wedding.weddingDate} text={t('countdown')} />
            </section>
            <section className="section-bg-template4 bg-itinerario-template4">
                <WeddingTimeLine events={wedding.events} text={t('timeline')} />
            </section>
            <section className=" section-bg-template4 bg-gallery-template4">
                <Gallery images={images} speed={20} text={t('gallery')} />
            </section>
            <section className=" section-bg-template4 bg-asistencia-template4">
                <WeddingForm weddingId={wedding.id} text={t('weddingForm')} />
            </section>
        </div>
    );
};

export default AlegreLasVegas;