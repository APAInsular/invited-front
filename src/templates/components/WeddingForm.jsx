import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WeddingForm = () => {
    const [hasCompanion, setHasCompanion] = useState(false);
    const [companionCount, setCompanionCount] = useState(0);
    const [companions, setCompanions] = useState([]);

    const handleCompanionChange = (e) => {
        const value = e.target.value === "yes";
        setHasCompanion(value);
        if (!value) {
            setCompanionCount(0);
            setCompanions([]);
        }
    };

    const handleCompanionCountChange = (e) => {
        const count = parseInt(e.target.value, 10);
        setCompanionCount(count);
        setCompanions(Array.from({ length: count }, () => ({ name: "", firstSurname: "", secondSurname: "" })));
    };

    const handleCompanionInputChange = (index, field, value) => {
        const updatedCompanions = [...companions];
        updatedCompanions[index][field] = value;
        setCompanions(updatedCompanions);
    };

    return (
        <div className="container my-4">
            <h2 className="mb-3">💍 Confirmar Asistencia</h2>
            <form className="p-4 border rounded bg-light">
                {/* Nombre */}
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" required />
                </div>

                {/* Primer Apellido */}
                <div className="mb-3">
                    <label className="form-label">Primer Apellido</label>
                    <input type="text" className="form-control" required />
                </div>

                {/* Segundo Apellido */}
                <div className="mb-3">
                    <label className="form-label">Segundo Apellido</label>
                    <input type="text" className="form-control" required />
                </div>

                {/* Información Extra */}
                <div className="mb-3">
                    <label className="form-label">Información Extra</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>

                {/* Alergias */}
                <div className="mb-3">
                    <label className="form-label">Alergias</label>
                    <input type="text" className="form-control" />
                </div>

                {/* Tipo de Alimentación */}
                <div className="mb-3">
                    <label className="form-label">Tipo de Alimentación</label>
                    <select className="form-select">
                        <option value="">Selecciona...</option>
                        <option value="omnivore">Omnívoro</option>
                        <option value="vegetarian">Vegetariano</option>
                        <option value="vegan">Vegano</option>
                    </select>
                </div>

                {/* ¿Llevará Acompañante? */}
                <div className="mb-3">
                    <label className="form-label">¿Llevarás acompañante?</label>
                    <div>
                        <input
                            type="radio"
                            name="companion"
                            value="yes"
                            className="form-check-input me-2"
                            onChange={handleCompanionChange}
                        />
                        <label className="form-check-label me-3">Sí</label>

                        <input
                            type="radio"
                            name="companion"
                            value="no"
                            className="form-check-input me-2"
                            onChange={handleCompanionChange}
                            defaultChecked
                        />
                        <label className="form-check-label">No</label>
                    </div>
                </div>

                {/* Número de Acompañantes */}
                {hasCompanion && (
                    <div className="mb-3">
                        <label className="form-label">¿Cuántos acompañantes?</label>
                        <input
                            type="number"
                            className="form-control"
                            min="1"
                            max="5"
                            value={companionCount}
                            onChange={handleCompanionCountChange}
                        />
                    </div>
                )}

                {/* Formularios de Acompañantes */}
                {companions.length > 0 && (
                    <div className="mb-3">
                        <h4 className="mt-3">Datos de los Acompañantes</h4>
                        {companions.map((_, index) => (
                            <div key={index} className="p-3 border rounded bg-white my-2">
                                <h5>Acompañante {index + 1}</h5>
                                <div className="mb-2">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => handleCompanionInputChange(index, "name", e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Primer Apellido</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => handleCompanionInputChange(index, "firstSurname", e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Segundo Apellido</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => handleCompanionInputChange(index, "secondSurname", e.target.value)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Botón de Enviar */}
                <button type="submit" className="btn btn-primary w-100">
                    Enviar Confirmación
                </button>
            </form>
        </div>
    );
};

export default WeddingForm;
