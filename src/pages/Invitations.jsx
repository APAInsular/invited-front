import React, { useState, useEffect } from "react";
import apiClient from "../config/axiosConfig";
import { useParams } from "react-router-dom";

import Classic from "../templates/Classic/Classic";
// import Template_2 from "../templates/Template_2/Template_2";
import HavanaModerna from "../templates/HavanaModerna/HavanaModerna";
import BaseTemplate from "../templates/BaseTemplate";
import DemoWrapper from "./../templates/DemoWrapper";
import JardinMelbourne from "../templates/JardinMelbourne/JardinMelbourne";
import EleganteParis from "../templates/EleganteParis/EleganteParis";
import SanfranciscoArcoiris from "../templates/SanfranciscoArcoiris/SanfranciscoArcoiris";
import AcuarelaBoho from "../templates/AcuarelaBoho/AcuarelaBoho";

import ArmoniosoMalta from '../templates/ArmoniosoMalta/ArmoniosoMalta';
import EraseUnaVez from './../templates/EraseUnaVez/EraseUnaVez';

const available = {
  EleganteParis: <EleganteParis />,
  HavanaModerna: <HavanaModerna />,
  SanfranciscoArcoiris: <SanfranciscoArcoiris />,
  JardinMelbourne: <JardinMelbourne />,
  AcuarelaBoho: <AcuarelaBoho/>,
  // ArmoniosoMalta: <ArmoniosoMalta/>,
  Classic: <Classic/>,
  EraseUnaVez: <EraseUnaVez/>,
  
};

const Invitations = () => {
  const [weddingData, setWeddingData] = useState(null);
  const { idWedding } = useParams();
  

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

  if (!weddingData) {
    return <div>Cargando...</div>;
  }

  
  // * weddingData.wedding.template?
  const templateName = "EraseUnaVez".replace(/\s+/g, "");
  console.log(`T_${templateName}`);
  
  if (templateName && available[templateName]) {
    return (
      <DemoWrapper>
        <BaseTemplate
          translationPage={`T_${templateName}`}
          wedding={placeholder}
        >
          {available[templateName]}
        </BaseTemplate>
      </DemoWrapper>
    );
  }

  return <p>Error: Template not found.</p>;
};

export default Invitations;