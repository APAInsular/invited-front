import React, { useState, useEffect } from "react";
import apiClient from "../config/axiosConfig";
import { useParams } from "react-router-dom";

import RomanticTemplate from "../templates/RomanticTemplate";
import DramaticTemplate from "../templates/DramaticTemplate";
import SimpleTemplate from "../templates/SimpleTemplate";

const Invitations = () => {
    const [wedding, setWedding] = useState(null);
    const { idWedding } = useParams();

    useEffect(() => {
        const fetchWedding = async () => {
            try {
                console.log(idWedding);
                const response = await apiClient.get(`/api/weddings/${idWedding}`);

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
    switch (wedding.template) {
        case "Plantilla Romantica":
            return <RomanticTemplate />;
        case "Plantilla Dramatica":
            return <DramaticTemplate />;
        case "Plantilla Simple":
            return <SimpleTemplate />;
        default:
            return <div>Plantilla no encontrada</div>;
    }
};

export default Invitations;
