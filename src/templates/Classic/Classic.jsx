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
import styles from "./Classic.module.css";
import FooterBranding from "../components/FooterBranding/FooterBranding";
import Page from "../components/Page/Page";

const bgColor = "rgb(255, 228, 175)";
const Classic = ({ wedding, images, trad, coverImage }) => {
  return (
    // TODO: Idea: Scroll Animation here.
    <div className={styles.styles}>
      <div className="w-100">
        <img
          src={coverImage}
          alt="Foto de los novios"
          className="img-fluid"
        />
      </div>

      <Page backgroundColor={bgColor} minHeight="830px">
        <section className="sep-bottom">
          <CoupleNames
            groom={wedding.user.name}
            bride={wedding.user.partner.name}
          />
        </section>
        <section className="sep-bottom">
          <h3 className="subtitle">Nuestra cancion especial</h3>
          <SongLink
            songUrl={wedding.musicUrl}
            songTitle={wedding.musicTitle}
            text={trad("songLink")}
          />
        </section>
      </Page>

      <Page backgroundColor={bgColor} minHeight="830px">
        <section>
          <CountDown
            weddingDate={wedding.weddingDate}
            text={trad("countdown")}
          />
        </section>
        <section className="sep-bottom">
          <ChurchLocation
            location={wedding.location.city}
            country={wedding.location.country}
            text={trad("churchLocation")}
          />
        </section>
      </Page>

      <Page backgroundColor={bgColor} minHeight="830px">
        <Gallery images={images} speed={20} text={trad("gallery")} />
        <Timeline events={wedding.events} text={trad("timeline")} />
      </Page>

      <Page backgroundColor={bgColor} minHeight="830px">
        <WeddingForm
          weddingId={wedding.id}
          text={trad("weddingForm")}
          fields={trad("weddingForm.fields")}
        />
      </Page>
      <Page backgroundColor={bgColor} minHeight="150px">
        <FooterBranding />
      </Page>
    </div>
  );
};

export default Classic;
