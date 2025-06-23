import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiClient from '../config/axiosConfig';
import { Link, useNavigate } from 'react-router-dom';
import '../templates/styles/LandingPage.css'
import Footer from '../components/Footer';
import usePageTranslation from '../hooks/usePageTranslation';

const LandingPage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const { t, loadingTranslation } = usePageTranslation('landingPage');

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Manejar envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

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
            const finalData = { formData, token }
            console.log(finalData)
            await apiClient.post("/api/contact", finalData);
            setMessage("Mensaje enviado con éxito.");
        } catch (error) {
            setMessage("Hubo un error al enviar el mensaje.");
            console.error(error);
        }

        setLoading(false);
    };

    useEffect(() => {
        // Llamamos a la API para obtener el usuario autenticado
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem('auth_token');

                if (!token) {
                    // Si no hay token, no intentamos obtener el usuario
                    console.log("No hay usuario autenticado.");
                    return;
                }

                const response = await apiClient.get('/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(response.data)

                console.log('Usuario:', response.data);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log("Usuario no autorizado. Redirigiendo al login...");
                    // Aquí puedes redirigir al login o mostrar un mensaje al usuario
                } else {
                    console.error("Error al obtener el usuario:", error);
                }
            }
        };
        fetchUser();  // Solo llamamos a la función que obtiene los datos
    }, []);

    const colStyle = {
        backgroundColor: "#F9E9E8",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        margin: "10px",
        cursor: "pointer",
        textAlign: "center"
    };

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: t('faq.question1'),
            answer: t('faq.answer1'),
        },
        {
            question: t('faq.question2'),
            answer: t('faq.answer2'),
        },
        {
            question: t('faq.question3'),
            answer: t('faq.answer3'),
        },
        {
            question: t('faq.question4'),
            answer: t('faq.answer4'),
        },
    ];

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ backgroundColor: "#FAF9F8", color: "#2F2F2F", minHeight: "100vh" }}>
            <>
                {/* Metadatos ocultos para SEO */}
                <div itemScope itemType="https://schema.org/ImageObject" style={{ display: 'none' }}>
                    <img
                        src="/public/Invited.jpg"
                        alt="Invited.es: invitaciones de boda con anillos de matrimonio y tulipanes"
                        itemProp="image"
                    />
                    <meta itemProp="name" content="Invitaciones de boda digitales con Invited.es" />
                    <meta itemProp="author" content="Invited.es" />
                    <figcaption itemProp="description">
                        Fotografía que muestra invitaciones de boda tradicionales, anillos de matrimonio y tulipanes,
                        representando la transición hacia invitaciones digitales elegantes y personalizadas
                        de Invited.es para bodas y eventos.
                    </figcaption>
                </div>

                {/* Sección Hero con background-image */}
                <section
                    id="inicio"
                    className="hero"
                    style={{
                        background: "url('/Invited.jpg') center/cover no-repeat",
                        position: 'relative'
                    }}
                >
                    <div className="hero-overlay">
                        <div className="container hero-content">
                            <h1>{t('title')}</h1>
                            <p>{t('subtitle')}</p>
                            {user ? (
                                <Link
                                    to={`/${user.name}&${user.partner.name}/invitation/plantilla/form`}
                                    className="btn btn-primary"
                                >
                                    {t('titleButton')}
                                </Link>
                            ) : (
                                <Link to="/login" className="btn btn-primary">
                                    {t('titleButton')}
                                </Link>
                            )}
                        </div>
                    </div>
                </section>
            </>
            {/* BENEFICIOS / VENTAJAS */}
            <section id="beneficios" className="beneficios">
                <div className="container">
                    <h2>{t('why.title')}</h2>
                    <div className="beneficios-grid">
                        <div className="beneficio-item">
                            <h3>{t('why.cardTitle1')}</h3>
                            <p>{t('why.cardText1')}</p>
                        </div>
                        <div className="beneficio-item">
                            <h3>{t('why.cardTitle2')}</h3>
                            <p>{t('why.cardText2')}</p>
                        </div>
                        <div className="beneficio-item">
                            <h3>{t('why.cardTitle3')}</h3>
                            <p>{t('why.cardText3')}</p>
                        </div>
                        <div className="beneficio-item">
                            <h3>{t('why.cardTitle4')}</h3>
                            <p>{t('why.cardText4')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold text-danger-emphasis mb-3">{t('invitation.title')}</h2>
                        <p className="lead text-muted">{t('invitation.subtitle')}</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm hover-shadow">
                                <div className="p-2 bg-pink-pastel">
                                    <div className="phone-mockup">
                                        <div className="phone-camera"></div>
                                        <div className="phone-screen d-flex align-items-center justify-content-center w-100">
                                            <img src="/images/Plantilla_0.png"
                                                alt={t('invitation.cardTitle1')}
                                                className="img-fluid w-auto"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="h4 card-title text-danger-emphasis">{t('invitation.cardTitle1')}</h3>
                                    <p className="card-text text-muted">{t('invitation.cardText1')}</p>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.invited.es/invitacion/javier-sandra/70" className="btn bg-pink-pastel text-dark border-0 w-100">
                                        {t('invitation.button')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm hover-shadow">
                                <div className="p-2 bg-pink-pastel">
                                    <div className="phone-mockup">
                                        <div className="phone-camera"></div>
                                        <div className="phone-screen d-flex align-items-center justify-content-center w-100">
                                            <img src='/images/Plantilla_1.png'
                                                alt={t('invitation.cardTitle2')}
                                                className="img-fluid w-auto"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="h4 card-title text-danger-emphasis">{t('invitation.cardTitle2')}</h3>
                                    <p className="card-text text-muted">{t('invitation.cardText2')}</p>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.invited.es/invitacion/javier-sandra/71" className="btn bg-pink-pastel text-dark border-0 w-100">
                                        {t('invitation.button')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm hover-shadow">
                                <div className="p-2 bg-pink-pastel">
                                    <div className="phone-mockup">
                                        <div className="phone-camera"></div>
                                        <div className="phone-screen d-flex align-items-center justify-content-center w-100">
                                            <img src="/images/Plantilla_2.png"
                                                alt={t('invitation.cardTitle3')}
                                                className="img-fluid w-auto"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="h4 card-title text-danger-emphasis">{t('invitation.cardTitle3')}</h3>
                                    <p className="card-text text-muted">{t('invitation.cardText3')}</p>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.invited.es/invitacion/luis-lucas/81" className="btn bg-pink-pastel text-dark border-0 w-100">
                                        {t('invitation.button')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRECIO */}
            <section id="precio" className="precio">
                <div className="container">
                    <h2>{t('paySection.title')}</h2>
                    <div className="precio-card">
                        <div>
                            <h3>{t('paySection.title')}</h3>
                        </div>
                        <ul>
                            <li>{t('paySection.text1')}</li>
                            <li>{t('paySection.text2')}</li>
                            <li>{t('paySection.text3')}</li>
                            <li>{t('paySection.text4')}</li>
                        </ul>
                        {user ? (
                            <Link
                                to={`/${user.name}&${user.partner.name}/invitation/plantilla/form`}
                                className="btn btn-primary"
                            >
                                {t('paySection.button')}
                            </Link>
                        ) : (
                            <Link to="/login" className="btn btn-primary">
                                {t('paySection.button')}
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            <section id="como-funciona" className="como-funciona">
                <div className="container">
                    <h2>{t('howItWorks.title')}</h2>
                    <div className="pasos">
                        <div className="paso">
                            <span>1</span>
                            <h3>{t('howItWorks.cardTitle1')}</h3>
                            <p>{t('howItWorks.cardText1')}</p>
                        </div>
                        <div className="paso">
                            <span>2</span>
                            <h3>{t('howItWorks.cardTitle2')}</h3>
                            <p>{t('howItWorks.cardText2')}</p>
                        </div>
                        <div className="paso">
                            <span>3</span>
                            <h3>{t('howItWorks.cardTitle3')}</h3>
                            <p>{t('howItWorks.cardText3')}</p>
                        </div>
                        <div className="paso">
                            <span>4</span>
                            <h3>{t('howItWorks.cardTitle4')}</h3>
                            <p>{t('howItWorks.cardText4')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="faq">
                <div className="container">
                    <h2>{t('faq.title')}</h2>
                    <div className="faq-accordion">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openIndex === index ? "open" : ""}`}
                            >
                                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                    {faq.question}
                                </button>
                                <div className="faq-answer" style={{ display: openIndex === index ? "block" : "none" }}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="cta" className="cta-section">
                <div className="container">
                    <h2>{t('startToday.title')}</h2>
                    <p>{t('startToday.text')}</p>
                </div>
            </section>

            <section id="contacto" className="contacto">
                <div className="container">
                    <h2>{t('contactForm.title')}</h2>
                    <p>{t('contactForm.subtitle')}</p>
                    <form onSubmit={handleSubmit} className="form-contacto">
                        <label htmlFor="name">{t('contactForm.name')}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">{t('contactForm.email')}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">{t('contactForm.message')}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? t('contactForm.sending') : t('contactForm.button')}
                        </button>

                        {message && <p>{message}</p>}
                    </form>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default LandingPage;
