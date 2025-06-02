import React from 'react';

const CoupleNames_Plantilla_2 = ({ imageUrl, groom, bride, location, date }) => {
    function formatDateToString(dateString) {
        if (!dateString) return "";
        const date = new Date(dateString);

        const weekday = date.toLocaleDateString("es-ES", { weekday: "long" });
        const day = date.getDate();
        const month = date.toLocaleDateString("es-ES", { month: "long" });
        const year = date.getFullYear();

        return `${weekday} ${day} de ${month} de ${year}`;
    }

    return (
        <div className="container" style={{ marginTop: "60px" }}>
            <div className="position-relative d-inline-block mb-4">

                <svg width="0" height="0">
                    <defs>
                        <mask id="mascara-corazon" maskContentUnits="objectBoundingBox">
                            <g transform="translate(0,1) scale(1,-1)">
                                <path fill="white" d="M0.5,0.85 
                                C0.75,1  1,0.75  1,0.5 
                                C1,0.25  0.75,0  0.5,0 
                                C0.25,0  0,0.25   0,0.5 
                                C0,0.75  0.25,1   0.5,0.85 Z"/>
                            </g>
                        </mask>
                    </defs>
                </svg>
                <img src={imageUrl} alt="Samantha y Javier" className="img-fluid rounded-circle header-photo-template2"></img>
                <div className="floral-frame-template2"></div>
            </div>
            <h1 className="invite-name-template2 mt-3 mb-4">{groom} & {bride}</h1>
            <div className="d-flex justify-content-center">
                <p className="invite-text-template2 mb-4">
                    Tenemos el gusto de invitaros a nuestra boda que tendrá lugar
                </p>
            </div>
            <p className="invite-date-template2">{formatDateToString(date)}</p>
            <p className="invite-location-template2">
                en <br></br><strong>{location}</strong>
            </p>
        </div>
    );
}

export default CoupleNames_Plantilla_2;
