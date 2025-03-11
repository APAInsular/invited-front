import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import apiClient from "../../config/axiosConfig";

const WeddingForm = ({ weddingId }) => {
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

        const dataToSend = { ...formGuest, attendants };

        console.log(dataToSend)
        try {
            const response = await apiClient.post("/api/guests", dataToSend);

            console.log(response.data)
            alert("Formulario enviado con éxito");
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Hubo un error al enviar el formulario");
        }
    };

    return (
        <div className="container my-4">
            <h2 className="mb-3">💍 Confirmar Asistencia</h2>
            <form className="p-4 border rounded bg-light" onSubmit={handleSendForm}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="name" value={formGuest.name} onChange={handleFormChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Primer Apellido</label>
                    <input type="text" className="form-control" name="firstSurname" value={formGuest.firstSurname} onChange={handleFormChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Segundo Apellido</label>
                    <input type="text" className="form-control" name="secondSurname" value={formGuest.secondSurname} onChange={handleFormChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Información Extra</label>
                    <textarea className="form-control" rows="3" name="extraInformation" value={formGuest.extraInformation} onChange={handleFormChange}></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Alergias</label>
                    <input type="text" className="form-control" name="allergy" value={formGuest.allergy} onChange={handleFormChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Tipo de Alimentación</label>
                    <select className="form-select" name="feeding" value={formGuest.feeding} onChange={handleFormChange}>
                        <option value="">Selecciona...</option>
                        <option value="omnivore">Omnívoro</option>
                        <option value="vegetarian">Vegetariano</option>
                        <option value="vegan">Vegano</option>
                    </select>
                </div>

                {weddingId !== 1 &&
                    <div className="mb-3">
                        <label className="form-label">¿Llevarás acompañante?</label>
                        <div>
                            <input type="radio" name="companion" value="yes" className="form-check-input me-2" onChange={handleCompanionChange} />
                            <label className="form-check-label me-3">Sí</label>

                            <input type="radio" name="companion" value="no" className="form-check-input me-2" onChange={handleCompanionChange} defaultChecked />
                            <label className="form-check-label">No</label>
                        </div>
                    </div>
                }

                {hasCompanion && (
                    <div className="mb-3">
                        <label className="form-label">¿Cuántos acompañantes?</label>
                        <input type="number" className="form-control" min="1" max="5" value={companionCount} onChange={handleCompanionCountChange} />
                    </div>
                )}

                {attendants.length > 0 && (
                    <div className="mb-3">
                        <h4 className="mt-3">Datos de los Acompañantes</h4>
                        {attendants.map((_, index) => (
                            <div key={index} className="p-3 border rounded bg-white my-2">
                                <h5>Acompañante {index + 1}</h5>
                                <div className="mb-2">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" className="form-control" onChange={(e) => handleCompanionInputChange(index, "name", e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Primer Apellido</label>
                                    <input type="text" className="form-control" onChange={(e) => handleCompanionInputChange(index, "firstSurname", e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Segundo Apellido</label>
                                    <input type="text" className="form-control" onChange={(e) => handleCompanionInputChange(index, "secondSurname", e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Edad del acompañante</label>
                                    <input type="text" className="form-control" onChange={(e) => handleCompanionInputChange(index, "age", e.target.value)} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <button type="submit" className="btn btn-primary w-100">
                    Enviar Confirmación
                </button>
            </form>
        </div>
    );
};

export default WeddingForm;
