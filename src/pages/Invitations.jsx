import React, { useState, useEffect } from "react";
import apiClient from "../config/axiosConfig";
import { useParams } from "react-router-dom";

import Template2Refactored from "../templates/Teplate_2_refactored";
import BaseTemplate from '../templates/BaseTemplate';
import Template_1 from '../templates/Template_1/Template_1';

const Invitations = () => {
  const [weddingData, setWeddingData] = useState(null);
  const { idWedding } = useParams();

  const weddingFalse = {
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
        template: "plantilla",
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

  return (
    <BaseTemplate translationPage={"template1WeddingPage"}>
      <Template2Refactored wedding={weddingFalse.wedding} />
    </BaseTemplate>
  );

  /*
    
    useEffect(() => {
        const fetchWedding = async () => {
            try {
                console.log(idWedding);
                const response = await apiClient.get(`/api/weddings/${idWedding}/full-info`);

                setWeddingData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error al obtener la boda:", error);
            }
        };

        fetchWedding();
    }, [idWedding]);

    // Si la boda aún no se ha cargado, mostramos un mensaje de carga
    if (!weddingData) {
        return <div>Cargando...</div>;
    }

    // Renderizamos el componente dependiendo del valor de wedding.template
    switch (wedding.wedding.template) {
        case "Plantilla Romantica":
            return <WeddingWebsite wedding={weddingData.wedding} />;
        case "Plantilla Acuarela":
            return <Template_1 wedding={weddingData.wedding} />;
        case "Plantilla Erase una vez":
            return <Template_2 wedding={weddingData.wedding} />;
        default:
            return <WeddingWebsite wedding={wedding.wedding} />;
    }
    */
};

export default Invitations;
