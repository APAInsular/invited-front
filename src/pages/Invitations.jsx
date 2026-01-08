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
import TemplateLoading from "./TemplateLoading";
import TradicionalLondres from "../templates/TradicionalLondres/TradicionalLondres";
import AlegreLasVegas from "../templates/AlegreLasVegas/AlegreLasVegas";

const available = {
  Romantica: <Classic />,
  EleganteParis: <EleganteParis />,
  HavanaModerna: <HavanaModerna />,
  SanfranciscoArcoiris: <SanfranciscoArcoiris />,
  JardinMelbourne: <JardinMelbourne />,
  Acuarela: <AcuarelaBoho />,
  EraseunaVez: <EraseUnaVez />,
  ArmoniosoMalta: <ArmoniosoMalta />,
  AlegreLasVegas: <AlegreLasVegas />,
  TradicionalLondres: <TradicionalLondres />,
};

const USE_MOCK_WEDDING = false;

const MOCK_WEDDING_DATA = {
  message: "Detalles completos de la boda",
  wedding: {
    id: 70,
    user_id: 19,
    location_id: 1,
    dressCode: "Sin preferencias",
    weddingDate: "2025-06-26",
    musicUrl: "https://www.youtube.com/watch?v=N_jTNxB82z8",
    musicTitle: "Bad Bunny",
    groomDescription: "Descripción del novio no disponible",
    brideDescription: "Descripción de la novia no disponible",
    customMessage:
      "Te esperamos con grandes ansias para que nos acompañes en el momento mas bonito de toda nuestra vida juntos",
    foodType: "Sin Preferencias",
    guestCount: 150,
    template: "TradicionalLondres",
    coverImage:
      "weddings/javier-sandra_1747138859/cover/YDvqlKDsRBHKt4vMc2G44CI4kOhUQQez7K3dTaYr.jpg",
    created_at: "2025-05-13T12:20:59.000000Z",
    updated_at: "2025-05-13T12:20:59.000000Z",
    user: {
      id: 19,
      name: "Javier",
      firstSurname: "Garcia",
      secondSurname: "Rodriguez",
      email: "colaboracionesinvited@gmail.com",
      phone: "636237330",
      email_verified_at: null,
      created_at: "2025-05-13T12:19:12.000000Z",
      updated_at: "2025-05-13T12:19:12.000000Z",
      partner: {
        id: 18,
        name: "Sandra",
        firstSurname: "Martinez",
        secondSurname: "Castro",
        user_id: 19,
        created_at: "2025-05-13T12:19:12.000000Z",
        updated_at: "2025-05-13T12:19:12.000000Z",
      },
    },
    events: [
      {
        id: 96,
        name: "Ceremonia",
        wedding_id: 70,
        location_id: 43,
        description: null,
        time: "12:00:00",
        created_at: "2025-05-13T12:21:00.000000Z",
        updated_at: "2025-05-13T12:21:00.000000Z",
        location: {
          id: 43,
          city: "Puerto del Rosario",
          country: "Iglesia",
          created_at: "2025-05-13T11:15:22.000000Z",
          updated_at: "2025-05-13T11:15:22.000000Z",
        },
      },
      {
        id: 97,
        name: "Almuerzo",
        wedding_id: 70,
        location_id: 44,
        description: null,
        time: "14:00:00",
        created_at: "2025-05-13T12:21:00.000000Z",
        updated_at: "2025-05-13T12:21:00.000000Z",
        location: {
          id: 44,
          city: "Puerto del Rosario",
          country: "Restaurante",
          created_at: "2025-05-13T11:15:22.000000Z",
          updated_at: "2025-05-13T11:15:22.000000Z",
        },
      },
      {
        id: 98,
        name: "Fiesta",
        wedding_id: 70,
        location_id: 45,
        description: null,
        time: "19:30:00",
        created_at: "2025-05-13T12:21:00.000000Z",
        updated_at: "2025-05-13T12:21:00.000000Z",
        location: {
          id: 45,
          city: "Puerto del Rosario",
          country: "Discoteca",
          created_at: "2025-05-13T12:21:00.000000Z",
          updated_at: "2025-05-13T12:21:00.000000Z",
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
        id: 127,
        wedding_id: 70,
        image:
          "weddings/javier-sandra_1747138859/gallery/5TaDsZdWx04vxKNSMp7xTwqEVEHJ7sxlRjvdU6VL.jpg",
        created_at: "2025-05-13T12:20:59.000000Z",
        updated_at: "2025-05-13T12:20:59.000000Z",
      },
      {
        id: 128,
        wedding_id: 70,
        image:
          "weddings/javier-sandra_1747138859/gallery/8wxBpQdYTjdQF4i7jKy91mosbpESADRMcB1VDvrU.jpg",
        created_at: "2025-05-13T12:20:59.000000Z",
        updated_at: "2025-05-13T12:20:59.000000Z",
      },
      {
        id: 129,
        wedding_id: 70,
        image:
          "weddings/javier-sandra_1747138859/gallery/LNiFMSwaswyNJYIYjReJKJ3bv3aUhwAPZ9VSEzWz.jpg",
        created_at: "2025-05-13T12:21:00.000000Z",
        updated_at: "2025-05-13T12:21:00.000000Z",
      },
      {
        id: 130,
        wedding_id: 70,
        image:
          "weddings/javier-sandra_1747138859/gallery/uA7ORvzqnvlM9kuDSRoFfQqkhMet7eD9y64zdM5K.jpg",
        created_at: "2025-05-13T12:21:00.000000Z",
        updated_at: "2025-05-13T12:21:00.000000Z",
      },
      {
        id: 131,
        wedding_id: 70,
        image:
          "weddings/javier-sandra_1747138859/gallery/HbuH3jJeZBtA5sg3UGCfk1o0F6yeBYulXzch5ZSp.jpg",
        created_at: "2025-05-13T12:21:00.000000Z",
        updated_at: "2025-05-13T12:21:00.000000Z",
      },
      {
        id: 132,
        wedding_id: 70,
        image:
          "weddings/javier-sandra_1747138859/gallery/izAvl9zNe5iqsjopQgzWeZW6JTdqebN7kxtHce19.jpg",
        created_at: "2025-05-13T12:21:00.000000Z",
        updated_at: "2025-05-13T12:21:00.000000Z",
      },
    ],
  },
};

const Invitations = () => {
  const { idWedding } = useParams();

  const [weddingData, setWeddingData] = useState(null);
  const [templateName, setTemplateName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (USE_MOCK_WEDDING) {
      const templateName = MOCK_WEDDING_DATA.wedding.template
        .replace("Plantilla", "")
        .replace(/\s+/g, "");

      setWeddingData(MOCK_WEDDING_DATA);
      setTemplateName(templateName);
      setLoading(false);
      return;
    }

    const fetchWedding = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await apiClient.get(
          `/api/weddings/${idWedding}/full-info`
        );

        const templateName = response.data.wedding.template
          .replace("Plantilla", "")
          .replace(/\s+/g, "");

        setTemplateName(templateName);
        setWeddingData(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWedding();
  }, [idWedding]);

  if (loading) {
    return <TemplateLoading />;
  }

  if (error || !weddingData?.wedding?.template) {
    return <TemplateNotFound />;
  }

  if (templateName && available[templateName]) {
    return (
      <DemoWrapper>
        <BaseTemplate
          translationPage={`T_${templateName}`}
          wedding={weddingData.wedding}
        >
          {available[templateName]}
        </BaseTemplate>
      </DemoWrapper>
    );
  }

  return <TemplateNotFound />;
};

export default Invitations;
