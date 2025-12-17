import React, { useState, useEffect } from "react";
import apiClient from "../config/axiosConfig";
import { useParams } from "react-router-dom";

import Classic from "../templates/Classic/Classic";
import Template_1 from "../templates/Template_1/Template_1";
import Template_2 from "../templates/Template_2/Template_2";
import HavanaModerna from "../templates/HavanaModerna/HavanaModerna";
import BaseTemplate from "../templates/BaseTemplate";
import DemoWrapper from "./../templates/DemoWrapper";
import JardinMelbourne from "../templates/JardinMelbourne/JardinMelbourne";
import EleganteParis from "../templates/EleganteParis/EleganteParis";
import SanfranciscoArcoiris from "../templates/SanfranciscoArcoiris/SanfranciscoArcoiris";

const Invitations = () => {
  const [weddingData, setWeddingData] = useState(null);
  const { idWedding } = useParams();
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

  /*
  useEffect(() => {
    const fetchWedding = async () => {
      try {
        console.log(idWedding);
        const response = await apiClient.get(
          `/api/weddings/${idWedding}/full-info`
        );

        setWeddingData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error al obtener la boda:", error);
      }
    };

    fetchWedding();
  }, [idWedding]);
*/
  // Si la boda aún no se ha cargado, mostramos un mensaje de carga
  /*if (!weddingData) {
    return <div>Cargando...</div>;
  }*/

  // Renderizamos el componente dependiendo del valor de wedding.template

  return (
    <DemoWrapper>
      <BaseTemplate
        translationPage="template1WeddingPage"
        wedding={placeholder}
      >
        <EleganteParis />
      </BaseTemplate>
    </DemoWrapper>
  );
};

export default Invitations;

/*

{(() => {
        switch (weddingData.wedding.template) {
          case "Plantilla Romantica":
            return (
              <BaseTemplate
                translationPage="template1WeddingPage"
                wedding={weddingData.wedding}
              >
                <Classic />
              </BaseTemplate>
            );

          case "Plantilla Acuarela":
            return <Template_1 wedding={weddingData.wedding} />;

          case "Plantilla Erase una vez":
            return <Template_2 wedding={weddingData.wedding} />;

          case "Plantilla Havana Moderna":
            return (
              <BaseTemplate
                translationPage="template1WeddingPage"
                wedding={weddingData.wedding}
              >
                <HavanaModerna />
              </BaseTemplate>
            );

          default:
            return <Classic wedding={weddingData.wedding} />;
        }
      })()}

*/
