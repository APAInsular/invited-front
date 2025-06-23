import { useForm } from "react-hook-form";
import { Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import { Eye, EyeOff } from "lucide-react";
import Swal from 'sweetalert2'

import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import apiClient from '../config/axiosConfig';
import { useState } from "react";
import usePageTranslation from "../hooks/usePageTranslation";

export default function UserRegistrationForm() {
    const { t, loadingTranslation } = usePageTranslation('registerPage');


    const navigate = useNavigate();
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formError, setFormError] = useState('');

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

        if (!acceptedTerms) {
            setFormError('Debes aceptar los términos y condiciones');
            return;
        }

        const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY; // O import.meta.env.VITE_RECAPTCHA_SITE_KEY si usas Vite

        const token = await window.grecaptcha.execute(siteKey, { action: "submit" });

        if (!token) {
            alert("Error al obtener el token de reCAPTCHA");
            return;
        }

        try {
            const finalData = { data, token }

            // Realizar la solicitud de registro con axios
            await registerUser(finalData)

            // Supongamos que el backend retorna un mensaje o un token

            // Si se desea redirigir o hacer algo más con la respuesta, se puede hacerlo aquí
            // Por ejemplo, redirigir a otra página o mostrar un mensaje de éxito
            navigate(`/`)
            //alert('Registro exitoso');



        } catch (error) {
            // Manejo de errores de la solicitud
            console.error('Error en el registro:', error.response?.data || error.message);

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
            });


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

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    return (
        <>
            <div className="mt-5" style={{ backgroundColor: "#F9E9E8", padding: "50px", textAlign: "center" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>{t('title')}</h2>
                <p style={{ marginTop: "10px", marginBottom: "3px" }}>{t('subtitle')}</p>
                <p style={{ marginTop: "1px", fontSize: "12px" }}>{t('note')}</p>
                <Form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "800px", margin: "0 auto", marginTop: "20px" }}>
                    <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder={t('fields.name')}
                                    {...register("name", { required: t('errors.name') })}
                                    style={defaultStyle}
                                />
                                {errors.name && <p className="text-danger">{errors.name.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder={t('fields.firstSurname')}
                                    {...register("firstSurname", { required: t('errors.firstSurname') })}
                                    style={defaultStyle}
                                />
                                {errors.firstSurname && <p className="text-danger">{errors.firstSurname.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder={t('fields.secondSurname')}
                                    {...register("secondSurname")}
                                    style={defaultStyle}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder={t('fields.partnerName')}
                                    {...register("partnerName", { required: t('errors.partnerName') })}
                                    style={defaultStyle}
                                />
                                {errors.partnerName && <p className="text-danger">{errors.partnerName.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder={t('fields.partnerFirstSurname')}
                                    {...register("partnerFirstSurname", { required: t('errors.partnerFirstSurname') })}
                                    style={defaultStyle}
                                />
                                {errors.partnerFirstSurname && <p className="text-danger">{errors.partnerFirstSurname.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder={t('fields.partnerSecondSurname')}
                                    {...register("partnerSecondSurname")}
                                    style={defaultStyle}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="tel"
                                    placeholder={t('fields.phone')}
                                    {...register("phone", { required: t('errors.phone') })}
                                    style={defaultStyle}
                                />
                                {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder={t('fields.email')}
                                    {...register("email", { required: t('errors.email') })}
                                    style={defaultStyle}
                                />
                                {errors.email && <p className="text-danger">{errors.email.message}</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <InputGroup>
                                    <Form.Control
                                        type={showPassword ? "text" : "password"}
                                        placeholder={t('fields.password')}
                                        {...register("password", { required: t('errors.password') })}
                                        style={defaultStyle}
                                    />
                                    <InputGroup.Text onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </InputGroup.Text>
                                </InputGroup>
                                {errors.password && <p className="text-danger">{errors.password.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <InputGroup>
                                    <Form.Control
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder={t('fields.confirmPassword')}
                                        {...register("password_confirmation", { required: t('errors.confirmPassword') })}
                                        style={defaultStyle}
                                    />
                                    <InputGroup.Text onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: "pointer" }}>
                                        {showConfirmPassword ? <EyeOff /> : <Eye />}
                                    </InputGroup.Text>
                                </InputGroup>
                                {errors.password_confirmation && <p className="text-danger">{errors.password_confirmation.message}</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to={"/login"} style={{ fontSize: "12px" }}>{t('loginRedirect')}</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="terms" className="mt-3 d-flex align-items-center">
                                <Form.Check
                                    type="checkbox"
                                    className="me-2"
                                    checked={acceptedTerms}
                                    onChange={() => setAcceptedTerms(!acceptedTerms)}
                                    required
                                />
                                <Form.Label className="m-0">
                                    {t('terms.label')} <a href="/politica-de-privacidad" target="_blank">{t('terms.link')}</a>
                                </Form.Label>
                            </Form.Group>
                            {formError && <p style={{ color: 'red' }}>{formError}</p>}
                        </Col>
                    </Row>

                    <Button type="submit" variant="danger" className="mt-3" style={{ ...defaultStyle, backgroundColor: "#F19292", color: "white" }}>
                        {t('submit')}
                    </Button>
                </Form>
            </div>
            <Footer></Footer>
        </>
    );
}
