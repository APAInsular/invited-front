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
                <img src={imageUrl} alt="Samantha y Javier" className="img-fluid rounded-circle header-photo"></img>
                <div className="floral-frame"></div>
            </div>
            <h1 className="invite-name mt-3 mb-4"><strong>{groom}<br></br>&<br></br>{bride}</strong></h1>
            <div className="d-flex justify-content-center">
                <p className="invite-text mb-4">
                    Tenemos el gusto de invitaros a nuestra boda que tendrá lugar
                </p>
            </div>
            <p className="invite-date">{formatDateToString(date)}</p>
            <p className="invite-location">
                en <br></br><strong>{location}</strong>
            </p>
        </div>
    );
}

export default CoupleNames_Plantilla_2;
