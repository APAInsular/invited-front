import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from '../config/axiosConfig';
import { vapor } from 'laravel-vapor';

export default function MakeInvitationForm() {
    const navigate = useNavigate();
    const { templateName } = useParams();
    const formattedTemplateName = templateName.replace(/^Plantilla/, "Plantilla ");

    const [previewImage, setPreviewImage] = useState();
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);

    const [userInfo, setUserInfo] = useState({
        novioName: "",
        noviaName: ""
    });

    const [formData, setFormData] = useState({
        weddingDate: "",
        template: formattedTemplateName,
        foodType: "Sin Preferencias",
        guestCount: "",
        customMessage: "",
        dressCode: "",
        musicUrl: "",
        musicTitle: "",
        user_id: "",
        groomDescription: "",
        brideDescription: "",
        location: {
            city: "",
            country: ""
        },
        coverImageUrl: "", // Ahora guardaremos la URL de la imagen
        galleryImageUrls: [] // URLs de las imágenes de la galería
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem('auth_token');
                if (!token) return;

                const response = await apiClient.get('/api/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setUser(response.data);
                setFormData(prevData => ({ ...prevData, "user_id": response.data.id }));

                setUserInfo({
                    novioName: `${response.data.name} ${response.data.firstSurname}`,
                    noviaName: `${response.data.partner.name} ${response.data.partner.firstSurname}`,
                });

            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            }
        };

        fetchUser();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleChangeLocation = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            location: {
                ...prevData.location,
                [name]: value
            }
        }));
    };

    const addEvent = () => {
        setEvents([...events, { name: "", time: "", location: { city: "", country: "" }, description: "" }]);
    };

    const updateEvent = (index, field, value) => {
        const updatedEvents = [...events];
        if (field === "location.city" || field === "location.country") {
            const [locationField, subField] = field.split('.');
            updatedEvents[index][locationField][subField] = value;
        } else {
            updatedEvents[index][field] = value;
        }
        setEvents(updatedEvents);
    };

    const removeEvent = (index) => {
        setEvents(events.filter((_, i) => i !== index));
    };

    const uploadFileToVapor = async (file) => {
        try {
            setIsUploading(true);
            setUploadProgress(0);

            console.log(vapor)

            const response = await vapor.store(file, {
                progress: progress => {
                    setUploadProgress(Math.round(progress * 100));
                },
            });

            return response.url;
        } catch (error) {
            console.error("Error uploading file:", error);
            throw error;
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem('auth_token');

        try {
            // Preparar los datos para enviar
            const finalData = {
                ...formData,
                events
            };

            console.log(finalData)

            const response = await apiClient.post("/api/weddings", finalData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data)

            navigate("/thankyou");
        } catch (error) {
            console.error("Error al crear la invitación:", error);
        }
    };

    const handleCoupleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        try {
            const imageUrl = await uploadFileToVapor(file);
            setFormData(prevFormData => ({
                ...prevFormData,
                coverImageUrl: imageUrl
            }));

            // Mostrar previsualización
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        } catch (error) {
            console.error("Error al subir la imagen:", error);
        }
    };

    const handleGalleryUpload = async (event) => {
        const files = Array.from(event.target.files);
        if (!files.length) return;

        try {
            const uploadPromises = files.map(file => uploadFileToVapor(file));
            const urls = await Promise.all(uploadPromises);

            setFormData(prevFormData => ({
                ...prevFormData,
                galleryImageUrls: [...prevFormData.galleryImageUrls, ...urls]
            }));
        } catch (error) {
            console.error("Error al subir las imágenes:", error);
        }
    };

    return (
        <Container className="mt-5" style={{ backgroundColor: "#F9E9E8", padding: "50px", textAlign: "center" }}>
            <h2 className="m-0" style={{ fontSize: "2rem", fontWeight: "bold" }}>Crea tu Invitación</h2>
            <p className="mb-2 m-0 fw-lighter" style={{ fontSize: "0.8rem" }}>Llena el formulario y genera tu invitación en minutos.</p>
            <p style={{ marginTop: "1px", fontSize: "12px" }}>(*) campos obligatorios</p>
            <Form onSubmit={handleSubmit} style={{ maxWidth: "800px", margin: "0 auto", marginTop: "20px" }}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Nombre Pareja*" name="groomName" value={userInfo.novioName} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Nombre Pareja*" name="brideName" value={userInfo.noviaName} required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de la boda*</Form.Label>
                            <Form.Control type="date" name="weddingDate" value={formData.weddingDate} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Plantilla a utilizar*</Form.Label>
                            <Form.Select name="template" value={formData.template} onChange={handleChange} required>
                                <option value="Plantilla Romantica">Plantilla Romántica</option>
                                <option value="Plantilla Simple" disabled>Plantilla Simple</option>
                                <option value="Plantilla Dramatica" disabled>Plantilla Dramática</option>
                                <option value="Plantilla Dulce" disabled>Plantilla Dulce</option>
                                <option value="Plantilla Oscura" disabled>Plantilla Oscura</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Localización de la Boda */}
                <h4 className="m-0">Localización de la Boda</h4>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Ciudad*</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad" name="city" value={formData.location.city} onChange={handleChangeLocation} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Localizacion*</Form.Label>
                            <Form.Control type="text" placeholder="Localizacion" name="country" value={formData.location.country} onChange={handleChangeLocation} required />
                        </Form.Group>
                    </Col>
                </Row>


                <h4 className="m-0">Itinerario de la Celebración</h4>
                <p className="fw-lighter mb-2" style={{ fontSize: "0.8rem" }}>Añade todos los hitos de tu celebración</p>
                {events.map((event, index) => (
                    <Row key={index} className="mb-3">
                        <Col>
                            <Form.Control type="text" placeholder="Nombre*" value={event.name} onChange={(e) => updateEvent(index, "name", e.target.value)} required />
                        </Col>
                        <Col>
                            <Form.Control type="time" value={event.time} onChange={(e) => updateEvent(index, "time", e.target.value)} required />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Ciudad" value={event.location.city} onChange={(e) => updateEvent(index, "location.city", e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Localización" value={event.location.country} onChange={(e) => updateEvent(index, "location.country", e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Descripción" value={event.description} onChange={(e) => updateEvent(index, "description", e.target.value)} />
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={() => removeEvent(index)}>Eliminar</Button>
                        </Col>
                    </Row>
                ))}
                <Button variant="secondary" onClick={addEvent}>Añadir Evento</Button>

                <Row className="mt-3">
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Tipo de alimentacion*</Form.Label>
                            <Form.Select name="foodType" value={formData.foodType} onChange={handleChange} required>
                                <option value="Sin Preferencias">Sin Preferencias</option>
                                <option value="Vegetariana">Vegetariana</option>
                                <option value="Vegana">Vegana</option>
                                <option value="Mixta">Mixta</option>
                                <option value="Otra">Otra</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Numero de invitados*</Form.Label>
                            <Form.Control type="number" placeholder="Número de Invitados" name="guestCount" value={formData.guestCount} onChange={handleChange} required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Código de vestimenta*</Form.Label>
                            <Form.Control type="text" placeholder="Código de vestimenta" name="dressCode" value={formData.dressCode} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Mensaje para los invitados*</Form.Label>
                            <Form.Control type="text" placeholder="Mensaje personal" name="customMessage" value={formData.customMessage} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Música */}
                <h4 className="m-0">Música</h4>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Titulo de la cancion*</Form.Label>
                            <Form.Control type="text" placeholder="Título de la canción" name="musicTitle" value={formData.musicTitle} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Enlace de la musica (YouTube)*</Form.Label>
                            <Form.Control type="text" placeholder="Enlace a la música" name="musicUrl" value={formData.musicUrl} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h4 className="m-0">Imagen de la Pareja*</h4>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleCoupleImageUpload}
                                required
                                disabled={isUploading}
                            />
                            {previewImage && (
                                <div className="mt-2">
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        style={{ maxWidth: "200px", maxHeight: "200px" }}
                                    />
                                </div>
                            )}
                        </Form.Group>
                    </Col>
                    <Col>
                        <h4 className="m-0">Galería de Imágenes</h4>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleGalleryUpload}
                                disabled={isUploading}
                            />
                            {formData.galleryImageUrls.length > 0 && (
                                <div className="mt-2">
                                    <p>Imágenes subidas: {formData.galleryImageUrls.length}</p>
                                </div>
                            )}
                        </Form.Group>
                    </Col>
                </Row>

                <Button type="submit" disabled={isUploading}>
                    {isUploading ? 'Subiendo imágenes...' : 'Enviar'}
                </Button>
            </Form>
        </Container>
    );
}
