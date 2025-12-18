
import WeddingForm from "../components/WeddingForm/WeddingForm";
import Carrousel from "../components/Carrousel/Carrousel";
import CarrouselCard from "../components/Carrousel/CarrouselCard/CarrouselCard";
import CustomizableCountDown from "../components/CustomizableCountDown/CustomizableCountDown";
import COUNTDOWN_DECO_0 from "./images/countdown_deco_0.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/TemplateDefaults.css";
import styles from "./AcuarelaBoho.module.css";
import CoupleNames from "../components/CoupleNames/CoupleNames";
import FramedPhoto from "../components/FramedPhoto/FramedPhoto";
import PHOTO from "./images/casadosfelices.webp";
import FRAME from "./images/photo_frame.png";
import MASK from "./images/mask.png";
import Location from "../components/Location/Location";
import Timeline from "../components/Timeline/Timeline";
import Page from "./../components/Page/Page";
import BG1 from "./images/backgrounds/BG1.png";
import BG2 from "./images/backgrounds/BG2.png";
import BG3 from "./images/backgrounds/BG3.png";
import BG4 from "./images/backgrounds/BG4.png";
import FooterBranding from "./../components/FooterBranding/FooterBranding";
import SongLink from "../components/SongLink/SongLink";
import StylableTimeline from './../components/StylableTimeline/StylableTimeline';
import AcuarelaBohoWeddingFormStyles from "./styles/AcuarelaBohoWeddingForm.module.css";
import AcuarelaBohoTimeline from "./styles/AcuarelaBohoTimeline.module.css";

const AcuarelaBoho = ({ wedding, trad: t, images, coverImage }) => {
  return (
    <div className={styles.wrapper}>
      <Page backgroundImage={BG1} padding="0" minHeight="830px">
        <section className="text-center">
          <div className="position-relative d-inline-block mb-4">
            <img
              src={PHOTO}
              alt="Samantha y Javier"
              className={`img-fluid rounded-circle header-photo ${styles.headerPhoto}`}
            ></img>
            <div className={styles.floralFrame}></div>
          </div>

          <CoupleNames
            groom={wedding.user.name}
            bride={wedding.user.partner.name}
            icon="&"
            asColumn
          />
          <p className="text-center px-5">
            Tenemos el gusto de invitaros a nuestra boda que tendrá lugar jueves
            26 de junio de 2025 en Puerto del Rosario
          </p>
          <p className="subtitle">
            jueves 26 de junio de 2025 <br /> En <br /> Puerto del Rosario
          </p>
        </section>
      </Page>

      <Page backgroundImage={BG3} padding="0" minHeight="830px">
        <section className="text-center">
          <h3 className="subtitle"> 🎶Nuestra cancion especial 🎶</h3>
          <SongLink
            songUrl={wedding.musicUrl}
            songTitle={wedding.musicTitle}
            text={t("songLink")}
          />
          <h3 className="subtitle">¿A donde ir?</h3>
          <Location
            location={wedding.location.city}
            country={wedding.location.country}
            text={t("churchLocation")}
          />
          <h3 className="subtitle">¡¡¡Nos casamos en...!!!</h3>
          <CustomizableCountDown
            weddingDate={wedding.weddingDate}
            text={t("countdown")}
            frame={{ frameSrc: COUNTDOWN_DECO_0, backgroundSize: "100px" }}
          />
        </section>
      </Page>
      <Page backgroundImage={BG2} padding="0" minHeight="830px">
        <section className="text-center">
          <StylableTimeline styles={AcuarelaBohoTimeline} events={wedding.events} text={t("timeline")} />
        </section>
      </Page>
      <Page backgroundImage={BG1} padding="0" minHeight="830px">
        <Carrousel
          images={images}
          text={t("gallery")}
          renderItem={(src, i) => (
            <CarrouselCard key={i} src={src} height="1500px" />
          )}
        />
      </Page>
      <Page backgroundImage={BG4} padding="0" minHeight="830px" centerVertically>
        <WeddingForm
          weddingId={wedding.id}
          text={t("weddingForm")}
          fields={t("weddingForm.fields")}
          styles={AcuarelaBohoWeddingFormStyles}
        />
      </Page>
      <Page backgroundImage={BG4} minHeight="150px">
        <FooterBranding />
      </Page>
    </div>
  );
};

export default AcuarelaBoho;
