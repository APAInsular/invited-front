import CoupleNames from "../components/CoupleNames/CoupleNames";
import WeddingForm from "../components/WeddingForm/WeddingForm";
import Gallery from "../components/Gallery/Gallery";
import SongLink from "../components/SongLink/SongLink";
import Location from "../components/Location/Location";

// TODO: Use .svg logo.
import LOGO from "../../Images/Logo_invited_recortado-removebg-preview.png";

import Page from "../components/Page/Page";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/TemplateDefaults.css";
import "./EleganteParis.css";
import Carrousel from "../components/Carrousel/Carrousel";
import CarrouselCard from "../components/Carrousel/CarrouselCard/CarrouselCard";

import image from "./images/casadosfelices.webp";
import BACKGROUND_0 from "./images/background_0.jpg";

import FramedPhoto from "../components/FramedPhoto/FramedPhoto";
import { formatDateToString } from "../logic/utils";

import Timeline from "../components/Timeline/Timeline";
import CountDown from "../components/CountDown/CountDown";
import HavanaCountDown from '../HavanaModerna/components/HavanaCoutDown/HavanaCountDown';

const EleganteParis = ({ wedding, images, trad, coverImage }) => {
  return (
    <div className="EleganteParis">
      <Page
        backgroundSize="100%"
        backgroundImage={BACKGROUND_0}
        padding="0"
        minHeight="830px"
      >
        <section className="p-5">

          <div className="mt-2">
            <CoupleNames
              groom={wedding.user.name}
              bride={wedding.user.partner.name}
              icon="y"
              asColumn
            />
          </div>
          <img src={image} alt="" />
          <p className="mx-3 text-center">
            Nos casamos y nos encantaria compartir este dia tan especial con ustedes.
            <br />
            Os esperamos el sábado 20 de junio a las 18:00h <br />
            Hotel Mogán Reina
          </p>
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_0} minHeight="830px">
        <section className="text-center">
          <h3 className="subtitle">Nuestra canción</h3>
          <SongLink
            songUrl={wedding.musicUrl}
            songTitle={wedding.musicTitle}
            text={trad("songLink")}
          />
        </section>
        <section>
          <h3 className="text-center subtitle">Nos vemos en</h3>
          <p className="p-5 text-center">
            Parroquia de San Pedro Mártir
            <br />
            Avenida de burgos 204
            <br />
            Hortaleza, 28050 Madrid
          </p>
        </section>
        <section>
          <h3 className="text-center subtitle">Solo faltan</h3>
          <HavanaCountDown  weddingDate={wedding.weddingDate}
            text={trad("countdown")}/>
        </section>
      </Page>
      {/*            images={["https://placehold.co/300x500", "https://placehold.co/300x500", "https://placehold.co/300x500"]}  */}

      <Page backgroundImage={BACKGROUND_0} minHeight="830px">
        <section>
          <Timeline
            events={wedding.events}
            text={trad("timeline")}
            icon={{ iconSrc: "https://placehold.co/40" }}
          />
        </section>
      </Page>

      <Page minHeight="830px" backgroundImage={BACKGROUND_0}>
        <section className="text-center">
          <h3 className="subtitle">Nuestra historia...</h3>
          <Carrousel
            images={images}
            text={trad("gallery")}
            renderItem={(src, i) => (
              <CarrouselCard src={src} height={"1500px"} />
            )}
          />
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_0} minHeight="830px">
        <section>
          <WeddingForm
            weddingId={wedding.id}
            text={trad("weddingForm")}
            fields={trad("weddingForm.fields")}
          />
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_0} minHeight="150px">
        <section className="p-2">
          <h2 className="text-center">
            {"Hecho con mucho amor por el equipo de"}
          </h2>
          <div className="d-flex justify-content-center mt-3">
            <img className="logo" src={LOGO} alt="Invited" />
          </div>
        </section>
      </Page>
    </div>
  );
};

export default EleganteParis;
