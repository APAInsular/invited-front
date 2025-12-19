import React from 'react';

const CoupleNames_Plantilla_5 = ({ imageUrl, groom, bride, location, date }) => {
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
        <div className="container-fluid"  >
            <div className="position-relative d-inline-block ">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsT5PDZ7q5nVBWH6o7kaOe6NqNDIdmsjpJsg&s' 
                    alt="Samantha y Javier" className="rounded-circle header-photo-template5"></img>
                <div className="golden-circle-frame"></div>
            </div>
            <h1 className="invite-name-template5 ">{groom} & {bride}</h1>
            <div className="d-flex justify-content-center">
                <p className="invite-text-template5 ">
                    Tenemos el gusto de invitaros a nuestra boda que tendrá lugar
                </p>
            </div>
            <p className="invite-date-template-5">{formatDateToString(date)}</p>
            <p className="invite-location-template5">
                en <br></br>{location}
            </p>
        </div>
    );
}

export default CoupleNames_Plantilla_5;
