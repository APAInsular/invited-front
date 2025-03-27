import { useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import apiClient from '../config/axiosConfig';
import { redirect } from "react-router-dom";

export default function UserRegistrationForm() {
    const navigate = useNavigate();

    const defaultStyle = {
        padding: "5px 10px",
        margin: "0px 8px",
        border: "2px solid #F19292",
        borderRadius: "5px",
        color: "#2F2F2F",
        textDecoration: "none",
        transition: "all 0.3s ease-in-out",
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (!window.grecaptcha) {
            alert("reCAPTCHA no está cargado correctamente");
            return;
        }

        const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY; // O import.meta.env.VITE_RECAPTCHA_SITE_KEY si usas Vite
        console.log("Usando site key:", siteKey); // 👈 Verifica en consola

        const token = await window.grecaptcha.execute(siteKey, { action: "submit" });
        console.log("Token generado:", token); // 👈 Verifica si se genera un token

        if (!token) {
            alert("Error al obtener el token de reCAPTCHA");
            return;
        }

        try {
            const finalData = { data, token }

            console.log(finalData)
            // Realizar la solicitud de registro con axios
            const response = await registerUser(finalData)

            // Supongamos que el backend retorna un mensaje o un token
            console.log('Registro exitoso', response.data);

            // Si se desea redirigir o hacer algo más con la respuesta, se puede hacerlo aquí
            // Por ejemplo, redirigir a otra página o mostrar un mensaje de éxito
            navigate(`/`)
            //alert('Registro exitoso');



        } catch (error) {
            // Manejo de errores de la solicitud
            console.error('Error en el registro:', error.response?.data || error.message);
            alert('Hubo un error al registrar el usuario. Intenta nuevamente.');
        }
    };

    const registerUser = async (formData) => {
        try {
            // Realizar la solicitud de registro
            const response = await apiClient.post('/api/register', formData);

            return response;
        } catch (error) {
            console.error('Error en el registro:', error.response?.data || error.message);
            throw error;
        }
    };

    return (
        <>
            <div className="mt-5" style={{ backgroundColor: "#F9E9E8", padding: "50px", textAlign: "center" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Crea tu cuenta</h2>
                <p style={{ marginTop: "10px", marginBottom: "3px" }}>Crea tu cuenta y disfruta de todos los beneficias de usar nuestra web</p>
                <p style={{ marginTop: "1px", fontSize: "12px" }}>(*) campos obligatorios</p>
                <Form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "800px", margin: "0 auto", marginTop: "20px" }}>
                    <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Nombre*" {...register("name", { required: "El nombre es obligatorio" })} style={defaultStyle} />
                                {errors.Name && <p className="text-danger">{errors.Name.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Primer Apellido*" {...register("firstSurname", { required: "El primer apellido es obligatorio" })} style={defaultStyle} />
                                {errors.First_Surname && <p className="text-danger">{errors.First_Surname.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Segundo Apellido" {...register("secondSurname", { required: "El segundo apellido es obligatorio" })} style={defaultStyle} />
                                {errors.Second_Surname && <p className="text-danger">{errors.Second_Surname.message}</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Nombre Pareja*" {...register("partnerName", { required: "El nombre es obligatorio" })} style={defaultStyle} />
                                {errors.Name && <p className="text-danger">{errors.Name.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Primer Apellido Pareja*" {...register("partnerFirstSurname", { required: "El primer apellido es obligatorio" })} style={defaultStyle} />
                                {errors.First_Surname && <p className="text-danger">{errors.First_Surname.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Segundo Apellido Pareja" {...register("partnerSecondSurname", { required: "El segundo apellido es obligatorio" })} style={defaultStyle} />
                                {errors.Second_Surname && <p className="text-danger">{errors.Second_Surname.message}</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control type="tel" placeholder="Teléfono*" {...register("phone", { required: "El teléfono es obligatorio" })} style={defaultStyle} />
                                {errors.Phone && <p className="text-danger">{errors.Phone.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Correo Electrónico*" {...register("email", { required: "El correo electrónico es obligatorio" })} style={defaultStyle} />
                                {errors.Email && <p className="text-danger">{errors.Email.message}</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Contraseña*" {...register("password", { required: "La contraseña es obligatoria" })} style={defaultStyle} />
                                {errors.password && <p className="text-danger">{errors.password.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Confirmar Contraseña*" {...register("password_confirmation", { required: "Debes confirmar la contraseña" })} style={defaultStyle} />
                                {errors.password_confirmation && <p className="text-danger">{errors.password_confirmation.message}</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to={"/login"} style={{ fontSize: "12px" }}>Ya tengo una cuenta</Link>
                        </Col>
                    </Row>
                    <Button type="submit" variant="danger" className="mt-3" style={{ ...defaultStyle, backgroundColor: "#F19292", color: "white" }}>Registrar</Button>
                </Form>

            </div>
            <Footer></Footer>
        </>
    );
}
