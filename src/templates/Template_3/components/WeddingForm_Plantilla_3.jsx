import React, { useState } from "react";
import apiClient from "../../../config/axiosConfig";

const WeddingForm_Plantilla_2 = ({ weddingId }) => {
    const [hasCompanion, setHasCompanion] = useState(false);
    const [companionCount, setCompanionCount] = useState(0);
    const [attendants, setAttendants] = useState([]);

    const [formGuest, setFormGuest] = useState({
        name: "",
        firstSurname: "",
        secondSurname: "",
        extraInformation: "",
        allergy: "",
        feeding: "",
        wedding_id: weddingId
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormGuest({ ...formGuest, [name]: value });
    };

    const handleCompanionChange = (e) => {
        const value = e.target.value === "yes";
        setHasCompanion(value);
        if (!value) {
            setCompanionCount(0);
            setAttendants([]);
        }
    };

    const handleCompanionCountChange = (e) => {
        const count = parseInt(e.target.value, 10);
        setCompanionCount(count);
        setAttendants(Array.from({ length: count }, () => ({ name: "", firstSurname: "", secondSurname: "", age: "" })));
    };

    const handleCompanionInputChange = (index, field, value) => {
        const updatedattendants = [...attendants];
        updatedattendants[index][field] = value;
        setAttendants(updatedattendants);
    };

    const handleSendForm = async (e) => {
        e.preventDefault();

        if (!window.grecaptcha) {
            alert("reCAPTCHA no está cargado correctamente");
            return;
        }

        const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
        const token = await window.grecaptcha.execute(siteKey, { action: "submit" });

        if (!token) {
            alert("Error al obtener el token de reCAPTCHA");
            return;
        }

        const dataToSend = { ...formGuest, attendants, token };

        try {
            await apiClient.post("/api/guests", dataToSend);
            alert("Formulario enviado con éxito");
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Hubo un error al enviar el formulario");
        }
    };

    return (
        <div className="container-template2 " style={{ marginTop: "-100px" }}>
            <h2 className="section-title-template2">Confirmar Asistencia</h2>
            <p className="text-white small">(*) campos obligatorios</p>
            <form className="form-container-template2 bg-form-template2 p-4 border rounded" onSubmit={handleSendForm}>
                <div className="mb-3">
                    <label className="form-label-custom-template2">Nombre*</label>
                    <input type="text" className="input-custom-template2" name="name" value={formGuest.name} onChange={handleFormChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label-custom-template2">Primer Apellido*</label>
                    <input type="text" className="input-custom-template2" name="firstSurname" value={formGuest.firstSurname} onChange={handleFormChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label-custom-template2">Segundo Apellido</label>
                    <input type="text" className="input-custom-template2" name="secondSurname" value={formGuest.secondSurname} onChange={handleFormChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label-custom-template2">Información Extra</label>
                    <input className="input-custom-template2" rows="3" name="extraInformation" value={formGuest.extraInformation} onChange={handleFormChange}></input>
                </div>

                <div className="mb-3">
                    <label className="form-label-custom-template2">Alergias</label>
                    <input type="text" className="input-custom-template2" name="allergy" value={formGuest.allergy} onChange={handleFormChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label-custom-template2">Tipo de Alimentación</label>
                    <select className="input-custom-template2" name="feeding" value={formGuest.feeding} onChange={handleFormChange}>
                        <option value="">Selecciona...</option>
                        <option value="Sin preferencias">Sin preferencias</option>
                        <option value="Vegatariana">Vegetariano</option>
                        <option value="Vegana">Vegano</option>
                    </select>
                </div>

                {weddingId !== 9 && (
                    <div className="mb-3">
                        <label className="form-label-custom-template2">¿Llevarás acompañante?</label>
                        <div className="d-flex gap-3 align-items-center mt-2">
                            <div>
                                <input type="radio" name="companion" value="yes" className="form-check-input me-1" onChange={handleCompanionChange} />
                                <label className="form-check-label">Sí</label>
                            </div>
                            <div>
                                <input type="radio" name="companion" value="no" className="form-check-input me-1" onChange={handleCompanionChange} defaultChecked />
                                <label className="form-check-label">No</label>
                            </div>
                        </div>
                    </div>
                )}

                {hasCompanion && (
                    <div className="mb-3">
                        <label className="form-label-custom-template2">¿Cuántos acompañantes?</label>
                        <input type="number" className="input-custom-template2" min="1" max="5" value={companionCount} onChange={handleCompanionCountChange} />
                    </div>
                )}

                {attendants.length > 0 && (
                    <div className="mb-3">
                        <h4 className="section-subtitle-template2 mt-3">Datos de los Acompañantes</h4>
                        {attendants.map((_, index) => (
                            <div key={index} className="p-3 mb-2 border rounded bg-white">
                                <h5 className="text-primary">Acompañante {index + 1}</h5>
                                <div className="mb-2">
                                    <label className="form-label-custom-template2">Nombre</label>
                                    <input type="text" className="input-custom-template2" onChange={(e) => handleCompanionInputChange(index, "name", e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label-custom-template2">Primer Apellido</label>
                                    <input type="text" className="input-custom-template2" onChange={(e) => handleCompanionInputChange(index, "firstSurname", e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label-custom-template2">Segundo Apellido</label>
                                    <input type="text" className="input-custom-template2" onChange={(e) => handleCompanionInputChange(index, "secondSurname", e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label-custom-template2">Edad del acompañante</label>
                                    <input type="text" className="input-custom-template2" onChange={(e) => handleCompanionInputChange(index, "age", e.target.value)} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <button type="submit" className="btn btn-main-template2 w-100">
                    Enviar Confirmación
                </button>
            </form>
        </div>
    );
};

export default WeddingForm_Plantilla_2;
