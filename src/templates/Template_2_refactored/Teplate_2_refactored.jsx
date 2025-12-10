import { useCallback, useEffect, useState } from "react";

import ImagenLogo from "../../Images/Logo_invited_recortado-removebg-preview.png";
import fallbackImage from "../Template_2_refactored/images/pareja.png";
import CountDown from "../components/CountDown/CountDown";
import SongLink from "../components/SongLink/SongLink";
import CoupleNames from "../components/CoupleNames/CoupleNames";
import ChurchLocation from "../components/Location/Location";
import Timeline from "../components/WeddingTimeLine/TimeLine";
import Gallery from "../components/Gallery/Gallery";
import WeddingForm from "../components/WeddingForm/WeddingForm";

import "./Template_2_refactored.css";

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
    // TODO: Idea: Scroll Animation here.
    <div>
      <div className="w-100">
        <img
          src={fallbackImage}
          alt="Foto de los novios"
          className="img-fluid"
        />
      </div>

      <section className="sep-bottom">
        <CoupleNames
          groom={wedding.user.name}
          bride={wedding.user.partner.name}
        />
      </section>

      <section className="sep-bottom">
        <CountDown titleClasses="text-3xl font-allura bold" weddingDate={wedding.weddingDate} text={trad("countdown")} />
        <ChurchLocation
          location={wedding.location.city}
          country={wedding.location.country}
          text={trad("churchLocation")}
        />
      </section>

      <section className="sep-bottom">
        <SongLink
          songUrl={wedding.musicUrl}
          songTitle={wedding.musicTitle}
          text={trad("songLink")}
        />
        <Gallery images={newImages} speed={20} text={trad("gallery")} />
      </section>

      <section className="sep-bottom">
        <Timeline events={wedding.events} text={trad("timeline")} />
      </section>

      <section className="sep-bottom">
        <WeddingForm
          weddingId={wedding.id}
          text={trad("weddingForm")}
          fields={trad("weddingForm.fields")}
        />
      </section>

      <section>
        {/* TODO: Replace with translation. */}
        <h2>{"Hecho con mucho amor por el equipo de"}</h2>
        <div className="d-flex justify-content-center">
          <img className="logo" src={ImagenLogo} alt="Invited" />
        </div>
      </section>
    </div>
  );
};

export default Template2Refactored;
