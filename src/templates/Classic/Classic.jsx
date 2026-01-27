import { useCallback, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/TemplateDefaults.css";
import styles from "./Classic.module.css";
import FooterBranding from "../components/FooterBranding/FooterBranding";
import Page from "../components/Page/Page";
import FramedPhoto from "../components/FramedPhoto/FramedPhoto";
import { formatDateToString } from "../logic/utils";
import HavanaCountDown from "../HavanaModerna/components/HavanaCoutDown/HavanaCountDown";
import Timeline from "../components/Timeline/Timeline";
import Carrousel from "../components/Carrousel/Carrousel";
import CarrouselCard from "../components/Carrousel/CarrouselCard/CarrouselCard";
import CoupleNames from "../components/CoupleNames/CoupleNames";
import SongLink from "../components/SongLink/SongLink";
import WeddingForm from "../components/WeddingForm/WeddingForm";

const bgColor = "rgba(254, 238, 212, 1)";

const Classic = ({ wedding, images, translate: t, coverImage }) => {
  return (
    <div className={styles.wrapper}>
      {/* Hero */}
      <Page backgroundColor={bgColor} padding="0" minHeight="830px">
        <div className="d-flex justify-content-center">
          <img
            src={coverImage}
            alt="Couple photo"
            className="img-fluid rounded-4"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <section className="p-5 sep-bottom">
          <div className="mt-3">
            <CoupleNames
              groom={wedding.user.name}
              bride={wedding.user.partner.name}
              icon={"♥️"}
            />
          </div>
          
        </section>
      </Page>

      {/* Song */}
      <Page backgroundColor={bgColor} minHeight="830px">
        <section className="text-center">
          <h3 className="title-low">{t("songLink.title")}</h3>
          <SongLink
            songUrl={wedding.musicUrl}
            songTitle={wedding.musicTitle}
            text={t("songLink")}
          />
        </section>

        {/* Location */}
        <section>
          <h3 className="text-center title-low">{t("location.title")}</h3>
          <p className="p-5 text-center">{t("location.address")}</p>
        </section>

        {/* Countdown */}
        <section>
          <h3 className="text-center title-low">{t("countdown.title")}</h3>
          <HavanaCountDown
            weddingDate={wedding.weddingDate}
            text={t("countdown")}
          />
        </section>
      </Page>

      {/* Timeline */}
      <Page backgroundColor={bgColor} minHeight="830px">
        <section>
          <Timeline events={wedding.events} text={t("timeline")} />
          <div className="d-flex justify-content-center"></div>
        </section>
      </Page>

      {/* Gallery */}
      <Page minHeight="830px" backgroundColor={bgColor}>
        <section className="text-center">
          <h3 className="title-low">{t("gallery.title")}</h3>
          <Carrousel
            images={images}
            text={t("gallery")}
            renderItem={(src, i) => (
              <CarrouselCard key={i} src={src} height="1500px" />
            )}
          />
        </section>
      </Page>

      {/* Wedding Form */}
      <Page backgroundColor={bgColor} minHeight="830px">
        <WeddingForm
          weddingId={wedding.id}
          text={t("weddingForm")}
          fields={t("weddingForm.fields")}
        />
      </Page>

      <Page backgroundColor={bgColor} minHeight="150px">
        <FooterBranding />
      </Page>
    </div>
  );
};

export default Classic;
