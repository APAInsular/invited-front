import React from 'react';
import CoupleNames from './components/CoupleNames_Plantilla_1';
import SongLink from './components/SongLink_Plantilla_1';
import Location from './components/Location_Plantilla_1';
import CountDown from './components/CountDown_Plantilla_1';
import Gallery from './components/Gallery_Plantilla_1';
import WeddingTimeLine from './components/WeddingTimeLine_Plantilla_1';

import "./styles/style.css"

import { useEffect, useState } from 'react';

const Template_1 = () => {
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
            <CoupleNames />
            <CountDown {...tiempo} />
            <WeddingTimeLine />
            <Gallery />
            <Location />
            <SongLink />
        </>
    );
};

export default Template_1;