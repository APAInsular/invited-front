import CoupleNames from "../components/CoupleNames/CoupleNames";
import WeddingForm from "../components/WeddingForm/WeddingForm";
import SongLink from "../components/SongLink/SongLink";

// TODO: Use .svg logo.
import LOGO from "../../Images/Logo_invited_recortado-removebg-preview.png";

import Page from "../components/Page/Page";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/TemplateDefaults.css";

import styles from "./SanfranciscoArcoiris.module.css";
import Carrousel from "../components/Carrousel/Carrousel";
import CarrouselCard from "../components/Carrousel/CarrouselCard/CarrouselCard";

import BACKGROUND_1 from "./images/bg_1.png";
import BACKGROUND_2 from "./images/bg_2.png";
import BACKGROUND_3 from "./images/bg_3.png";
import BACKGROUND_4 from "./images/bg_4.png";

import Timeline from "../components/Timeline/Timeline";
import CustomizableCountDown from "../components/CustomizableCountDown/CustomizableCountDown";

const SanfranciscoArcoiris = ({ wedding, images, trad, coverImage }) => {
  return (
    <div className={styles.wrapper}>
      <Page
        backgroundSize="100%"
        backgroundImage={BACKGROUND_4}
        padding="0"
        minHeight="830px"
      >
        <section>
          <div className="text-center">
            <div className={styles.CouplePhoto}>
              <img src="https://placehold.co/300x300" alt="Couple" />
            </div>

            <CoupleNames
              groom={wedding.user.name}
              bride={wedding.user.partner.name}
              icon="y"
            />
          </div>
          <div className="text-center">
            <p className="p-4">
              ¡Se buscan invitados para asistir a la boda del año!
              Imprescindible tener muchas ganas de pasárselo bien en la gran
              fiesta y una ilusión desbordante para compartir el día más
              importante de nuestra vida.
            </p>
            <p className="subtitle">
              Sábado 5 de julio 2027 <br /> 19:00 <br />
              Hotel Room Mate Óscar
            </p>
          </div>
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_1} minHeight="830px" centerVertically>
        <section className="text-center">
          <h3 className="subtitle">Nuestra canción</h3>
          <SongLink
            songUrl={wedding.musicUrl}
            songTitle={wedding.musicTitle}
            text={trad("songLink")}
          />
        </section>

        <section>
          <h3 className="text-center subtitle">Solo faltan</h3>
          <CustomizableCountDown
            weddingDate={wedding.weddingDate}
            text={trad("countdown")}
            frame={{ borderStyle: "2px solid #2c2c2c62", frameMinsize: "60px" }}
          />
        </section>
      </Page>
      {/*            images={["https://placehold.co/300x500", "https://placehold.co/300x500", "https://placehold.co/300x500"]}  */}

      <Page backgroundImage={BACKGROUND_2} minHeight="830px">
        <section>
          <Timeline events={wedding.events} text={trad("timeline")} />
        </section>
      </Page>

      <Page minHeight="830px" backgroundImage={BACKGROUND_1}>
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

      <Page backgroundImage={BACKGROUND_1} minHeight="830px">
        <section>
          <WeddingForm
            weddingId={wedding.id}
            text={trad("weddingForm")}
            fields={trad("weddingForm.fields")}
          />
          <p className="p-3 text-center">
            ¡Gracias por formar parte de nuestra historia de amor!
          </p>
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_2} minHeight="150px">
        <section>
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

export default SanfranciscoArcoiris;
