import React from 'react';
import CoupleNames from './components/CoupleNames_Plantilla_1';
import SongLink from './components/SongLink_Plantilla_1';
import Location from './components/Location_Plantilla_1';
import CountDown from './components/CountDown_Plantilla_1';
import Gallery from './components/Gallery_Plantilla_1';
import WeddingTimeLine from './components/WeddingTimeLine_Plantilla_1';

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

    const [tiempo, setTiempo] = useState({
        dias: 10,
        horas: 6,
        minutos: 23,
        segundos: 46,
    });

    useEffect(() => {
        const fechaBoda = new Date('2025-07-12T16:00:00');

        const actualizarCuentaAtras = () => {
            const ahora = new Date();
            const diferencia = fechaBoda - ahora;

            if (diferencia <= 0) return;

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
            const minutos = Math.floor((diferencia / 1000 / 60) % 60);
            const segundos = Math.floor((diferencia / 1000) % 60);

            setTiempo({ dias, horas, minutos, segundos });
        };

        const intervalo = setInterval(actualizarCuentaAtras, 1000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <>
            <section className="header-invite text-center py-4 section-bg bg-portada">
                <CoupleNames imageUrl={imageUrl} groom={wedding.user.name} bride={wedding.user.partner.name} location={wedding.location.city} date={wedding.weddingDate} />
            </section>
            <section class="section-bg bg-countdown mt-4 py-5">
                <SongLink songUrl={wedding.musicUrl} songTitle={wedding.musicTitle} />
                <Location location={wedding.location.city} country={wedding.location.country} />
                <CountDown weddingDate={wedding.weddingDate} />
            </section>
            <WeddingTimeLine events={wedding.events} />
            <Gallery images={newImages} speed={20} />
        </>
    );
};

export default Template_1;