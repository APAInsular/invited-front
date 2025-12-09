import { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/WeddingWebsite.css";

import WeddingTimeLine from "./components/WeddingTimeLine";
import CountDown from "./components/CountDown";
import CoupleNames from "./components/CoupleNames";
import WeddingForm from "./components/WeddingForm";
import Gallery from "./components/Gallery";
import SongLink from "./components/SongLink";
import ChurchLocation from "./components/Location";
import ImagenLogo from "../Images/Logo_invited_recortado-removebg-preview.png";

import fallbackImage from "./Template_2_refactored/images/pareja.png"

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
      <div className="invitacionContainer">
        <div className="contenedorFoto">
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
      <br />
      <hr />
      <br />
      <SongLink
        songUrl={wedding.musicUrl}
        songTitle={wedding.musicTitle}
        text={trad("songLink")}
      />
      <br />
      <hr />
      <br />
      <CountDown weddingDate={wedding.weddingDate} text={trad("countdown")} />
      <br />
      <hr />
      <br />
      <ChurchLocation
        location={wedding.location.city}
        country={wedding.location.country}
        text={trad("churchLocation")}
      />
      <br />
      <hr />
      <br />
      <WeddingTimeLine events={wedding.events} text={trad("timeline")} />
      <br />
      <hr />
      <br />
      <Gallery images={newImages} speed={20} text={trad("gallery")} />
      <br />
      <hr />
      <br />
      <WeddingForm
        weddingId={wedding.id}
        text={trad("weddingForm")}
        fields={trad("weddingForm.fields")}
      />
      <br />
      <hr />
      <br />
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
