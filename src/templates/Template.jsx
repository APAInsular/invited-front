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
    const baseUrl = process.env.REACT_APP_BACKEND_URL; // Usa una variable de entorno o un valor por defecto

    const changeImages = () => {
        // Aseguramos que se genera un array con las URLs de las imágenes
        const imageUrls = wedding.images.map((image) => `${baseUrl}/storage/${image.image}`);
        setNewImages(imageUrls); // Actualizamos el estado con el nuevo array
    }

    useEffect(() => {
        changeImages();
    }, [wedding.images]);

    // Construye la URL completa de la imagen
    const imageUrl = `${baseUrl}/storage/${wedding.coverImage}`;
    console.log(imageUrl)

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
            <SongLink songUrl={wedding.musicUrl} songTitle={wedding.musicTitle} />
            <br />
            <hr />
            <br />
            <CountDown weddingDate={wedding.weddingDate} />
            <br />
            <hr />
            <br />
            <ChurchLocation location={wedding.location.city} country={wedding.location.country} />
            <br />
            <hr />
            <br />
            <WeddingTimeLine events={wedding.events} />
            <br />
            <hr />
            <br />
            {wedding.id === 9 ? <Gallery images={images} speed={20} /> : <Gallery images={newImages} speed={20} />}
            <br />
            <hr />
            <br />
            <WeddingForm weddingId={wedding.id} />
        </div>
    );
};

export default WeddingWebsite;