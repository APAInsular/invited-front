import { useCallback, useEffect, useState } from "react";

import ImagenLogo from "../../Images/Logo_invited_recortado-removebg-preview.png";
import fallbackImage from "../Template_2_refactored/images/pareja.png";
import CountDown from '../components/CountDown/CountDown';
import SongLink from '../components/SongLink/SongLink';
import CoupleNames from '../components/CoupleNames/CoupleNames';
import ChurchLocation from '../components/Location/Location';
import Timeline from '../components/WeddingTimeLine/TimeLine';
import Gallery from '../components/Gallery/Gallery';
import WeddingForm from '../components/WeddingForm/WeddingForm';

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/TemplateDefaults.css";

const Template2Refactored = ({ wedding, trad }) => {
  const [newImages, setNewImages] = useState([]);

  const changeImages = useCallback(() => {
    if (wedding.images) {
      const imageUrls = wedding.images.map(
        (image) => `${baseUrl}${image.image}`
      );
      setNewImages(imageUrls);
    }
  }, []);

  const baseUrl = process.env.REACT_APP_AWS_URL;
  const imageUrl = `${baseUrl}${wedding.coverImage}`;

  useEffect(() => {
    changeImages();
  }, [wedding.images]);

  return (
    <div>
      <div >
        <div>
          <img
            src={fallbackImage}
            alt="Foto de los novios"
            className="fotoNovios"
          />
        </div>
      </div>

      <CoupleNames
        groom={wedding.user.name}
        bride={wedding.user.partner.name}
      />

      <SongLink
        songUrl={wedding.musicUrl}
        songTitle={wedding.musicTitle}
        text={trad("songLink")}
      />

      <CountDown weddingDate={wedding.weddingDate} text={trad("countdown")} />

      <ChurchLocation
        location={wedding.location.city}
        country={wedding.location.country}
        text={trad("churchLocation")}
      />

      <Timeline events={wedding.events} text={trad("timeline")} />

      <Gallery images={newImages} speed={20} text={trad("gallery")} />

      <WeddingForm
        weddingId={wedding.id}
        text={trad("weddingForm")}
        fields={trad("weddingForm.fields")}
      />

      <div
        className="d-flex justify-content-center align-items-center mb-5"
        style={{ flexDirection: "column" }}
      >
        <h2>Hecho con mucho amor por el equipo de</h2>
        <img src={ImagenLogo} alt="" style={{ width: "200px" }} />
      </div>
    </div>
  );
};

export default Template2Refactored;
