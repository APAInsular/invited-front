

import "./styles/ArmoniosoMalta.css";
import Location from "../components/Location/Location";
import SongLink from "../components/SongLink/SongLink";
import ArmoniosoMaltaTimeLine from "./components/ArmoniosoMaltaWeddingTimeLine";
import Carrousel from "../components/Carrousel/Carrousel";
import CarrouselCard from "../components/Carrousel/CarrouselCard/CarrouselCard";
import ArmoniosoMaltaWeddingForm from './components/ArmoniosoMaltaWeddingForm';
import ArmoniosoMaltaCountDown from './components/ArmoniosoMaltaCountDown';
import ArmoniosoMaltaCoupleNames from './components/ArmoniosoMaltaCoupleNames';
import WeddingForm from "../components/WeddingForm/WeddingForm";
import ArmoniosoMaltaFormStyles from "./styles/ArmoniosoMaltaForm.module.css";
import Page from '../components/Page/Page';
import FooterBranding from '../components/FooterBranding/FooterBranding';
import BG2 from "./images/backgrounds/2.jpg";

const ArmoniosoMalta = ({ wedding, translate: t, images, coverImage }) => {
  return (
    <div className="body-ArmoniosoMalta">
      <section className="header-invite-ArmoniosoMalta text-center py-4 section-bg-ArmoniosoMalta bg-portada-ArmoniosoMalta">
        <ArmoniosoMaltaCoupleNames
          imageUrl={coverImage}
          groom={wedding.user.name}
          bride={wedding.user.partner.name}
          location={wedding.location.city}
          date={wedding.weddingDate}
        />
      </section>
      <section className="section-bg-ArmoniosoMalta bg-countdown-ArmoniosoMalta">
        <h3 className="section-title-ArmoniosoMalta">Nuestra cancion</h3>
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
        <ArmoniosoMaltaCountDown weddingDate={wedding.weddingDate} text={t("countdown")} />
      </section>
      <section className="py-5 section-bg-ArmoniosoMalta bg-itinerario-ArmoniosoMalta">
        <ArmoniosoMaltaTimeLine events={wedding.events} text={t("timeline")} />
      </section>
      <section className="py-5 section-bg-ArmoniosoMalta bg-gallery-ArmoniosoMalta">
        <h3 className="subtitle">Nuestra Historia</h3>
        <Carrousel
          images={images}
          text={t("gallery")}
          renderItem={(src, i) => (
            <CarrouselCard key={i} src={src} height="1500px" />
          )}
        />
          <h3 className="subtitle">¡Que floresca el amor!</h3>
      </section>
      <section className="py-5 section-bg-ArmoniosoMalta bg-gallery-ArmoniosoMalta">
         <WeddingForm
            weddingId={wedding.id}
            text={t("weddingForm")}
            fields={t("weddingForm.fields")}
            styles={ArmoniosoMaltaFormStyles}
          />
      </section>
        <section className="py-5 section-bg-ArmoniosoMalta bg-footer-ArmoniosoMalta">
        
         <FooterBranding/>
      </section>
    </div>
  );
};

export default ArmoniosoMalta;
