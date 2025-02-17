import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const AttendantForm = ({ weddingData }) => {
    // Estado para los datos del formulario principal
    const [formData, setFormData] = useState({
        name: "",
        surnames: "",
        extraInformation: "",
        allergy: "",
        alimentation: "",
    });

    // Estado para acompañantes
    const [hasAttendant, setHasAttendant] = useState(false);
    const [numAttendants, setNumAttendants] = useState("");
    const [attendants, setAttendants] = useState([]);

    // Maneja los cambios en los campos del formulario principal
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Maneja el cambio de número de acompañantes
    const handleNumAttendantsChange = (e) => {
        const value = e.target.value;
        console.log(value)
        // if (value === "" || isNaN(value) || parseInt(value, 10) < 1) {
        //     setNumAttendants("");
        //     setAttendants([]);
        //     return;
        // }

        //const count = parseInt(value, 10);
        setNumAttendants(value);
        setAttendants(Array.from({ length: value }, () => ({ name: "", surname: "", age: "" })));
    };

    // Maneja los cambios en los datos de los acompañantes
    const handleAttendantChange = (index, field, value) => {
        const updatedAttendants = [...attendants];
        updatedAttendants[index][field] = value;
        setAttendants(updatedAttendants);
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            weddingInfo: weddingData,
            mainGuest: formData,
            attendees: attendants,
        };

        try {
            const response = await axios.post("/api/confirm-attendance", dataToSend);
            console.log("Confirmación enviada:", response.data);
        } catch (error) {
            console.error("Error enviando la confirmación:", error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="border p-4 mb-4 shadow rounded" style={{ backgroundColor: '#fff8e6' }}>
            <h2 className="text-center text-primary mb-4">Confirma tu asistencia</h2>

            {/* Datos principales */}
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Ingresa tu nombre"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="surnames">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                    type="text"
                    name="surnames"
                    value={formData.surnames}
                    onChange={handleInputChange}
                    required
                    placeholder="Ingresa tus apellidos"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="extraInformation">
                <Form.Label>Información Extra</Form.Label>
                <Form.Control
                    as="textarea"
                    name="extraInformation"
                    value={formData.extraInformation}
                    onChange={handleInputChange}
                    placeholder="Escribe cualquier información adicional"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="allergy">
                <Form.Label>Alergias</Form.Label>
                <Form.Control
                    as="textarea"
                    name="allergy"
                    value={formData.allergy}
                    onChange={handleInputChange}
                    placeholder="Especifica tus alergias (si tienes)"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="alimentation">
                <Form.Label>Alimentación</Form.Label>
                <Form.Select
                    name="alimentation"
                    value={formData.alimentation}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Selecciona una opción</option>
                    <option value="Omnívoro">Omnívoro</option>
                    <option value="Vegetariano">Vegetariano</option>
                    <option value="Vegano">Vegano</option>
                    <option value="Otro">Otro</option>
                </Form.Select>
            </Form.Group>

            {/* Opción de llevar acompañante */}
            <Form.Group className="mb-3">
                <Form.Label>¿Llevarás acompañante?</Form.Label>
                <div>
                    <Form.Check
                        inline
                        type="radio"
                        label="Sí"
                        name="hasAttendant"
                        checked={hasAttendant}
                        onChange={() => setHasAttendant(true)}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="No"
                        name="hasAttendant"
                        checked={!hasAttendant}
                        onChange={() => {
                            setHasAttendant(false);
                            setNumAttendants("");
                            setAttendants([]);
                        }}
                    />
                </div>
            </Form.Group>

            {/* Número de acompañantes */}
            {hasAttendant && (
                <Form.Group className="mb-3">
                    <Form.Label>Número de acompañantes</Form.Label>
                    <Form.Control
                        type="number"
                        min="1"
                        value={numAttendants}
                        onChange={handleNumAttendantsChange}
                    />
                </Form.Group>
            )}

            {/* Datos de los acompañantes */}
            {attendants.map((attendant, index) => (
                <Row key={index} className="mb-2">
                    <Form.Label><strong>Acompañante {index + 1}</strong></Form.Label>

                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            value={attendant.name}
                            onChange={(e) => handleAttendantChange(index, "name", e.target.value)}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Apellidos"
                            value={attendant.surname}
                            onChange={(e) => handleAttendantChange(index, "surname", e.target.value)}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="number"
                            placeholder="Edad"
                            min="0"
                            value={attendant.age}
                            onChange={(e) => handleAttendantChange(index, "age", e.target.value)}
                            required
                        />
                    </Col>
                </Row>
            ))}

            {/* Botón de envío */}
            <Button type="submit" className="mt-3 btn btn-primary">Enviar</Button>
        </Form>
    );
};

export default AttendantForm;
