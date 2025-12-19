import { useState, useEffect } from "react";
import apiClient from "../config/axiosConfig";
import { useParams } from "react-router-dom";

import Classic from "../templates/Classic/Classic";
import HavanaModerna from "../templates/HavanaModerna/HavanaModerna";
import BaseTemplate from "../templates/BaseTemplate";
import DemoWrapper from "./../templates/DemoWrapper";
import JardinMelbourne from "../templates/JardinMelbourne/JardinMelbourne";
import EleganteParis from "../templates/EleganteParis/EleganteParis";
import SanfranciscoArcoiris from "../templates/SanfranciscoArcoiris/SanfranciscoArcoiris";
import AcuarelaBoho from "../templates/AcuarelaBoho/AcuarelaBoho";

import ArmoniosoMalta from "../templates/ArmoniosoMalta/ArmoniosoMalta";
import EraseUnaVez from "./../templates/EraseUnaVez/EraseUnaVez";
import TemplateNotFound from "./TemplateNotFound";
import TemplateLoading from './TemplateLoading';
import TradicionalLondres from "../templates/TradicionalLondres/TradicionalLondres";
import AlegreLasVegas from '../templates/AlegreLasVegas/AlegreLasVegas';

const placeholder = {
    id: 85,
    user_id: 7,
    location_id: 1,
    dressCode: "Sin preferencias",
    weddingDate: "2025-12-26",
    musicUrl: "https://www.youtube.com/watch?v=IoHXCVmTptg",
    musicTitle: "La vie en rose - Emily Watts",
    groomDescription: "Descripción del novio no disponible",
    brideDescription: "Descripción de la novia no disponible",
    customMessage: "Ven y disfruta de nuestra boda",
    foodType: "Vegana",
    guestCount: 123,
    template: "Plantilla Havana Moderna",
    coverImage:
      "weddings/luis-lucas_1765459794/cover/sqmA6Of4DQy8S1rZk7OjORLEJk8mMRvW3vuggoHq.jpg",
    created_at: "2025-12-11T13:29:54.000000Z",
    updated_at: "2025-12-11T13:29:54.000000Z",
    user: {
      id: 7,
      name: "Luis",
      firstSurname: "Gordillo",
      secondSurname: "Tadeo",
      email: "gordillotadeoluis0@gmail.com",
      phone: "636237322",
      email_verified_at: null,
      created_at: "2025-03-25T13:29:39.000000Z",
      updated_at: "2025-03-25T13:29:39.000000Z",
      partner: {
        id: 7,
        name: "Lucas",
        firstSurname: "Vega",
        secondSurname: "Blanco",
        user_id: 7,
        created_at: "2025-03-25T13:29:39.000000Z",
        updated_at: "2025-03-25T13:29:39.000000Z",
      },
    },
    events: [
      {
        id: 123,
        name: "dsgweg",
        wedding_id: 85,
        location_id: 58,
        description: "xjzkcbwkevqwbek",
        time: "18:27:00",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
        location: {
          id: 58,
          city: "dñslfhwkla",
          country: "cslkvnldsa",
          created_at: "2025-12-11T13:29:54.000000Z",
          updated_at: "2025-12-11T13:29:54.000000Z",
        },
      },
      {
        id: 124,
        name: "wetwef",
        wedding_id: 85,
        location_id: 59,
        description: "xjzkcbwkevqwbek",
        time: "15:28:00",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
        location: {
          id: 59,
          city: "sodfvsd",
          country: "sodfvsd",
          created_at: "2025-12-11T13:29:54.000000Z",
          updated_at: "2025-12-11T13:29:54.000000Z",
        },
      },
      {
        id: 125,
        name: "dwgweg",
        wedding_id: 85,
        location_id: 59,
        description: "xjzkcbwkevqwbek",
        time: "15:28:00",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
        location: {
          id: 59,
          city: "sodfvsd",
          country: "sodfvsd",
          created_at: "2025-12-11T13:29:54.000000Z",
          updated_at: "2025-12-11T13:29:54.000000Z",
        },
      },
      {
        id: 126,
        name: "dwgwegbws",
        wedding_id: 85,
        location_id: 59,
        description: "xjzkcbwkevqwbek",
        time: "19:28:00",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
        location: {
          id: 59,
          city: "sodfvsd",
          country: "sodfvsd",
          created_at: "2025-12-11T13:29:54.000000Z",
          updated_at: "2025-12-11T13:29:54.000000Z",
        },
      },
      {
        id: 127,
        name: "dgwergw",
        wedding_id: 85,
        location_id: 59,
        description: "xjzkcbwkevqwbek",
        time: "18:28:00",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
        location: {
          id: 59,
          city: "sodfvsd",
          country: "sodfvsd",
          created_at: "2025-12-11T13:29:54.000000Z",
          updated_at: "2025-12-11T13:29:54.000000Z",
        },
      },
      {
        id: 128,
        name: "dgwege",
        wedding_id: 85,
        location_id: 59,
        description: "xjzkcbwkevqwbek",
        time: "17:28:00",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
        location: {
          id: 59,
          city: "sodfvsd",
          country: "sodfvsd",
          created_at: "2025-12-11T13:29:54.000000Z",
          updated_at: "2025-12-11T13:29:54.000000Z",
        },
      },
      {
        id: 129,
        name: "adsgwaeg",
        wedding_id: 85,
        location_id: 59,
        description: "xjzkcbwkevqwbek",
        time: "14:28:00",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
        location: {
          id: 59,
          city: "sodfvsd",
          country: "sodfvsd",
          created_at: "2025-12-11T13:29:54.000000Z",
          updated_at: "2025-12-11T13:29:54.000000Z",
        },
      },
      {
        id: 130,
        name: "adgear",
        wedding_id: 85,
        location_id: 59,
        description: "xjzkcbwkevqwbek",
        time: "19:28:00",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
        location: {
          id: 59,
          city: "sodfvsd",
          country: "sodfvsd",
          created_at: "2025-12-11T13:29:54.000000Z",
          updated_at: "2025-12-11T13:29:54.000000Z",
        },
      },
      {
        id: 131,
        name: "sdgwer",
        wedding_id: 85,
        location_id: 59,
        description: "xjzkcbwkevqwbek",
        time: "19:28:00",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
        location: {
          id: 59,
          city: "sodfvsd",
          country: "sodfvsd",
          created_at: "2025-12-11T13:29:54.000000Z",
          updated_at: "2025-12-11T13:29:54.000000Z",
        },
      },
    ],
    guests: [],
    location: {
      id: 1,
      city: "Puerto del Rosario",
      country: "España",
      created_at: "2025-03-10T10:06:32.000000Z",
      updated_at: "2025-03-10T10:06:32.000000Z",
    },
    images: [
      {
        id: 200,
        wedding_id: 85,
        image:
          "weddings/luis-lucas_1765459794/gallery/lMIyWGL49TSBKdctEtnRMsuD7FlEeebVpz4h7QJl.jpg",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
      },
      {
        id: 201,
        wedding_id: 85,
        image:
          "weddings/luis-lucas_1765459794/gallery/BCo3yO2ayI4dX4Ah0BoVohOxFYBhxAqlVrY7yL7C.jpg",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
      },
      {
        id: 202,
        wedding_id: 85,
        image:
          "weddings/luis-lucas_1765459794/gallery/ICS8PZNL3LCSIFppm7YLULYzLoFDikcdOMSue4a8.jpg",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
      },
      {
        id: 203,
        wedding_id: 85,
        image:
          "weddings/luis-lucas_1765459794/gallery/LIZ3oSsu0Llx9Y4voaFjFKLFy3fZZysZalPEY0PN.jpg",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
      },
      {
        id: 204,
        wedding_id: 85,
        image:
          "weddings/luis-lucas_1765459794/gallery/591KR5d18n6UmkE9RaHEO4OB6U0B0Fgxbql21gHZ.jpg",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
      },
      {
        id: 205,
        wedding_id: 85,
        image:
          "weddings/luis-lucas_1765459794/gallery/qA8g1QeFlh0lRyspXlQoZDNWje8kIoU1GbdHjbw2.jpg",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
      },
      {
        id: 206,
        wedding_id: 85,
        image:
          "weddings/luis-lucas_1765459794/gallery/WAZj0X4tHXkzsQIotXhcLxAGi9AwU1SYUjTSXhJE.jpg",
        created_at: "2025-12-11T13:29:54.000000Z",
        updated_at: "2025-12-11T13:29:54.000000Z",
      },
    ],
  };

