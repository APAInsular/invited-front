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

const maxRetries = 3;
const Invitations = () => {
  const [weddingData, setWeddingData] = useState(null);
  const { idWedding } = useParams();
  const [retries, setRetries] = useState(0);
  const [error, setError] = useState(false);

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

    const pre = weddingData.wedding.template.replace("Plantilla", ""); // ? Replace plantilla with a space
  console.log(pre);

  const templateName = pre.replace(/\s+/g, ""); // ? Delete whitespaces
  console.log(templateName);

  if (!error && !weddingData) {
    return <TemplateLoading />;
  }

  if (error || !weddingData?.template) {
    return <TemplateNotFound />;
  }



  if (templateName && available[templateName]) {
    // ? Verify if exists this template
    return (
      <DemoWrapper>
        {" "}
        {/* 600px width limit */}
        {/* Handle translation and image state */}
        <BaseTemplate
          translationPage={`T_${templateName}`} // ? Assign the translation .json
          wedding={weddingData.wedding} // ? Pass wedding
        >
          {available[templateName]} {/* Get the specific template */}
        </BaseTemplate>
      </DemoWrapper>
    );
  }
};

export default Invitations;
