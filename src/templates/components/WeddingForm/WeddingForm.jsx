import { useState } from "react";
import apiClient from "../../../config/axiosConfig";
import DEFAULT from "./WeddingForm.module.css";

const WeddingForm = ({ weddingId, text, fields, styles = DEFAULT }) => {
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
    wedding_id: weddingId,
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
    setAttendants(
      Array.from({ length: count }, () => ({
        name: "",
        firstSurname: "",
        secondSurname: "",
        age: "",
      }))
    );
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

    const token = await window.grecaptcha.execute(siteKey, {
      action: "submit",
    });

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
    <div className="container my-4">
      <h2 className={`mb-3 ${styles.text}`}>{text.title}</h2>
      <p style={{ marginTop: "1px", fontSize: "12px" }}>{text.requiredNotes}</p>
      <form className={`p-4 border rounded ${styles.formContainer}`} onSubmit={handleSendForm}>
        <div className="mb-3">
          <label className={styles.formLabel}>{fields.name}</label>
          <input
            type="text"
            className={styles.customInput}
            name="name"
            value={formGuest.name}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className={styles.formLabel}>{fields.firstSurname}</label>
          <input
            type="text"
            className={styles.customInput}
            name="firstSurname"
            value={formGuest.firstSurname}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className={styles.formLabel}>{fields.secondSurname}</label>
          <input
            type="text"
            className={styles.customInput}
            name="secondSurname"
            value={formGuest.secondSurname}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className={styles.formLabel}>{fields.extraInformation}</label>
          <input
            type="text"
            className={styles.customInput}
            name="extraInformation"
            value={formGuest.extraInformation}
            onChange={handleFormChange}
          />
        </div>
        <div className="mb-3">
          <label className={styles.formLabel}>{fields.allergy}</label>
          <input
            type="text"
            className={styles.customInput}
            name="allergy"
            value={formGuest.allergy}
            onChange={handleFormChange}
          />
        </div>
        <div className="mb-3">
          <label className={styles.formLabel}>{fields.feedingLabel}</label>
          <select
            className={styles.customInput}
            name="feeding"
            value={formGuest.feeding}
            onChange={handleFormChange}
          >
            <option value="">{fields.feedinOption1}</option>
            <option value="Sin preferencias">{fields.feedingOption2}</option>
            <option value="Vegetariana">{fields.feedingOption3}</option>
            <option value="Vegana">{fields.feedingOption4}</option>
          </select>
        </div>

        {weddingId !== 9 && (
          <div className="mb-3">
            <label className={styles.formLabel}>{fields.companionQuestion}</label>
            <div className="d-flex gap-3 align-items-center mt-2">
              <div>
                <input
                  type="radio"
                  name="companion"
                  value="yes"
                  className="form-check-input me-1"
                  onChange={handleCompanionChange}
                />
                <label className={`form-check-label ${styles.formLabel}`}>{fields.answerYes}</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="companion"
                  value="no"
                  className="form-check-input me-1"
                  onChange={handleCompanionChange}
                  defaultChecked
                />
                <label className={`form-check-label ${styles.formLabel}`}>{fields.answerNo}</label>
              </div>
            </div>
          </div>
        )}

        {hasCompanion && (
          <div className="mb-3">
            <label className={styles.formLabel}>{fields.companionCount}</label>
            <input
              type="number"
              className={styles.customInput}
              min="1"
              max="5"
              value={companionCount}
              onChange={handleCompanionCountChange}
            />
          </div>
        )}

        {attendants.length > 0 && (
          <div className="mb-3">
            <h4 className="mt-3">{fields.attendantTitle}</h4>
            {attendants.map((_, index) => (
              <div key={index} className="p-3 mb-2 border rounded bg-white">
                <h5 className="text-primary">Acompañante {index + 1}</h5>
                <div className="mb-2">
                  <label className={styles.formLabel}>{fields.attendantField1}</label>
                  <input
                    type="text"
                    className={styles.customInput}
                    onChange={(e) =>
                      handleCompanionInputChange(index, "name", e.target.value)
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className={styles.formLabel}>{fields.attendantField2}</label>
                  <input
                    type="text"
                    className={styles.customInput}
                    onChange={(e) =>
                      handleCompanionInputChange(
                        index,
                        "firstSurname",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className={styles.formLabel}>{fields.attendantField3}</label>
                  <input
                    type="text"
                    className={styles.customInput}
                    onChange={(e) =>
                      handleCompanionInputChange(
                        index,
                        "secondSurname",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="mb-2">
                  <label className={styles.formLabel}>{fields.attendantField4}</label>
                  <input
                    type="text"
                    className={styles.customInput}
                    onChange={(e) =>
                      handleCompanionInputChange(index, "age", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <button type="submit" className={`btn w-100 ${styles.submitButton}`}>
          {text.submitButton}
        </button>
      </form>
    </div>
  );
};

export default WeddingForm;
