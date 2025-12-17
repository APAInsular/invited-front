import SongLink from "./components/SongLink_Plantilla_1";

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
import Location from '../components/Location/Location';
import AcuarelaBohoTimeline from "./components/AcuarelaBohoTimeline";
import Timeline from "../components/Timeline/Timeline";

const AcuarelaBoho = ({ wedding, trad: t, images, coverImage }) => {
  return (
    <div className={styles.wrapper}>
      <section
        className={`${styles.headerInvite} text-center ${styles.sectionBg} ${styles.bgPortadaTemplate1}`}
      >
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
      <section
        className={`${styles.sectionBg} ${styles.bgCountdownTemplate1} mt-4 py-5`}
      >
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
      <section
        className={`py-5 mt-4 ${styles.sectionBg} ${styles.bgItinerarioTemplate1}`}
      >
        <Timeline events={wedding.events} text={t("timeline")} />
      </section>
      <section
        className={`py-5 mt-4 ${styles.sectionBg} ${styles.bgPortadaTemplate1}`}
      >
        <Carrousel
          images={images}
          text={t("gallery")}
          renderItem={(src, i) => (
            <CarrouselCard key={i} src={src} height="1500px" />
          )}
        />
      </section>
      <section
        className={`py-5 ${styles.sectionBg} ${styles.bgGalleryTemplate1}`}
      >
        <WeddingForm
          weddingId={wedding.id}
          text={t("weddingForm")}
          fields={t("weddingForm.fields")}
        />
      </section>
    </div>
  );
};

export default AcuarelaBoho;
