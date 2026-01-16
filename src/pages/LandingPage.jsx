import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import apiClient from "../config/axiosConfig";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../templates/styles/LandingPage.css";
import Footer from "../components/Footer";
import usePageTranslation from "../hooks/usePageTranslation";
import InvitationCard from "../components/InvitationCard";
import { TemplateConfig } from "../constants";

// CONFIGURACIÓN CENTRALIZADA: Agregar las nuevas plantillas

const LandingPage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const { lang } = useParams();

    const { t, loadingTranslation } = usePageTranslation("landingPage");

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

        const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

        const token = await window.grecaptcha.execute(siteKey, {
            action: "submit",
        });

        if (!token) {
            alert("Error al obtener el token de reCAPTCHA");
            return;
        }

        try {
            const finalData = { formData, token };
            await apiClient.post("/api/contact", finalData);
            setMessage("Mensaje enviado con éxito.");
        } catch (error) {
            setMessage("Hubo un error al enviar el mensaje.");
            console.error(error);
        }

        setLoading(false);
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem("auth_token");

                if (!token) {
                    return;
                }

                const response = await apiClient.get("/api/user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(response.data);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log("Usuario no autorizado.");
                } else {
                    console.error("Error al obtener el usuario:", error);
                }
            }
        };
        fetchUser();
    }, []);

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: t("faq.question1"), answer: t("faq.answer1") },
        { question: t("faq.question2"), answer: t("faq.answer2") },
        { question: t("faq.question3"), answer: t("faq.answer3") },
        { question: t("faq.question4"), answer: t("faq.answer4") },
    ];

    const localizedLink = (path) => {
        return `/${lang}${path}`;
    };

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // FUNCIÓN REUTILIZABLE PARA LAS TARJETAS
    const renderInvitationCard = (item) => (
        <InvitationCard
            key={item.id}
            data={{
                img: item.img,
                title: t(`invitation.cardTitle${item.id}`),
                text: t(`invitation.cardText${item.id}`),
                link: item.link,
            }}
            buttonLabel={t("invitation.button")}
        />
    );

    return (
        <div
            style={{
                backgroundColor: "#FAF9F8",
                color: "#2F2F2F",
                minHeight: "100vh",
            }}
        >
            {/* Metadatos ocultos para SEO */}
            <div
                itemScope
                itemType="https://schema.org/ImageObject"
                style={{ display: "none" }}
            >
                <img src="/public/Invited.jpg" alt="Invited.es" itemProp="image" />
                <meta
                    itemProp="name"
                    content="Invitaciones de boda digitales con Invited.es"
                />
            </div>

            {/* Sección Hero */}
            <section
                id="inicio"
                className="hero"
                style={{
                    background: "url('/Invited.jpg') center/cover no-repeat",
                    position: "relative",
                }}
            >
                <div className="hero-overlay">
                    <div className="container hero-content">
                        <h1>{t("title")}</h1>
                        <p>{t("subtitle")}</p>
                        {user ? (
                            <Link
                                to={localizedLink(
                                    `/${user.name}&${user.partner.name}/invitation/plantilla/form`
                                )}
                                className="btn btn-primary"
                            >
                                {t("titleButton")}
                            </Link>
                        ) : (
                            <Link to={localizedLink("/login")} className="btn btn-primary">
                                {t("titleButton")}
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            {/* BENEFICIOS */}
            <section id="beneficios" className="beneficios">
                <div className="container">
                    <h2>{t("why.title")}</h2>
                    <div className="beneficios-grid">
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num} className="beneficio-item">
                                <h3>{t(`why.cardTitle${num}`)}</h3>
                                <p>{t(`why.cardText${num}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN INVITACIONES --- */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold text-danger-emphasis mb-3">
                            {t("invitation.title")}
                        </h2>
                        <p className="lead text-muted">{t("invitation.subtitle")}</p>
                    </div>
                    <div className="text-center mt-4 mb-5">
                        <Link
                            to={localizedLink("/gallery")}
                            className="btn btn-primary"
                        >
                            {t("invitation.seeMore")}
                        </Link>
                    </div>

                    <div className="position-relative">
                        {/* 1. CARRUSEL MÓVIL (Automático para todas las cards) */}
                        <div
                            id="carouselMobile"
                            className="carousel slide d-md-none"
                            data-bs-touch="true"
                        >
                            <div className="carousel-inner">
                                {TemplateConfig.map((item, index) => (
                                    <div
                                        key={`mob-${item.id}`}
                                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                                    >
                                        <div className="row justify-content-center">
                                            <div className="col-11">{renderInvitationCard(item)}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev custom-carousel-control"
                                type="button"
                                data-bs-target="#carouselMobile"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" />
                            </button>
                            <button
                                className="carousel-control-next custom-carousel-control"
                                type="button"
                                data-bs-target="#carouselMobile"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" />
                            </button>
                        </div>

                        {/* 2. CARRUSEL DESKTOP (Circular / Infinito) */}
                        <div id="carouselDesktop" className="carousel slide d-none d-md-block" data-bs-interval="false">
                            <div className="carousel-inner">
                                {Array.from({ length: Math.ceil(TemplateConfig.length / 3) }).map((_, slideIndex) => (
                                    <div key={`slide-${slideIndex}`} className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}>
                                        <div className="row g-4 justify-content-center">
                                            {/* Generar siempre 3 tarjetas por slide */}
                                            {[0, 1, 2].map((offset) => {
                                                const itemIndex = (slideIndex * 3 + offset) % TemplateConfig.length;
                                                const item = TemplateConfig[itemIndex];
                                                return (
                                                    <div key={`desk-${item.id}-${slideIndex}`} className="col-md-4">
                                                        {renderInvitationCard(item)}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev custom-carousel-control"
                                type="button"
                                data-bs-target="#carouselDesktop"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" />
                            </button>
                            <button
                                className="carousel-control-next custom-carousel-control"
                                type="button"
                                data-bs-target="#carouselDesktop"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRECIO */}
            <section id="precio" className="precio">
                <div className="container">
                    <div className="precio-card">
                        <div>
                            <h3>{t("paySection.title")}</h3>
                        </div>
                        <ul>
                            <li>{t("paySection.text1")}</li>
                            <li>{t("paySection.text2")}</li>
                            <li>{t("paySection.text3")}</li>
                            <li>{t("paySection.text4")}</li>
                        </ul>
                        {user ? (
                            <Link
                                to={localizedLink(
                                    `/${user.name}&${user.partner.name}/invitation/plantilla/form`
                                )}
                                className="btn btn-primary"
                            >
                                {t("paySection.button")}
                            </Link>
                        ) : (
                            <Link to={localizedLink("/login")} className="btn btn-primary">
                                {t("paySection.button")}
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            {/* COMO FUNCIONA */}
            <section id="como-funciona" className="como-funciona">
                <div className="container">
                    <h2>{t("howItWorks.title")}</h2>
                    <div className="pasos">
                        <div className="paso">
                            <span>1</span>
                            <h3>{t("howItWorks.cardTitle1")}</h3>
                            <p>{t("howItWorks.cardText1")}</p>
                        </div>
                        <div className="paso">
                            <span>2</span>
                            <h3>{t("howItWorks.cardTitle2")}</h3>
                            <p>{t("howItWorks.cardText2")}</p>
                        </div>
                        <div className="paso">
                            <span>3</span>
                            <h3>{t("howItWorks.cardTitle3")}</h3>
                            <p>{t("howItWorks.cardText3")}</p>
                        </div>
                        <div className="paso">
                            <span>4</span>
                            <h3>{t("howItWorks.cardTitle4")}</h3>
                            <p>{t("howItWorks.cardText4")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="faq">
                <div className="container">
                    <h2>{t("faq.title")}</h2>
                    <div className="faq-accordion">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openIndex === index ? "open" : ""}`}
                            >
                                <button
                                    className="faq-question text-dark"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                </button>
                                <div
                                    className="faq-answer"
                                    style={{ display: openIndex === index ? "block" : "none" }}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="cta" className="cta-section">
                <div className="container">
                    <h2>{t("startToday.title")}</h2>
                    <p>{t("startToday.text")}</p>
                </div>
            </section>

            {/* CONTACTO */}
            <section id="contacto" className="contacto">
                <div className="container">
                    <h2>{t("contactForm.title")}</h2>
                    <p>{t("contactForm.description")}</p>
                    <form onSubmit={handleSubmit} className="form-contacto">
                        <label htmlFor="name">{t("contactForm.name")}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">{t("contactForm.email")}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">{t("contactForm.message")}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                        >
                            {loading ? t("contactForm.sending") : t("contactForm.button")}
                        </button>

                        {message && <p>{message}</p>}
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
