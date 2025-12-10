import { useCallback, useEffect, useState } from "react";

import CoupleNames from "../components/CoupleNames/CoupleNames";
import CountDown from "../components/CountDown/CountDown";
import WeddingForm from "../components/WeddingForm/WeddingForm";
import Timeline from "../components/WeddingTimeLine/TimeLine";
import Gallery from "../components/Gallery/Gallery";
import SongLink from "../components/SongLink/SongLink";
import Location from "../components/Location/Location";

// TODO: Use .svg logo.
import LOGO from "../../Images/Logo_invited_recortado-removebg-preview.png";
import BACKGROUND1 from "./images/background.jpg";
import BACKGROUND2 from "./images/background_2.jpg";
import BACKGROUND3 from "./images/background_3.jpg";

import "./HavanaModerna.css";
import Page from "../components/Page/Page";
import useCountdown from "../logic/useCountdown";
import { formatDateToString } from "../logic/utils";
import HavanaCountDown from './components/HavanaCoutDown/HavanaCountDown';
import HavanaTimeline from "./components/HavanaTimeLine/HavanaTimeLine";

const HavanaModerna = ({ wedding, images, trad }) => {
  return (
    <div>
      <Page backgroundImage={BACKGROUND1} padding="0" minHeight="500px">
        <section>
          <div className="d-flex justify-content-center mt-5">
            <img
              src={"https://placehold.co/300x400"}
              alt="Foto de los novios"
              className="img-fluid w-50"
            />
          </div>
          <CoupleNames
            groom={wedding.user.name}
            bride={wedding.user.partner.name}
            icon="&"
          />
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            adipisci facere architecto accusantium blanditiis, similique cumque
            nihil, sequi non facilis soluta veniam illo dicta nemo possimus
            aliquam quod recusandae doloribus!
          </p>
          <div className="text-center subtitle">¡No puedes faltar!</div>
          <HavanaCountDown
            weddingDate={wedding.weddingDate}
            text={trad("coutdown")}
          />
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND1} minHeight="500px" centerVertically>
        <Location
          location={wedding.location.city}
          country={wedding.location.country}
          text={trad("churchLocation")}
        />
      </Page>

      <Page backgroundImage={BACKGROUND1} minHeight="500px" centerVertically>
        <SongLink
          songUrl={wedding.musicUrl}
          songTitle={wedding.musicTitle}
          text={trad("songLink")}
        />
        <Gallery images={images} speed={20} text={trad("gallery")} />
      </Page>

      <Page backgroundImage={BACKGROUND2} minHeight="500px">
        <HavanaTimeline events={wedding.events} text={trad("timeline")} />
      </Page>

      <Page backgroundImage={BACKGROUND1} minHeight="500px">
        <WeddingForm
          weddingId={wedding.id}
          text={trad("weddingForm")}
          fields={trad("weddingForm.fields")}
        />
      </Page>

      <Page backgroundImage={BACKGROUND1}>
        <h2 className="text-center">
          {"Hecho con mucho amor por el equipo de"}
        </h2>
        <div className="d-flex justify-content-center mt-3">
          <img className="logo" src={LOGO} alt="Invited" />
        </div>
      </Page>
    </div>
  );
};

export default HavanaModerna;
