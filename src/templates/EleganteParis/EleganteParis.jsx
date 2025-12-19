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

const EleganteParis = ({ wedding, images, trad, coverImage }) => {
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
              icon={trad("coupleNames.heartIcon")}
              asColumn
            />
          </div>

          <div className="text-center">
            <img
              src={coverImage}
              alt="couple"
              style={{ border: "10px double black" }}
            />

            <p>{trad("hero.description")}</p>

            <p style={{ whiteSpace: "pre-line" }}>
              {trad("hero.dateLocation")}
            </p>
          </div>
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_1} minHeight="830px">
        <section className="text-center">
          <h3 className="subtitle">{trad("songLink.title")}</h3>
          <SongLink
            songUrl={wedding.musicUrl}
            songTitle={wedding.musicTitle}
            text={trad("songLink")}
          />
        </section>

        <section>
          <h3 className="text-center subtitle">
            {trad("location.title")}
          </h3>
          <p className="p-5 text-center">
            {trad("location.name")}
            <br />
            {trad("location.addressLine1")}
            <br />
            {trad("location.addressLine2")}
          </p>
        </section>

        <section>
          <h3 className="text-center subtitle">
            {trad("countdown.title")}
          </h3>
          <CustomizableCountDown
            weddingDate={wedding.weddingDate}
            text={trad("countdown")}
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
            text={trad("timeline")}
            line={{ lineSrc: DECO, lineSize: "10px" }}
          />
        </section>
      </Page>

      <Page backgroundImage={BACKGROUND_1} minHeight="830px">
        <section className="text-center">
          <h3 className="subtitle">{trad("gallery.title")}</h3>
          <Carrousel
            images={images}
            text={trad("gallery")}
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
            text={trad("weddingForm")}
            fields={trad("weddingForm.fields")}
          />
          <p className="p-3 text-center">
            {trad("footer.thanks")}
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
