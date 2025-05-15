import React from 'react';
import CoupleNames from './components/CoupleNames_Plantilla_1';
import SongLink from './components/SongLink_Plantilla_1';
import Location from './components/Location_Plantilla_1';
import CountDown from './components/CountDown_Plantilla_1';
import Gallery from './components/Gallery_Plantilla_1';
import WeddingTimeLine from './components/WeddingTimeLine_Plantilla_1';
import WeddingForm from './components/WeddingForm_Plantilla_1';

import "./styles/style.css"

import { useEffect, useState } from 'react';

const Template_1 = ({ wedding }) => {
    const [newImages, setNewImages] = useState([]);
    const baseUrl = process.env.REACT_APP_AWS_URL; // Usa una variable de entorno o un valor por defecto

    const changeImages = () => {
        // Aseguramos que se genera un array con las URLs de las imágenes
        if (wedding.images) {
            const imageUrls = wedding.images.map((image) => `${baseUrl}${image.image}`)
            //const imageUrls = wedding.images.map((image) => `${baseUrl}storage/${image.image}`);
            setNewImages(imageUrls); // Actualizamos el estado con el nuevo array
        } else {
            return;
        }
    }

    useEffect(() => {
        changeImages();
    }, [wedding.images]);

    // Construye la URL completa de la imagen
    const imageUrl = `${baseUrl}${wedding.coverImage}`;

    return (
        <div className='body'>
            <section className="header-invite text-center py-4 section-bg bg-portada">
                <CoupleNames imageUrl={imageUrl} groom={wedding.user.name} bride={wedding.user.partner.name} location={wedding.location.city} date={wedding.weddingDate} />
            </section>
            <section className="section-bg bg-countdown mt-4 py-5">
                <SongLink songUrl={wedding.musicUrl} songTitle={wedding.musicTitle} />
                <Location location={wedding.location.city} country={wedding.location.country} />
                <CountDown weddingDate={wedding.weddingDate} />
            </section>
            <section className="py-5 mt-4 section-bg bg-itinerario">
                <WeddingTimeLine events={wedding.events} />
            </section>
            <section className="py-5 mt-4 section-bg bg-portada">
                <Gallery images={newImages} speed={20} />
            </section>
            <section className="py-5 mt-4 section-bg bg-gallery" style={{ marginTop: "-20px" }}>
                <WeddingForm weddingId={wedding.id} />
            </section>
        </div>
    );
};

export default Template_1;