const available = {
  EleganteParis: <EleganteParis />,
  HavanaModerna: <HavanaModerna />,
  SanfranciscoArcoiris: <SanfranciscoArcoiris />,
  JardinMelbourne: <JardinMelbourne />,
  AcuarelaBoho: <AcuarelaBoho />,
  Classic: <Classic />,
  EraseUnaVez: <EraseUnaVez />,
  ArmoniosoMalta: <ArmoniosoMalta/>,
  AlegreLasVegas: <AlegreLasVegas/>,
  TradicionalLondres: <TradicionalLondres/>
};


const maxRetries = 3;
const Invitations = () => {
  const [weddingData, setWeddingData] = useState(null);
  const { idWedding } = useParams();
  const [retries, setRetries] = useState(0);
  const [error, setError] = useState(false);

  /*
  useEffect(() => {
    const fetchWedding = async () => {
      try {
        const response = await apiClient.get(
          `/api/weddings/${idWedding}/full-info`
        );
        setWeddingData(response.data);
        setError(false);
      } catch (err) {
        console.error("Error al obtener la boda:", err);

        if (retries < maxRetries) {
          setTimeout(() => {
            setRetries((prev) => prev + 1);
          }, 3000);
        } else {
          setError(true);
        }
      }
    };

    if (!weddingData && !error) {
      fetchWedding();
    }
  }, [idWedding, retries, error, weddingData]);

  if (!error && !weddingData) {
    return <TemplateLoading/>;
  }

  if (error || !weddingData?.template) {
    return <TemplateNotFound />;
  }*/

  // const pre = weddingData.template.replace("plantilla", ""); // ? Replace plantilla with a space
  const templateName = "ArmoniosoMalta".replace(/\s+/g, ""); // ? Delete whitespaces

  if (templateName && available[templateName]) {
    // ? Verify if exists this template
    return (
      <DemoWrapper> {/* 600px width limit */}
      {/* Handle translation and image state */ }
        <BaseTemplate
          translationPage={`T_${templateName}`} // ? Assign the translation .json
          wedding={placeholder} // ? Pass wedding
        >
          {available[templateName]} {/* Get the specific template */}
        </BaseTemplate>
      </DemoWrapper>
    );
  }
};

export default Invitations;
