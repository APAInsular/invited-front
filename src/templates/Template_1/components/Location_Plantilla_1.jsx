import React from 'react';

const Location_Plantilla_1 = ({ location, country }) => {
    return (
        <section class="text-center">
            <div class="container">
                <h2 class="section-title"><strong>¿A dónde ir?</strong></h2>
                <p class="section-subtitle mb-0">
                    {location}<br></br>
                    {country}
                </p>
            </div>
        </section>
    )
}

export default Location_Plantilla_1;
