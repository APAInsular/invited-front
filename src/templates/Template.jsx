import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/WeddingWebsite.css';

import WeddingTimeLine from './components/WeddingTimeLine';
import CountDown from './components/CountDown';
import CoupleNames from './components/CoupleNames';
import WeddingForm from './components/WeddingForm';
import Gallery from './components/Gallery';
import SongLink from './components/SongLink';


const images = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
    "https://picsum.photos/300/200?random=4",
    "https://picsum.photos/300/200?random=5",
];

const WeddingWebsite = ({ wedding }) => {
    console.log(wedding)
    return (
        <div>
            <div className="invitacionContainer">
                <div className="contenedorFoto">
                    <img
                        src="https://picsum.photos/300/200?random=6"
                        alt="Foto de los novios"
                        className="fotoNovios"
                    />
                </div>
            </div>

            <CoupleNames />
            <br />
            <hr />
            <br />
            <SongLink />
            <br />
            <hr />
            <br />
            <CountDown />
            <br />
            <hr />
            <br />
            <WeddingTimeLine />
            <br />
            <hr />
            <br />
            <Gallery images={images} speed={20} />
            <br />
            <hr />
            <br />
            <WeddingForm />

        </div >
    );
}

export default WeddingWebsite;