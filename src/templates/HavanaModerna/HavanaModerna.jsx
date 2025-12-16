import CoupleNames from "../components/CoupleNames/CoupleNames";
import WeddingForm from "../components/WeddingForm/WeddingForm";
import Gallery from "../components/Gallery/Gallery";
import SongLink from "../components/SongLink/SongLink";
import Location from "../components/Location/Location";

// TODO: Use .svg logo.
import LOGO from "../../Images/Logo_invited_recortado-removebg-preview.png";
import BACKGROUND1 from "./images/background.jpg";
import BACKGROUND2 from "./images/background_2.jpg";
import BACKGROUND3 from "./images/background_3.jpg";
import FRAME from "./images/frame.webp";

import Page from "../components/Page/Page";
import HavanaCountDown from "./components/HavanaCoutDown/HavanaCountDown";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/TemplateDefaults.css";
import "./Override.css";
import styles from "./HavanaModerna.module.css";
import Carrousel from '../components/Carrousel/Carrousel';
import CarrouselCard from "../components/Carrousel/CarrouselCard/CarrouselCard";
import image from "./images/casadosfelices.webp";
import TIMELINE_ICON from "./images/right-arrow-svgrepo-com.svg";
import Timeline from "../components/Timeline/Timeline";

const HavanaModerna = ({ wedding, images, trad, coverImage }) => {
  return (
<div className={`HavanaModerna ${styles.wrapper}`}>
      <Page backgroundImage={BACKGROUND1} padding="0" minHeight="830px">
        <section>
          <div className="d-flex justify-content-center mt-5">
            <div
              className="position-relative"
              style={{ width: "300px", height: "400px" }}
            >
              <img
                src={image}
                alt="Foto base"
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: "contain", padding: "11px" }}
              />

              <img
                src={FRAME}
                alt="Frame"
                className="position-absolute top-0 start-0 w-100 h-100"
              />
            </div>
          </div>

          <CoupleNames
            groom={wedding.user.name}
            bride={wedding.user.partner.name}
            icon="&"
            asColumn
          />
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            adipisci facere architecto accusantium blanditiis, similique cumque
            nihil, sequi non facilis soluta veniam illo dicta nemo possimus
            aliquam quod recusandae doloribus!
          </p>
          <div className="text-center subtitle">¡No puedes faltar!</div>
        </section>
      </Page>

      <Page
        footer={
          <section className="text-center">
            <h3 className="title-low">¡El tiempo no se detiene!</h3>
            <HavanaCountDown
              weddingDate={wedding.weddingDate}
              text={trad("countdown")}
            />
          </section>
        }
        backgroundImage={BACKGROUND1}
        minHeight="830px"
        centerVertically
      >
        <section className="text-center">
          <h3 className="title-low">Nuestra canción</h3>
          <SongLink
            songUrl={wedding.musicUrl}
            songTitle={wedding.musicTitle}
            text={trad("songLink")}
          />
        </section>
        <section className="text-center">
          <h3 className="title-low">¿Donde nos encontramos?</h3>
          <Location
            location={wedding.location.city}
            country={wedding.location.country}
            text={trad("churchLocation")}
          />
        </section>
      </Page>
          {/*            images={["https://placehold.co/300x500", "https://placehold.co/300x500", "https://placehold.co/300x500"]}  */}

      <Page backgroundImage={BACKGROUND1} minHeight="830px">
        <section className="text-center">
          <h3 className="title-low">Nuestra aventura...</h3>
          <Carrousel
            images={images}
            text={trad("gallery")}icon
            renderItem={(src, i) => (
              <CarrouselCard src={src} height={"1500px"}/>
            )}
          />

          <h3 className="title-low">¡...continuará contigo!</h3>
        </section>
      </Page>

      <Page backgroundSize="auto" backgroundImage={BACKGROUND1} minHeight="830px" centerVertically>
        <Timeline events={wedding.events} text={trad("timeline")} icon={{iconSrc: TIMELINE_ICON}} />
      </Page>

      <Page backgroundImage={BACKGROUND1} minHeight="830px">
        <WeddingForm
          weddingId={wedding.id}
          text={trad("weddingForm")}
          fields={trad("weddingForm.fields")}
        />
      </Page>

      <Page backgroundImage={BACKGROUND1} minHeight="150px">
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
