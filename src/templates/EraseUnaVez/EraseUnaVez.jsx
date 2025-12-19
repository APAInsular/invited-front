import EraseUnaVezCountdown from "./components/EraseUnaVezCountdown";
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
import PHOTO_FRAME2 from "./images/photo_frame_nobg.png";
import PHOTO_MASK from "./images/photo_mask.png";
import PHOTO from "./images/casadosfelices.webp";
import FramedPhoto from "./../components/FramedPhoto/FramedPhoto";
import StylableTimeline from "../components/StylableTimeline/StylableTimeline";
import EraseUnaVezTimelineStyle from "./styles/EraseUnaVezTimeline.css";
import Location from "../components/Location/Location";
import WeddingForm from "../components/WeddingForm/WeddingForm";
//<section className="header-invite-template2 text-center py-4 section-bg-template2 bg-portada-template2">

//</section>

const EraseUnaVez = ({ wedding, trad: t, images, coverImage }) => {
  return (
    <div className={styles.wrapper}>
      <Page
        backgroundImage={BG_HEAD}
        backgroundSize="100% 100%"
        padding="0"
        minHeight="820px"
        centerVertically
      >
        <section className="text-center">
          <FramedPhoto
            frameScale={1.7}
            frameOffsetY={30}
            photoScale={0.6}
            f
            maskScale={1.3}
            mask={`url(${PHOTO_MASK})`}
            frame={PHOTO_FRAME2}
            photo={PHOTO}
          />

          <CoupleNames
            groom={wedding.user.name}
            bride={wedding.user.partner.name}
            icon="&"
          />
          <p className="text-center px-5 py-2">
            Tenemos el gusto de invitaros a nuestra boda que tendrá lugar
          </p>
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
          <h3 className="subtitle">Nuestra canción especial</h3>
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
          <EraseUnaVezCountdown
            weddingDate={wedding.weddingDate}
            text={t("countdown")}
          />
        </section>
      </Page>
      <Page
        backgroundImage={BG_TIMELINE}
        padding="0"
        minHeight="830px"
        centerVertically
      >
        <section className="text-center">
          <h3 className="subtitle">Itinerario de la boda</h3>
          <StylableTimeline events={wedding.events} text={t("timeline")} />
        </section>
      </Page>
      <Page
        backgroundImage={BG_GALLERY}
        padding="0"
        minHeight="830px"
        centerVertically
      >
        <section className="text-center">
          <h3 className="subtitle">Conoce nuestra historia</h3>
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
          <WeddingForm
            weddingId={wedding.id}
            text={t("weddingForm")}
            fields={t("weddingForm.fields")}
          />{" "}
        </section>
      </Page>

      <Page backgroundImage={BG_TIMELINE} minHeight="150px">
        <FooterBranding />
      </Page>
    </div>
  );
};

export default EraseUnaVez;
