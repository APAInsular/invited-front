import React from 'react';
import { Church } from "lucide-react";

const Location_Plantilla_2 = ({ location, country }) => {
    return (
        <section className="text-center my-4 py-1">
            <div className="container mt-4">
                <h2 className="section-title-template2">Lugar de la Boda</h2>
                <Church size={40} className="text-white" />
                <p className="section-subtitle-template2 mb-0">
                    {location}<br />
                    {country}
                </p>
            </div>
        </section>
    );
};

export default Location_Plantilla_2;
