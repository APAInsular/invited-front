import React, { useState, useEffect } from "react";
import apiClient from "../config/axiosConfig";
import { useParams } from "react-router-dom";

import WeddingWebsite from "../templates/Template";
import Template_1 from "../templates/Template_1/Template_1";
import Template_2 from "../templates/Template_2/Template_2";
import Template_3 from "../templates/Template_3/Template_3";

const Invitations = () => {
    const [wedding, setWedding] = useState(null);
    const { idWedding } = useParams();

    // useEffect(() => {
    //     const fetchWedding = async () => {
    //         try {
    //             console.log(idWedding);
    //              const response =



    //             setWedding(response.data);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error("Error al obtener la boda:", error);
    //         }
    //     };

    //     fetchWedding();
    // }, [idWedding]);

    // Si la boda aún no se ha cargado, mostramos un mensaje de carga
    return <Template_3 wedding={                 {
    "id": 81,
    "user_id": 19,
    "location_id": 1,
    "dressCode": "Sin preferencias",
    "weddingDate": "2025-08-22",
    "musicUrl": "https://www.youtube.com/watch?v=IoHXCVmTptg",
    "musicTitle": "Canción nupcial",
    "groomDescription": "Descripción del novio no disponible",
    "brideDescription": "Descripción de la novia no disponible",
    "customMessage": "Te esperamos con grandes ansias para que nos acompañes en el momento mas bonito de toda nuestra vida juntos",
    "foodType": "Sin Preferencias",
    "guestCount": 150,
    "template": "Plantilla Erase una vez",
    "coverImage": "weddings/javier-sandra_1749025147/cover/gXF2AWzVfSYUxVttgLBkreQ8irpMEqv9obJUu3qO.jpg",
    "created_at": "2025-06-04T08:19:08.000000Z",
    "updated_at": "2025-06-04T08:19:08.000000Z",
    "user": {
        "id": 19,
        "name": "Alfonso",
        "firstSurname": "Garcia",
        "secondSurname": "Rodriguez",
        "email": "colaboracionesinvited@gmail.com",
        "phone": "636237330",
        "email_verified_at": null,
        "created_at": "2025-05-13T12:19:12.000000Z",
        "updated_at": "2025-05-13T12:19:12.000000Z",
        "partner": {
            "id": 18,
            "name": "Sandra",
            "firstSurname": "Martinez",
            "secondSurname": "Castro",
            "user_id": 19,
            "created_at": "2025-05-13T12:19:12.000000Z",
            "updated_at": "2025-05-13T12:19:12.000000Z"
        }
    },
    "events": [
        {
            "id": 115,
            "name": "Ceremonia",
            "wedding_id": 81,
            "location_id": 43,
            "description": null,
            "time": "12:00:00",
            "created_at": "2025-06-04T08:19:08.000000Z",
            "updated_at": "2025-06-04T08:19:08.000000Z",
            "location": {
                "id": 43,
                "city": "Puerto del Rosario",
                "country": "Iglesia",
                "created_at": "2025-05-13T11:15:22.000000Z",
                "updated_at": "2025-05-13T11:15:22.000000Z"
            }
        },
        {
            "id": 116,
            "name": "Almuerzo",
            "wedding_id": 81,
            "location_id": 44,
            "description": null,
            "time": "14:00:00",
            "created_at": "2025-06-04T08:19:08.000000Z",
            "updated_at": "2025-06-04T08:19:08.000000Z",
            "location": {
                "id": 44,
                "city": "Puerto del Rosario",
                "country": "Restaurante",
                "created_at": "2025-05-13T11:15:22.000000Z",
                "updated_at": "2025-05-13T11:15:22.000000Z"
            }
        },
        {
            "id": 117,
            "name": "Fiesta",
            "wedding_id": 81,
            "location_id": 45,
            "description": null,
            "time": "21:00:00",
            "created_at": "2025-06-04T08:19:08.000000Z",
            "updated_at": "2025-06-04T08:19:08.000000Z",
            "location": {
                "id": 45,
                "city": "Puerto del Rosario",
                "country": "Discoteca",
                "created_at": "2025-05-13T12:21:00.000000Z",
                "updated_at": "2025-05-13T12:21:00.000000Z"
            }
        }
    ],
    "guests": [],
    "location": {
        "id": 1,
        "city": "Puerto del Rosario",
        "country": "España",
        "created_at": "2025-03-10T10:06:32.000000Z",
        "updated_at": "2025-03-10T10:06:32.000000Z"
    },
    "images": [
        {
            "id": 176,
            "wedding_id": 81,
            "image": "weddings/javier-sandra_1749025147/gallery/4za9PMQi7WhfVn3Ou44Be9rQdX1MbKkGLZzo5GIv.jpg",
            "created_at": "2025-06-04T08:19:08.000000Z",
            "updated_at": "2025-06-04T08:19:08.000000Z"
        },
        {
            "id": 177,
            "wedding_id": 81,
            "image": "weddings/javier-sandra_1749025147/gallery/Imj3x01RceuFr5H3SCrMngWAm7X929FqBQS8MtwC.jpg",
            "created_at": "2025-06-04T08:19:08.000000Z",
            "updated_at": "2025-06-04T08:19:08.000000Z"
        },
        {
            "id": 178,
            "wedding_id": 81,
            "image": "weddings/javier-sandra_1749025147/gallery/uvD8WXnUmdXmPztS2cOE3w2eZuQvA295vljoBGjk.jpg",
            "created_at": "2025-06-04T08:19:08.000000Z",
            "updated_at": "2025-06-04T08:19:08.000000Z"
        },
        {
            "id": 179,
            "wedding_id": 81,
            "image": "weddings/javier-sandra_1749025147/gallery/xPbRC3JZZffowxCU5IUHEnJWp09M34MzkHGJpn0I.jpg",
            "created_at": "2025-06-04T08:19:08.000000Z",
            "updated_at": "2025-06-04T08:19:08.000000Z"
        },
        {
            "id": 180,
            "wedding_id": 81,
            "image": "weddings/javier-sandra_1749025147/gallery/Km6Iuo6lb99Rr3iKiWsQRd3eWQhoFt40p2pdXVU9.jpg",
            "created_at": "2025-06-04T08:19:08.000000Z",
            "updated_at": "2025-06-04T08:19:08.000000Z"
        },
        {
            "id": 181,
            "wedding_id": 81,
            "image": "weddings/javier-sandra_1749025147/gallery/3UoRCLDvDTAcVc1VBnbderxRMQBzpBkvvUqDpTQR.jpg",
            "created_at": "2025-06-04T08:19:08.000000Z",
            "updated_at": "2025-06-04T08:19:08.000000Z"
        }
    ]
}} />;
    // if (!wedding) {
    //     return <div>Cargando...</div>;
    // }

    // // Renderizamos el componente dependiendo del valor de wedding.template
    // switch (wedding.wedding.template) {
    //     case "Plantilla Romantica":
    //         return <WeddingWebsite wedding={wedding.wedding} />;
    //     case "Plantilla Acuarela":
    //         return <Template_1 wedding={wedding.wedding} />;
    //     case "Plantilla Erase una vez":
    //         return <Template_2 wedding={wedding.wedding} />;
    //     case "Plantilla Amornioso-Malta":
    //     default:
    //         return <WeddingWebsite wedding={wedding.wedding} />;
    // }
};

export default Invitations;


