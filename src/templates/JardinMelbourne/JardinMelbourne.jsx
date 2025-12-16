import CoupleNames from "../components/CoupleNames/CoupleNames";
import WeddingForm from "../components/WeddingForm/WeddingForm";
import Gallery from "../components/Gallery/Gallery";
import SongLink from "../components/SongLink/SongLink";
import Location from "../components/Location/Location";

// TODO: Use .svg logo.
import LOGO from "../../Images/Logo_invited_recortado-removebg-preview.png";
import FRAME from "./images/photo_frame.png";

import Page from "../components/Page/Page";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/TemplateDefaults.css";
import styles from "./JardinMelbourne.module.css";
import Carrousel from "../components/Carrousel/Carrousel";
import CarrouselCard from "../components/Carrousel/CarrouselCard/CarrouselCard";

import image from "./images/casadosfelices.webp";
import CountDown from "../components/CountDown/CountDown";
import HavanaTimeline from "../HavanaModerna/components/HavanaTimeLine/HavanaTimeLine";
import FramedPhoto from "../components/FramedPhoto/FramedPhoto";
import { formatDateToString } from "../logic/utils";
import HavanaCountDown from "../HavanaModerna/components/HavanaCoutDown/HavanaCountDown";
import DECORATION_0 from "./images/decoration_0.png";
import DECORATION_1 from "./images/decoration_1.png";
import TIMELINE_ICON from "./images/timeline_icon.png";
import Timeline from "../components/Timeline/Timeline";

const JardinMelbourne = ({ wedding, images, trad, coverImage }) => {
  return (
    <div className={styles.wrapper}>
      <Page backgroundColor="white" padding="0" minHeight="830px">
        <section className="p-5">
          <FramedPhoto frame={FRAME} photo={image} />
          <div className="mt-2">
            <CoupleNames
              groom={wedding.user.name}
              bride={wedding.user.partner.name}
              icon="y"
              asColumn
            />
          </div>
          <p className="mx-3 text-center">
            A veces lo que empieza como una locura se convierte en lo mejor de
            tu vida. Ven a compartir nuestro amor el dia
            <span className="fw-bold text-2xl">
              {" "}
              {formatDateToString(wedding.weddingDate)}
            </span>
            <br />a las
            {/* 12:30 */}
            <span className="fw-bold text-2xl"> {"12:30"}</span>
            <br />
            en
            <br />
            <span className="fw-bold text-2xl"> {wedding.location.city}</span>
            <br />
            <span className="fw-bold text-2xl">{wedding.location.country}</span>
          </p>
        </section>
      </Page>

      <Page backgroundColor="white" minHeight="830px">
        <section className="text-center">
          <h3 className="title-low">Nuestra canción</h3>
          <SongLink
            songUrl={wedding.musicUrl}
            songTitle={wedding.musicTitle}
            text={trad("songLink")}
          />
        </section>
        <section>
          <h3 className="text-center title-low">Nos encontramos en</h3>
          <p className="p-5 text-center">
            Parroquia de San Pedro Mártir
            <br />
            Avenida de burgos 204
            <br />
            Hortaleza, 28050 Madrid
          </p>
        </section>
        <section>
          <h3 className="text-center title-low">La cuenta atrás</h3>
          <HavanaCountDown
            weddingDate={wedding.weddingDate}
            text={trad("countdown")}
          />
        </section>
      </Page>
      {/*            images={["https://placehold.co/300x500", "https://placehold.co/300x500", "https://placehold.co/300x500"]}  */}

      <Page backgroundColor="white" minHeight="830px">
        <section>
        <Timeline events={wedding.events} text={trad("timeline")} icon={{iconSrc: TIMELINE_ICON }} />
          <div className="d-flex justify-content-center">
            <img width={400} src={DECORATION_1} alt="" />
          </div>
        </section>
      </Page>

      <Page minHeight="830px" backgroundColor="white">
        <section className="text-center">
          <h3 className="title-low">Nuestra historia...</h3>
          <Carrousel
            images={images}
            text={trad("gallery")}
            renderItem={(src, i) => (
              <CarrouselCard src={src} height={"1500px"} />
            )}
          />
          <img className="mt-5" width={300} src={DECORATION_0} alt="" />
        </section>
      </Page>

      <Page backgroundColor="white" minHeight="830px">
        <WeddingForm
          weddingId={wedding.id}
          text={trad("weddingForm")}
          fields={trad("weddingForm.fields")}
        />
      </Page>

      <Page backgroundColor="white" minHeight="150px">
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

export default JardinMelbourne;
