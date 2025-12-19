import React from "react";
import CoupleNames from "./components/CoupleNames_Plantilla_3";
import SongLink from "./components/SongLink_Plantilla_3";
import Location from "./components/Location_Plantilla_3";
import CountDown from "./components/CountDown_Plantilla_3";
import Gallery from "./components/Gallery_Plantilla_3";
import WeddingTimeLine from "./components/WeddingTimeLine_Plantilla_3";
import WeddingForm from "./components/WeddingForm_Plantilla_3";

import "./styles/style_Template3.css";

const ArmoniosoMalta = ({ wedding, trad: t, images, coverImage }) => {
  return (
    <div className="body-template2">
      <section className="header-invite-template2 text-center py-4 section-bg-template2 bg-portada-template2">
        <CoupleNames
          imageUrl={coverImage}
          groom={wedding.user.name}
          bride={wedding.user.partner.name}
          location={wedding.location.city}
          date={wedding.weddingDate}
        />
      </section>
      <section className="mt-4 section-bg-template2 bg-countdown-template2">
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
      <section className="py-5 mt-4 section-bg-template2 bg-itinerario-template2">
        <WeddingTimeLine events={wedding.events} text={t("timeline")} />
      </section>
      <section className="py-5 mt-4 section-bg-template2 bg-gallery-template2">
        <Gallery images={images} speed={20} text={t("gallery")} />
      </section>
      <section className="py-5 section-bg-template2 bg-gallery-template2">
        <WeddingForm weddingId={wedding.id} text={t("weddingForm")} />
      </section>
    </div>
  );
};

export default ArmoniosoMalta;
