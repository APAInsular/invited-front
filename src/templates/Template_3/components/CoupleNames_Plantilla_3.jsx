import React from 'react';

const CoupleNames_Plantilla_3 = ({ imageUrl, groom, bride, location, date }) => {
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
         <div className="container"  >
            <h1 className="invite-name-template3 ">{groom} & {bride}</h1>
            <div className="position-relative d-inline-block mb-4">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsT5PDZ7q5nVBWH6o7kaOe6NqNDIdmsjpJsg&s' 
                    alt="Samantha y Javier" className="img-fluid rounded-circle header-photo-template3"></img>
                <div className="circle-frame"></div>
            </div>
            <div className="d-flex justify-content-center">
                <p className="invite-text-template3 mb-4">
                    Tenemos el gusto de invitaros a nuestra boda que tendrá lugar
                </p>
            </div>
            <p className="invite-date-template3">{formatDateToString(date)}</p>
            <p className="invite-location-template3">
                en <br></br>{location}
            </p>
        </div>
    );
}

export default CoupleNames_Plantilla_3;
