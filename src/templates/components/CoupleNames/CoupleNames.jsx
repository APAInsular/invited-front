import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CoupleNames.css";

const CoupleNames = ({ groom, bride }) => {
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
        </div>
    );
};

export default CoupleNames;
