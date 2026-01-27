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
import styles from "./SanfranciscoArcoiris.module.css";

import BACKGROUND_1 from "./images/bg_1.png";
import BACKGROUND_2 from "./images/bg_2.png";
import BACKGROUND_3 from "./images/bg_3.png";
import BACKGROUND_4 from "./images/bg_4.png";
import image from "./../JardinMelbourne/images/casadosfelices.webp";

const SanfranciscoArcoiris = ({ wedding, images, translate: t, coverImage }) => {
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
              <img src={coverImage} alt="Couple" />
            </div>

            <CoupleNames
              groom={wedding.user.name}
              bride={wedding.user.partner.name}
              icon={t("coupleNames.heartIcon")}
            />
          </div>

          <div className="text-center">
            <p className="p-4">{t("hero.description")}</p>
            <p className="subtitle" style={{ whiteSpace: "pre-line" }}>
              {t("hero.dateLocation")}
            </p>
          </div>
        </section>
      </Page>

      <Page minHeight="830px" backgroundImage={BACKGROUND_1}>
        <section className="text-center">
          <h3 className="subtitle">{t("gallery.title")}</h3>
          <Carrousel
            images={images}
            text={t("gallery")}
            renderItem={(src, i) => <CarrouselCard key={i} src={src} height="1500px" />}
          />
        </section>
        <h3 className="text-center subtitle">{t("gallery.cta")}</h3>
      </Page>

      <Page backgroundImage={BACKGROUND_2} minHeight="830px">
        <section>
          <Timeline events={wedding.events} text={t("timeline")} />
        </section>
      </Page>

      <Page
        footer={
          <section>
            <h3 className="text-center subtitle">{t("countdown.title")}</h3>
            <CustomizableCountDown
              weddingDate={wedding.weddingDate}
              text={t("countdown")}
              frame={{
                borderStyle: "2px solid #2c2c2c62",
                frameMinsize: "60px",
              }}
            />
          </section>
        }
        backgroundImage={BACKGROUND_1}
        minHeight="830px"
        centerVertically
      >
        <section className="text-center">
          <h3 className="subtitle">{t("songLink.title")}</h3>
          <div className="p-3">
            <SongLink
              songUrl={wedding.musicUrl}
              songTitle={wedding.musicTitle}
              text={t("songLink")}
            />
          </div>
        </section>

        <section className="text-center">
          <h3 className="subtitle">{t("location.title")}</h3>
          <p className="p-3">{t("location.address")}</p>
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_1} minHeight="830px">
        <section>
          <WeddingForm
            weddingId={wedding.id}
            text={t("weddingForm")}
            fields={t("weddingForm.fields")}
          />
          <p className="p-3 text-center">{t("footer.thanks")}</p>
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_2} minHeight="150px">
        <FooterBranding />
      </Page>
    </div>
  );
};

export default SanfranciscoArcoiris;
