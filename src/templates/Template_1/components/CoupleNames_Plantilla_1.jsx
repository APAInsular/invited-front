import React from 'react';

const CoupleNames_Plantilla_1 = () => {
    return (
        <section className="header-invite text-center mt-4 py-5 section-bg bg-portada">
            <div className="container" style={{ marginTop: "60px" }}>
                <div className="position-relative d-inline-block mb-4">
                    <img src="./images/couple.jpg" alt="Samantha y Javier" className="img-fluid rounded-circle header-photo"></img>
                    <div className="floral-frame"></div>
                </div>
                <h1 className="invite-name mt-3 mb-4">Samantha<br></br>&<br></br>Javier</h1>
                <div className="d-flex justify-content-center">
                    <p className="invite-text mb-4">
                        Tenemos el gusto de invitaros a nuestra boda que tendrá lugar
                    </p>
                </div>
                <p className="invite-date">sábado 5 de octubre 2026</p>
                <p className="invite-location">
                    en <br></br><strong>Pazo de Santa Catalina</strong>
                </p>
            </div>
        </section>
    );
}

export default CoupleNames_Plantilla_1;
