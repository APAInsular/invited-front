import CoupleNames from "../components/CoupleNames/CoupleNames";
import WeddingForm from "../components/WeddingForm/WeddingForm";
import SongLink from "../components/SongLink/SongLink";
import Page from "../components/Page/Page";
import Timeline from "../components/Timeline/Timeline";
import Carrousel from "../components/Carrousel/Carrousel";
import CarrouselCard from "../components/Carrousel/CarrouselCard/CarrouselCard";
import FramedPhoto from "../components/FramedPhoto/FramedPhoto";
import HavanaCountDown from "../HavanaModerna/components/HavanaCoutDown/HavanaCountDown";
import FooterBranding from "../components/FooterBranding/FooterBranding";

import { formatDateToString } from "../logic/utils";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/TemplateDefaults.css";
import styles from "./JardinMelbourne.module.css";

import FRAME from "./images/photo_frame.png";
import MASK from "./images/photo_mask.png";
import DECORATION_0 from "./images/decoration_0.png";
import DECORATION_1 from "./images/decoration_1.png";
import TIMELINE_ICON from "./images/timeline_icon.png";

const JardinMelbourne = ({ wedding, images, translate: t, coverImage }) => {
  return (
    <div className={styles.wrapper}>
      {/* Hero */}
      <Page backgroundColor="white" padding="0" minHeight="830px">
        <section className="p-5">
          <FramedPhoto frame={FRAME} frameScale={1.3} photoScale={0.5} maskScale={1.3} mask={`url(${MASK})`} photo={coverImage} />
          <div className="mt-2">
            <CoupleNames
              groom={wedding.user.name}
              bride={wedding.user.partner.name}
              icon={t("coupleNames.heartIcon")}
              asColumn
            />
          </div>
          <p className="mx-3 text-center">
            {t("hero.description")} {" "}
            <span className="fw-bold text-2xl">
              {formatDateToString(wedding.weddingDate)}
            </span>
            <br /> <span className="fw-bold text-2xl"> a las {" "} {t("hero.time") } {" "}</span>
            <span className="fw-bold text-2xl">{t("hero.hour")}</span>
            <br />
            <span className="fw-bold text-2xl">{wedding.location.city}</span>
            <br />
            <span className="fw-bold text-2xl">{wedding.location.country}</span>
          </p>
        </section>
      </Page>

      {/* Song */}
      <Page backgroundColor="white" minHeight="830px">
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
          <HavanaCountDown weddingDate={wedding.weddingDate} text={t("countdown")} />
        </section>
      </Page>

      {/* Timeline */}
      <Page backgroundColor="white" minHeight="830px">
        <section>
          <Timeline events={wedding.events} text={t("timeline")} icon={{ iconSrc: TIMELINE_ICON }} />
          <div className="d-flex justify-content-center">
            <img width={400} src={DECORATION_1} alt="" />
          </div>
        </section>
      </Page>

      {/* Gallery */}
      <Page minHeight="830px" backgroundColor="white">
        <section className="text-center">
          <h3 className="title-low">{t("gallery.title")}</h3>
          <Carrousel
            images={images}
            text={t("gallery")}
            renderItem={(src, i) => <CarrouselCard key={i} src={src} height="1500px" />}
          />
          <img className="mt-5" width={300} src={DECORATION_0} alt="" />
        </section>
      </Page>

      {/* Wedding Form */}
      <Page backgroundColor="white" minHeight="830px">
        <WeddingForm
          weddingId={wedding.id}
          text={t("weddingForm")}
          fields={t("weddingForm.fields")}
        />
      </Page>

      <Page backgroundColor="white" minHeight="150px">
        <FooterBranding />
      </Page>
    </div>
  );
};

export default JardinMelbourne;
