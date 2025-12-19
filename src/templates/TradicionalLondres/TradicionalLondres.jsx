import React from 'react';
import CoupleNames from './components/CoupleNames_Plantilla_5';
import SongLink from './components/SongLink_Plantilla_5';
import Location from './components/Location_Plantilla_5';
import CountDown from './components/CountDown_Plantilla_5';
import Gallery from './components/Gallery_Plantilla_5';
import WeddingTimeLine from './components/WeddingTimeLine_Plantilla_5';
import WeddingForm from './components/WeddingForm_Plantilla_5';


import "./styles/TradicionalLondres.css"


const TradicionalLondres = ({ wedding, trad: t, images, coverImage }) => {
   

    return (
        <div className='body-template5'>
            <section className="text-center  py-4 section-bg-template5 bg-portada-template5">
                <CoupleNames imageUrl={coverImage} groom={wedding.user.name} bride={wedding.user.partner.name} location={wedding.location.city} date={wedding.weddingDate} />
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
                <Gallery images={images} speed={20} text={t('gallery')} />
            </section>
            <section className="section-bg-template5 bg-itinerario-template5">
                <WeddingForm weddingId={wedding.id} text={t('weddingForm')} />
            </section>
            
        </div>
    );
};

export default TradicionalLondres;