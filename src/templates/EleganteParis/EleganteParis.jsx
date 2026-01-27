import CoupleNames from "../components/CoupleNames/CoupleNames";
import WeddingForm from "../components/WeddingForm/WeddingForm";
import SongLink from "../components/SongLink/SongLink";
import Page from "../components/Page/Page";
import Timeline from "../components/Timeline/Timeline";
import CustomizableCountDown from "../components/CustomizableCountDown/CustomizableCountDown";
import Carrousel from "../components/Carrousel/Carrousel";
import CarrouselCard from "../components/Carrousel/CarrouselCard/CarrouselCard";
import FooterBranding from "../components/FooterBranding/FooterBranding";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/TemplateDefaults.css";
import styles from "./EleganteParis.module.css";

import BACKGROUND_0 from "./images/background_0.jpg";
import BACKGROUND_1 from "./images/background_1.jpg";
import DECO from "./images/timeline_decoration.png";
import FramedPhoto from "../components/FramedPhoto/FramedPhoto";

const EleganteParis = ({ wedding, images, translate: t, coverImage }) => {
  return (
    <div className={styles.wrapper}>
      <Page
        backgroundSize="100%"
        backgroundImage={BACKGROUND_0}
        padding="0"
        minHeight="830px"
      >
        <section>
          <div className="mt-2">
            <CoupleNames
              groom={wedding.user.name}
              bride={wedding.user.partner.name}
              icon={t("coupleNames.heartIcon")}
              asColumn
            />
          </div>

          <div className="text-center">
            <FramedPhoto 
              borderStyle="black double 2px"
              photo={coverImage}
            />

            <p>{t("hero.description")}</p>

            <p style={{ whiteSpace: "pre-line" }}>
              {t("hero.dateLocation")}
            </p>
          </div>
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_1} minHeight="830px">
        <section className="text-center">
          <h3 className="subtitle">{t("songLink.title")}</h3>
          <SongLink
            songUrl={wedding.musicUrl}
            songTitle={wedding.musicTitle}
            text={t("songLink")}
          />
        </section>

        <section>
          <h3 className="text-center subtitle">
            {t("location.title")}
          </h3>
          <p className="p-5 text-center">
            {t("location.name")}
            <br />
            {t("location.addressLine1")}
            <br />
            {t("location.addressLine2")}
          </p>
        </section>

        <section>
          <h3 className="text-center subtitle">
            {t("countdown.title")}
          </h3>
          <CustomizableCountDown
            weddingDate={wedding.weddingDate}
            text={t("countdown")}
            frame={{
              borderStyle: "2px solid #2c2c2c62",
              frameMinsize: "60px",
            }}
          />
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_0} minHeight="830px">
        <section>
          <Timeline
            events={wedding.events}
            text={t("timeline")}
            line={{ lineSrc: DECO, lineSize: "10px" }}
          />
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_1} minHeight="830px">
        <section className="text-center">
          <h3 className="subtitle">{t("gallery.title")}</h3>
          <Carrousel
            images={images}
            text={t("gallery")}
            renderItem={(src, i) => (
              <CarrouselCard key={i} src={src} height="1500px" />
            )}
          />
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_0} minHeight="830px">
        <section>
          <WeddingForm
            weddingId={wedding.id}
            text={t("weddingForm")}
            fields={t("weddingForm.fields")}
          />
          <p className="p-3 text-center">
            {t("footer.thanks")}
          </p>
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_0} minHeight="150px">
        <FooterBranding />
      </Page>
    </div>
  );
};

export default EleganteParis;
