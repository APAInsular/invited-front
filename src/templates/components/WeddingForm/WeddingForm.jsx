import { useState } from "react";
import apiClient from "../../../config/axiosConfig";

const WeddingForm = ({ weddingId, text, fields }) => {
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

        const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY; // O import.meta.env.VITE_RECAPTCHA_SITE_KEY si usas Vite

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

    console.log(text)

    return (
        <div className="container my-4">
            <h2 className="mb-3">{text.title}</h2>
            <p style={{ marginTop: "1px", fontSize: "12px" }}>{text.requiredNotes}</p>
            <form className="p-4 border rounded bg-light" onSubmit={handleSendForm}>
                <div className="mb-3">
                    <label className="form-label">{fields.name}</label>
                    <input type="text" className="form-control" name="name" value={formGuest.name} onChange={handleFormChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">{fields.firstSurname}</label>
                    <input type="text" className="form-control" name="firstSurname" value={formGuest.firstSurname} onChange={handleFormChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">{fields.secondSurname}</label>
                    <input type="text" className="form-control" name="secondSurname" value={formGuest.secondSurname} onChange={handleFormChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">{fields.extraInformation}</label>
                    <input type="text" className="form-control" name="extraInformation" value={formGuest.extraInformation} onChange={handleFormChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">{fields.allergy}</label>
                    <input type="text" className="form-control" name="allergy" value={formGuest.allergy} onChange={handleFormChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">{fields.feedingLabel}</label>
                    <select className="form-control" name="feeding" value={formGuest.feeding} onChange={handleFormChange}>
                        <option value="">{fields.feedinOption1}</option>
                        <option value="Sin preferencias">{fields.feedingOption2}</option>
                        <option value="Vegetariana">{fields.feedingOption3}</option>
                        <option value="Vegana">{fields.feedingOption4}</option>
                    </select>
                </div>

                {weddingId !== 9 && (
                    <div className="mb-3">
                        <label className="form-label">{fields.companionQuestion}</label>
                        <div className="d-flex gap-3 align-items-center mt-2">
                            <div>
                                <input type="radio" name="companion" value="yes" className="form-check-input me-1" onChange={handleCompanionChange} />
                                <label className="form-check-label">{fields.answerYes}</label>
                            </div>
                            <div>
                                <input type="radio" name="companion" value="no" className="form-check-input me-1" onChange={handleCompanionChange} defaultChecked />
                                <label className="form-check-label">{fields.answerNo}</label>
                            </div>
                        </div>
                    </div>
                )}

                {hasCompanion && (
                    <div className="mb-3">
                        <label className="form-label">{fields.companionCount}</label>
                        <input type="number" className="form-control" min="1" max="5" value={companionCount} onChange={handleCompanionCountChange} />
                    </div>
                )}

                {attendants.length > 0 && (
                    <div className="mb-3">
                        <h4 className="mt-3">{fields.attendantTitle}</h4>
                        {attendants.map((_, index) => (
                            <div key={index} className="p-3 mb-2 border rounded bg-white">
                                <h5 className="text-primary">Acompañante {index + 1}</h5>
                                <div className="mb-2">
                                    <label className="form-label">{fields.attendantField1}</label>
                                    <input type="text" className="form-control" onChange={(e) => handleCompanionInputChange(index, "name", e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">{fields.attendantField2}</label>
                                    <input type="text" className="form-control" onChange={(e) => handleCompanionInputChange(index, "firstSurname", e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">{fields.attendantField3}</label>
                                    <input type="text" className="form-control" onChange={(e) => handleCompanionInputChange(index, "secondSurname", e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">{fields.attendantField4}</label>
                                    <input type="text" className="form-control" onChange={(e) => handleCompanionInputChange(index, "age", e.target.value)} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <button type="submit" className="btn btn-primary w-100">
                    {text.submitButton}
                </button>
            </form>
        </div>
    );
};

export default WeddingForm;
