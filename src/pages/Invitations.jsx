import React, { useState, useEffect } from "react";
import apiClient from "../config/axiosConfig";
import { useParams } from "react-router-dom";

import WeddingWebsite from "../templates/Template";
import Template_1 from "../templates/Template_1/Template_1";
import Template_2 from "../templates/Template_2/Template_2";

const Invitations = () => {
    const [wedding, setWedding] = useState(null);
    const { idWedding } = useParams();

    useEffect(() => {
        const fetchWedding = async () => {
            try {
                console.log(idWedding);
                const response = await apiClient.get(`/api/weddings/${idWedding}/full-info`);

                setWedding(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error al obtener la boda:", error);
            }
        };

        fetchWedding();
    }, [idWedding]);

    // Si la boda aún no se ha cargado, mostramos un mensaje de carga
    if (!wedding) {
        return <div>Cargando...</div>;
    }

    // Renderizamos el componente dependiendo del valor de wedding.template
    switch (wedding.wedding.template) {
        case "Plantilla Romantica":
            return <WeddingWebsite wedding={wedding.wedding} />;
        case "Plantilla Acuarela":
            return <Template_1 wedding={wedding.wedding} />;
        case "Plantilla Erase una vez":
            return <Template_2 wedding={wedding.wedding} />;
        default:
            return <WeddingWebsite wedding={wedding.wedding} />;
    }
};

export default Invitations;
