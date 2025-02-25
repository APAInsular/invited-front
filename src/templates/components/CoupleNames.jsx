import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WeddingWebsite.css";

const CoupleNames = ({ groom = "Mario", bride = "Maria", groomDescription = "El amante de los viajes y la aventura", brideDescription = "La apasionada del arte y la cultura" }) => {
    return (
        <div className="container text-center my-4">
            <div className="row align-items-center couple-box">
                {/* Columna para el nombre del novio */}
                <div className="col-3">
                    <div className="name-box groom">
                        <i className="bi"></i> {groom}
                    </div>
                </div>

                {/* Columna para el corazón */}
                <div className="col-3">
                    <div className="heart">💖</div>
                </div>

                {/* Columna para el nombre de la novia */}
                <div className="col-3">
                    <div className="name-box bride">
                        {bride} <i className="bi"></i>
                    </div>
                </div>
            </div>

            <div className="couple-description">
                <p>{groom} - {groomDescription}</p>
                <p>{bride} - {brideDescription}</p>
            </div>
        </div>
    );
};

export default CoupleNames;
