import React, { useState, useEffect } from "react";
import apiClient from "../config/axiosConfig";
import { useParams } from "react-router-dom";

//import RomanticTemplate from "../templates/RomanticTemplate";
import DramaticTemplate from "../templates/DramaticTemplate";
import SimpleTemplate from "../templates/SimpleTemplate";
import WeddingWebsite from "../templates/Template";

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
        case "Plantilla Dramatica":
            return <WeddingWebsite wedding={wedding.wedding} />;
        case "Plantilla Simple":
            return <WeddingWebsite wedding={wedding.wedding} />;
        default:
            return <div>Plantilla no encontrada</div>;
    }
};

export default Invitations;
