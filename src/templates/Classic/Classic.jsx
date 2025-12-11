import { useCallback, useEffect, useState } from "react";

import ImagenLogo from "../../Images/Logo_invited_recortado-removebg-preview.png";
import fallbackImage from "./images/pareja.png";
import CountDown from "../components/CountDown/CountDown";
import SongLink from "../components/SongLink/SongLink";
import CoupleNames from "../components/CoupleNames/CoupleNames";
import ChurchLocation from "../components/Location/Location";
import Timeline from "../components/WeddingTimeLine/TimeLine";
import Gallery from "../components/Gallery/Gallery";
import WeddingForm from "../components/WeddingForm/WeddingForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/TemplateDefaults.css";
import "./Classic.css";

const Classic = ({ wedding, images, trad }) => {


  return (
    // TODO: Idea: Scroll Animation here.
    <div className="Classic">
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
        <CountDown weddingDate={wedding.weddingDate} text={trad("countdown")} />
      </section>

      <section className="sep-bottom">
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
        <Gallery images={images} speed={20} text={trad("gallery")} />
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

export default Classic;
