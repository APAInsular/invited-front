import React from 'react';

const CoupleNames_Plantilla_4 = ({ imageUrl, groom, bride, location, date }) => {
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
            <h1 className="invite-name-template4 ">{groom} & {bride}</h1>
            <div className="position-relative d-inline-block mb-5">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsT5PDZ7q5nVBWH6o7kaOe6NqNDIdmsjpJsg&s' 
                    alt="Samantha y Javier" className=" header-photo-template4"></img>
                <div className="heart-frame"></div>
            </div>
            <div className="d-flex justify-content-center">
                <p className="invite-text-template4 ">
                    Tenemos el gusto de invitaros a nuestra boda que tendrá lugar
                </p>
            </div>
            <p className="invite-date-template4">{formatDateToString(date)}</p>
            <p className="invite-location-template4">
                en <br></br>{location}
            </p>
        </div>
    );
}

export default CoupleNames_Plantilla_4;
