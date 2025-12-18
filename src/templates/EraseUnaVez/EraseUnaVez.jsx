import CountDown from "./components/CountDown_Plantilla_2";
import WeddingForm from "./components/WeddingForm_Plantilla_2";
import BG_HEAD from "./images/backgrounds/BG_HEAD.png";
import BG1 from "./images/backgrounds/BG1.png";
import BG_TIMELINE from "./images/backgrounds/BG_TIMELINE.png";
import BG_GALLERY from "./images/backgrounds/BG_GALLERY.png";
import Page from "../components/Page/Page";
import FooterBranding from "../components/FooterBranding/FooterBranding";
import Carrousel from "../components/Carrousel/Carrousel";
import CarrouselCard from "../components/Carrousel/CarrouselCard/CarrouselCard";
import SongLink from "../components/SongLink/SongLink";
import styles from "./EraseUnaVez.module.css";
import CoupleNames from "./../components/CoupleNames/CoupleNames";
import PHOTO_FRAME from "./images/photo_frame.png";
import PHOTO_MASK from "./images/photo_mask.png";
import PHOTO from "./images/casadosfelices.webp";
import FramedPhoto from "./../components/FramedPhoto/FramedPhoto";
import StylableTimeline from "../components/StylableTimeline/StylableTimeline";
import EraseUnaVezTimelineStyle from "./styles/EraseUnaVezTimeline.css";
import Location from "../components/Location/Location";
//<section className="header-invite-template2 text-center py-4 section-bg-template2 bg-portada-template2">

//</section>

const EraseUnaVez = ({ wedding, trad: t, images, coverImage }) => {
  return (
    <div className={styles.wrapper}>
      <Page backgroundImage={BG_HEAD} padding="0" minHeight="820px" centerVertically>
        <section className="text-center">
          <FramedPhoto
            frameScale={1}
            photoScale={0.5}
            frame={PHOTO_FRAME}
            photo={PHOTO}
          />

          <CoupleNames
            groom={wedding.user.name}
            bride={wedding.user.partner.name}
            icon="&"
          />
          <p className="text-center p-5">Tenemos el gusto de invitaros a nuestra boda que tendrá lugar</p>
          <p className="title-low">viernes 22 de agosto de 2025</p>
        </section>
      </Page>
      <Page
        backgroundImage={BG1}
        padding="0"
        minHeight="820px"
        centerVertically
      >
        <section className="text-center">
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
      </Page>
      <Page
        backgroundImage={BG_TIMELINE}
        padding="0"
        minHeight="830px"
        centerVertically
      >
        <section className="text-center">
          <StylableTimeline
            styles={EraseUnaVezTimelineStyle}
            events={wedding.events}
            text={t("timeline")}
          />
        </section>
      </Page>
      <Page
        backgroundImage={BG_GALLERY}
        padding="0"
        minHeight="830px"
        centerVertically
      >
        <section className="text-center">
          <Carrousel
            images={images}
            text={t("gallery")}
            icon
            renderItem={(src, i) => (
              <CarrouselCard src={src} height={"1500px"} />
            )}
          />{" "}
        </section>
      </Page>
      <Page
        backgroundImage={BG1}
        padding="0"
        minHeight="830px"
        centerVertically
      >
        <section className="text-center">
          <WeddingForm weddingId={wedding.id} text={t("weddingForm")} />
        </section>
      </Page>

      <Page backgroundImage={BG_TIMELINE} minHeight="150px">
        <FooterBranding />
      </Page>
    </div>
  );
};

export default EraseUnaVez;
