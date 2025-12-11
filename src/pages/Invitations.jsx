import React, { useState, useEffect } from "react";
import apiClient from "../config/axiosConfig";
import { useParams } from "react-router-dom";

import Classic from "../templates/Classic/Classic";
import Template_1 from "../templates/Template_1/Template_1";
import Template_2 from "../templates/Template_2/Template_2";
import HavanaModerna from '../templates/HavanaModerna/HavanaModerna';
import BaseTemplate from "../templates/BaseTemplate";

const Invitations = () => {
    const [weddingData, setWeddingData] = useState(null);
    const { idWedding } = useParams();

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
    switch (weddingData.wedding.template) {
        case "Plantilla Romantica":
            return <Classic wedding={weddingData.wedding} />;

        case "Plantilla Acuarela":
            return <Template_1 wedding={weddingData.wedding} />;

        case "Plantilla Erase una vez":
            return <Template_2 wedding={weddingData.wedding} />;

        case "Plantilla Havana Moderna":
            return <BaseTemplate translationPage={"template1WeddingPage"} wedding={weddingData.wedding}   ><HavanaModerna /></BaseTemplate>;

        default:
            return <Classic wedding={weddingData.wedding} />;
    }
};

export default Invitations;


