import React from 'react';
import { Church } from "lucide-react";

const Location_Plantilla_5 = ({ location, country }) => {
    return (
        <section className="text-center  py-1">
            <div className="container ">
                <h2 className="section-title-template5">Lugar de la Boda</h2>
                <Church size={45} className="text-dark" />
                <p className="section-subtitle-template5 mb-0">
                    {location}<br />
                    {country}
                </p>
            </div>
        </section>
    );
};

export default Location_Plantilla_5;
