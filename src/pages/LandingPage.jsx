import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiClient from '../config/axiosConfig';
import { Link, useNavigate } from 'react-router-dom';
import '../templates/styles/LandingPage.css'
import Footer from '../components/Footer';

const LandingPage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

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

    const handleNavigation = (path) => {
        if (user) {
            navigate(`/${user.Name}&${user.partner.Name}/invitation` + path);
        } else {
            navigate('/login')
        }
    };

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "¿Puedo subir mi propia música para la invitación?",
            answer:
                "Sí, puedes añadir la canción especial de tu boda o cualquier música que desees para ambientar tu invitación.",
        },
        {
            question: "¿Mis invitados necesitan descargar algo?",
            answer:
                "No. Simplemente recibirán un enlace a la invitación digital y podrán confirmar asistencia rellenando un simple formulario.",
        },
        {
            question: "¿Puedo modificar la invitación después de compartirla?",
            answer:
                "¡Claro! Cualquier cambio que realices se actualizará automáticamente para tus invitados.",
        },
        {
            question: "¿Hay algún límite de personas a las que puedo invitar?",
            answer: "No, puedes enviar la invitación a tantas personas como necesites.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div style={{ backgroundColor: "#FAF9F8", color: "#2F2F2F", minHeight: "100vh" }}>
            <>
                {/* Metadatos ocultos para SEO */}
                <div itemScope itemType="https://schema.org/ImageObject" style={{ display: 'none' }}>
                    <img
                        src="/public/Invited.jpg" // Asegúrate de que la ruta coincida con tu proyecto
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
                            <h1>Crea tus invitaciones de boda digitales</h1>
                            <p>Fácil, elegante y con confirmaciones de invitados en tiempo real.</p>
                            {user ? (
                                <Link
                                    to={`/${user.name}&${user.partner.name}/invitation/plantilla/form`}
                                    className="btn btn-primary"
                                >
                                    Empieza Ahora
                                </Link>
                            ) : (
                                <Link to="/login" className="btn btn-primary">
                                    Empieza Ahora
                                </Link>
                            )}
                        </div>
                    </div>
                </section>
            </>
            {/* BENEFICIOS / VENTAJAS */}
            <section id="beneficios" className="beneficios">
                <div className="container">
                    <h2>¿Por Qué Elegir Invited?</h2>
                    <div className="beneficios-grid">
                        <div className="beneficio-item">
                            <h3>Ahorra tiempo y costes</h3>
                            <p>Evita la impresión y el envío postal. Con nuestras invitaciones digitales, todo es más rápido y económico.</p>
                        </div>
                        <div className="beneficio-item">
                            <h3>Diseño único y personalizable</h3>
                            <p>Elige tu plantilla favorita y añade música para reflejar la esencia de tu boda.</p>
                        </div>
                        <div className="beneficio-item">
                            <h3>Confirmaciones en tiempo real (RSVP)</h3>
                            <p>Tus invitados podrán confirmar asistencia, recibirás un aviso por email y tendrás un panel con toda la información en tiempo real.</p>
                        </div>
                        <div className="beneficio-item">
                            <h3>Cuenta atrás y detalles del evento</h3>
                            <p>Añade la fecha de la boda, mapas de localización y toda la información clave para tus invitados.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 text-center bg-gradient-to-b from-pink-100 via-white to-pink-100">
                <h2 className="text-4xl font-extrabold mb-4 text-pink-700">Descubre nuestras invitaciones</h2>
                <p className="text-lg mb-10 text-gray-700">Explora nuestras plantillas diseñadas con amor</p>

                <div className="flex justify-center flex-wrap gap-8 px-4">
                    <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-6 w-80 transform hover:-translate-y-1">
                        <h3 className="text-2xl font-semibold mb-3 text-pink-600">Plantilla Clásica</h3>
                        <p className="text-gray-600 mb-5">Elegante y atemporal, ideal para bodas tradicionales.</p>
                        <a href="/demo/plantilla-1" target="_blank" rel="noopener noreferrer">
                            <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
                                Ver Demo
                            </button>
                        </a>
                    </div>

                    <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-6 w-80 transform hover:-translate-y-1">
                        <h3 className="text-2xl font-semibold mb-3 text-pink-600">Plantilla Moderna</h3>
                        <p className="text-gray-600 mb-5">Con un toque actual, perfecta para bodas únicas.</p>
                        <a href="/demo/plantilla-2" target="_blank" rel="noopener noreferrer">
                            <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
                                Ver Demo
                            </button>
                        </a>
                    </div>
                </div>
            </section>


            {/* PRECIO */}
            <section id="precio" className="precio">
                <div className="container">
                    <h2>Plan Único</h2>
                    <div className="precio-card">
                        <div>
                            <h3>Tu invitación digital por
                                <span style={{ textDecoration: "line-through", marginLeft: "8px", marginRight: "8px", color: "#999" }}>
                                    119€
                                </span>
                                <span style={{ color: "#e63946", fontWeight: "bold" }}>
                                    {(119 * 0.85).toFixed(2)}€
                                </span>
                                <span style={{
                                    backgroundColor: "#e63946",
                                    color: "white",
                                    padding: "2px 8px",
                                    borderRadius: "12px",
                                    fontSize: "0.8rem",
                                    marginLeft: "8px"
                                }}>
                                    15% OFF hasta el 30/05
                                </span>
                            </h3>
                        </div>
                        <ul>
                            <li>Acceso a todas las plantillas</li>
                            <li>Soporte en español</li>
                            <li>Actualizaciones ilimitadas</li>
                            <li>Sin costes ocultos</li>
                        </ul>
                        {user ? (
                            <Link
                                to={`/${user.name}&${user.partner.name}/invitation/plantilla/form`}
                                className="btn btn-primary"
                            >
                                Crea mi invitación
                            </Link>
                        ) : (
                            <Link to="/login" className="btn btn-primary">
                                Crea mi invitación
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            <section id="como-funciona" className="como-funciona">
                <div className="container">
                    <h2>Cómo Funciona</h2>
                    <div className="pasos">
                        <div className="paso">
                            <span>1</span>
                            <h3>Regístrate</h3>
                            <p>Crea tu cuenta e inicia tu proyecto de invitación digital.</p>
                        </div>
                        <div className="paso">
                            <span>2</span>
                            <h3>Personaliza</h3>
                            <p>Elige la plantilla, colores y añade la información de tu boda.</p>
                        </div>
                        <div className="paso">
                            <span>3</span>
                            <h3>Comparte</h3>
                            <p>Envía la invitación a tus invitados por email, WhatsApp o redes sociales.</p>
                        </div>
                        <div className="paso">
                            <span>4</span>
                            <h3>Gestiona</h3>
                            <p>Revisa confirmaciones y mantén todo bajo control en tu panel.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="faq">
                <div className="container">
                    <h2>Preguntas Frecuentes</h2>
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
                    <h2>Comienza Hoy Mismo</h2>
                    <p>Convierte tu boda en una experiencia digital inolvidable.</p>
                </div>
            </section>

            <section id="contacto" className="contacto">
                <div className="container">
                    <h2>¿Tienes preguntas?</h2>
                    <p>Déjanos tu mensaje y te responderemos en breve.</p>
                    <form onSubmit={handleSubmit} className="form-contacto">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? "Enviando..." : "Enviar"}
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
