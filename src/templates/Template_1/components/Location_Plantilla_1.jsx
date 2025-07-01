import React from 'react';
import { Church } from "lucide-react";

const Location_Plantilla_1 = ({ location, country, text }) => {
    return (
        <section class="text-center">
            <div class="container">
                <h2 class="section-title"><strong>{text.title}</strong></h2>
                <Church size={32} className="text-gray-700" />
                <p class="section-subtitle mb-0">
                    {location}<br></br>
                    {country}
                </p>
            </div>
        </section>
    )
}

export default Location_Plantilla_1;
