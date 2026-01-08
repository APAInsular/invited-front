import React from "react";
import CoupleNames from "./components/CoupleNames_Plantilla_4";
import SongLink from "./components/SongLink_Plantilla_4";
import Location from "./components/Location_Plantilla_4";
import CountDown from "./components/CountDown_Plantilla_4";
import Gallery from "./components/Gallery_Plantilla_4";
import WeddingTimeLine from "./components/WeddingTimeLine_Plantilla_4";
import "./styles/AlegreLasVegas.css";
import Page from "../components/Page/Page";
import WeddingForm from "../components/WeddingForm/WeddingForm";
import Carrousel from "../components/Carrousel/Carrousel";
import CarrouselCard from "../components/Carrousel/CarrouselCard/CarrouselCard";

import BG_PORTADA from "./images/backgrounds/portada.png";
import DECORATION_RINGS from "./images/rings_decoration.svg";
import DECORATION_CAR from "./images/card_decoration.svg";
import BG_COUNTDOWN from "./images/backgrounds/countdown.png";
import BG_GALLERY from "./images/backgrounds/gallery.png";
import BG_ITINERARIO from "./images/backgrounds/itinerario.jpg";
import FooterBranding from "../components/FooterBranding/FooterBranding";

const AlegreLasVegas = ({ wedding, trad: t, images, coverImage }) => {
  return (
    <div className="body-template4">
      <Page
        backgroundImage={BG_PORTADA}
        padding="0"
        minHeight="800px"
        backgroundSize="100% 100%"
      >
        <section className="text-center">
          <CoupleNames
            imageUrl={coverImage}
            groom={wedding.user.name}
            bride={wedding.user.partner.name}
            location={wedding.location.city}
            date={wedding.weddingDate}
          />
          <img src={DECORATION_RINGS} alt="" width={200} />
        </section>
      </Page>
      <Page backgroundImage={BG_COUNTDOWN} padding="0" minHeight="800px">
        <section className="text-center">
          <SongLink
            songUrl={wedding.musicUrl}
            songTitle={wedding.musicTitle}
            text={t("songLink")}
          />
          <Location
            location={wedding.location.city}
            country={wedding.location.country}
            text={t("churchLocation")}
          />
          <CountDown weddingDate={wedding.weddingDate} text={t("countdown")} />
        </section>
      </Page>
      <Page backgroundImage={BG_ITINERARIO} padding="0" minHeight="800px">
        <section className="text-center">
          <WeddingTimeLine events={wedding.events} text={t("timeline")} />
        </section>
      </Page>
      <Page
        backgroundImage={BG_PORTADA}
        padding="0"
        minHeight="800px"
        backgroundSize="100% 100%"
      >
        <section className="text-center">
          <Carrousel
            images={images}
            text={t("gallery")}
            renderItem={(src, i) => (
              <CarrouselCard key={i} src={src} height="1500px" />
            )}
          />
          <img src={DECORATION_CAR} alt="" width={100} />
        </section>
      </Page>
      <Page
        backgroundImage={BG_PORTADA}
        padding="0"
        minHeight="800px"
        backgroundSize="100% 100%"
      >
        <WeddingForm
          weddingId={wedding.id}
          text={t("weddingForm")}
          fields={t("weddingForm.fields")}
        />
      </Page>
      <Page backgroundImage={BG_PORTADA} minHeight="150px">
        <FooterBranding />
      </Page>
    </div>
  );
};

export default AlegreLasVegas;
