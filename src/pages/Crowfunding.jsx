import React from "react";
import Footer from "../components/Footer";

const Crowdfunding = () => {
    return (
        <div className="container-fluid px-0">
            {/* Bootstrap CSS */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />

            {/* Estilos personalizados */}
            <style>{`
                :root {
                    --rosa-claro: #fddede;
                    --rosa-fuerte: #f97c7c;
                    --gris-medio: #555555;
                    --gris-claro: #f7f7f7;
                    --blanco: #ffffff;
                    --gris-texto: #333333;
                }
                
                body {
                    color: var(--gris-texto);
                    font-family: 'Arial', sans-serif;
                }
                
                .bg-rosa-claro {
                    background-color: var(--rosa-claro);
                }
                
                .bg-rosa-fuerte {
                    background-color: var(--rosa-fuerte);
                }
                
                .text-rosa-fuerte {
                    color: var(--rosa-fuerte);
                }
                
                .btn-primary {
                    background-color: var(--rosa-fuerte);
                    border-color: var(--rosa-fuerte);
                }
                
                .btn-primary:hover {
                    background-color: var(--gris-medio);
                    border-color: var(--gris-medio);
                }
                
                .navbar {
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                
                .hero {
                    background: linear-gradient(rgba(253, 222, 222, 0.8), rgba(253, 222, 222, 0.9)), 
                                url('https://www.invited.es/images/hero-bg.jpg');
                    background-size: cover;
                    background-position: center;
                    padding: 6rem 0;
                }
                
                .feature-card {
                    transition: transform 0.3s;
                    border-radius: 10px;
                }
                
                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }
                
                .feature-card img {
                    height: 80px;
                    margin-bottom: 1rem;
                }
                
                .video-wrapper {
                    position: relative;
                    padding-bottom: 56.25%; /* 16:9 */
                    height: 0;
                    overflow: hidden;
                }
                
                .video-wrapper iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
                
                .timeline {
                    position: relative;
                    padding-left: 1.5rem;
                }
                
                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 7px;
                    top: 0;
                    height: 100%;
                    width: 2px;
                    background: var(--rosa-fuerte);
                }
                
                .timeline-item {
                    position: relative;
                    padding-bottom: 2rem;
                }
                
                .timeline-item::before {
                    content: '';
                    position: absolute;
                    left: -1.7rem;
                    top: 0;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: var(--blanco);
                    border: 3px solid var(--rosa-fuerte);
                }
                
                .reward-card {
                    border: 1px solid var(--rosa-claro);
                    border-radius: 10px;
                    transition: all 0.3s;
                }
                
                .reward-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                    border-color: var(--rosa-fuerte);
                }
                
                .reward-card h3 {
                    border-bottom: 1px solid var(--rosa-claro);
                    padding-bottom: 1rem;
                    color: var(--rosa-fuerte);
                }
                
                .reward-card ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                
                .reward-card ul li {
                    position: relative;
                    padding-left: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                
                .reward-card ul li::before {
                    content: '✓';
                    color: var(--rosa-fuerte);
                    position: absolute;
                    left: 0;
                }
            `}</style>

            <div className="container-fluid px-0">
                {/* Header */}
                <header className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="https://www.invited.es/images/logo_invited.png" alt="Invited Logo" height="40" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link" href="/">Inicio</a></li>
                                <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                <li className="nav-item"><a className="nav-link" href="/about">Sobre nosotros</a></li>
                                <li className="nav-item"><a className="nav-link" href="/login">Iniciar sesión</a></li>
                                <li className="nav-item"><a className="btn btn-outline-danger ms-2" href="/register">Registro</a></li>
                            </ul>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="hero text-center">
                    <div className="container py-5">
                        <h1 className="display-4 fw-bold mb-4">Crowdfunding · Invited</h1>
                        <p className="lead mb-4 mx-auto" style={{ maxWidth: "600px" }}>
                            Ayúdanos a lanzar Invited: la plataforma de invitaciones digitales 100% automáticas para bodas y eventos.
                            Cero papel, cero estrés.
                        </p>
                        <a
                            href="https://www.kickstarter.com/projects/javier/invited"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg px-4"
                        >
                            Visita nuestra campaña
                        </a>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">¿Por qué elegir Invited?</h2>
                        <div className="row g-4">
                            {[
                                {
                                    img: "https://www.invited.es/images/icon_time_cost.svg",
                                    alt: "Ahorra tiempo y costes",
                                    title: "Ahorra tiempo y costes",
                                    text: "Evita la impresión y el envío postal. Con nuestras invitaciones digitales, todo es más rápido y económico."
                                },
                                {
                                    img: "https://www.invited.es/images/icon_design.svg",
                                    alt: "Diseño único y personalizable",
                                    title: "Diseño único y personalizable",
                                    text: "Elige tu plantilla favorita y añade música para reflejar la esencia de tu celebración."
                                },
                                {
                                    img: "https://www.invited.es/images/icon_rsvp.svg",
                                    alt: "Confirmaciones en tiempo real (RSVP)",
                                    title: "Confirmaciones en tiempo real (RSVP)",
                                    text: "Tus invitados podrán confirmar asistencia, elegir menú y notificar alergias. Tú recibirás avisos en tiempo real."
                                },
                                {
                                    img: "https://www.invited.es/images/icon_countdown.svg",
                                    alt: "Cuenta atrás y detalles del evento",
                                    title: "Cuenta atrás y detalles del evento",
                                    text: "Añade la fecha, ubicaciones y toda la información clave para tus invitados, con un elegante temporizador en pantalla."
                                }
                            ].map((feature, idx) => (
                                <div className="col-md-6 col-lg-3" key={idx}>
                                    <div className="feature-card p-4 h-100 bg-white text-center">
                                        <img src={feature.img} alt={feature.alt} className="img-fluid mb-3" />
                                        <h4 className="mb-3">{feature.title}</h4>
                                        <p>{feature.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Inspiration Section */}
                <section className="py-5 bg-rosa-claro">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h3 className="text-rosa-fuerte mb-3">Nuestra inspiración</h3>
                                <p className="mb-4">
                                    Somos Javier y Antonio, fundadores de <strong>Invited</strong>, una plataforma nacida en las Islas Canarias con el anhelo de devolverle a cada celebración su esencia: la conexión humana.
                                </p>

                                <h3 className="text-rosa-fuerte mb-3">¿Por qué crowdfunding?</h3>
                                <p className="mb-3">Creemos en el poder de la comunidad. Con vuestra ayuda, podremos:</p>
                                <ul className="mb-4">
                                    <li className="mb-2"><strong>Consolidar el núcleo tecnológico</strong> – Dos desarrolladores y un gestor trabajarán durante tres meses…</li>
                                    <li className="mb-2"><strong>Diseñar plantillas premium</strong> – 20 diseños exclusivos de diferentes estilos…</li>
                                    <li className="mb-2"><strong>Lanzar una campaña de marketing emocional</strong> – Para llegar a parejas, familiares y profesionales…</li>
                                </ul>
                                <p className="mb-4">Cada euro recaudado se traducirá en horas de código, diseño y mensajes de "¡Sí, estaremos allí!".</p>

                                <h3 className="text-rosa-fuerte mb-3">Nuestro compromiso</h3>
                                <ul>
                                    <li className="mb-2"><strong>Transparencia total:</strong> publicaremos avances semanales y compartiremos el presupuesto.</li>
                                    <li className="mb-2"><strong>Calidad y cercanía:</strong> canal directo con los mecenas para sugerencias y dudas.</li>
                                    <li className="mb-2"><strong>Escalabilidad:</strong> ampliaremos Invited a cumpleaños, bautizos y más si superamos el objetivo.</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    src="https://www.invited.es/images/hero-crowdfunding-2.jpg"
                                    alt="Javier y Antonio trabajando en Invited"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">Conoce Invited en acción</h2>
                        <div className="video-wrapper">
                            <iframe
                                src="https://youtube.com/shorts/zY8YaqLEOmY?feature=share"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Invited Video"
                            />
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-5 bg-light">
                    <div className="container">
                        <h2 className="text-center mb-5">Cronograma de entregas</h2>
                        <div className="timeline">
                            {[
                                ['6 de junio de 2025', 'Lanzamiento de la campaña en Kickstarter.'],
                                ['6 de julio de 2025', 'Inicio formal del desarrollo (I+D y arquitectura).'],
                                ['6 de agosto de 2025', 'Implementación del panel de proveedores y pruebas internas.'],
                                ['6 de septiembre de 2025', 'Diseño e integración de 20 plantillas premium.'],
                                ['30 de septiembre de 2025', 'Pruebas finales (QA), ajustes y lanzamiento completo.']
                            ].map(([date, desc], i) => (
                                <div className="timeline-item ps-4" key={i}>
                                    <h4 className="text-rosa-fuerte">{date}</h4>
                                    <p>{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Rewards Section */}
                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">Recompensas</h2>
                        <div className="row g-4">
                            {[
                                {
                                    title: 'Early Bird – Invitación Digital (€48)',
                                    items: [
                                        '1 invitación digital (valor €119) con 60% de descuento',
                                        'Envíos ilimitados (enlace WhatsApp/email)',
                                        'Notificaciones por email ilimitadas',
                                        'Acceso al panel básico de novios',
                                        'Soporte prioritario durante la campaña'
                                    ]
                                },
                                {
                                    title: 'Proveedor – Pack 5 Invitaciones (€446)',
                                    items: [
                                        '5 invitaciones digitales con 25% de descuento',
                                        'Panel de proveedores para gestionar invitaciones',
                                        'Notificaciones ilimitadas',
                                        'Soporte prioritario B2B'
                                    ]
                                },
                                {
                                    title: 'Proveedor – Pack 10 Invitaciones (€833)',
                                    items: [
                                        '10 invitaciones digitales con 30% de descuento',
                                        'Panel de proveedores',
                                        'Notificaciones ilimitadas',
                                        'Soporte prioritario B2B'
                                    ]
                                },
                                {
                                    title: 'Proveedor – Pack 20 Invitaciones (€1.547)',
                                    items: [
                                        '20 invitaciones digitales con 35% de descuento',
                                        'Panel de proveedores',
                                        'Notificaciones ilimitadas',
                                        'Soporte prioritario B2B'
                                    ]
                                },
                                {
                                    title: 'Creador de Plantillas (€250)',
                                    items: [
                                        'Diseño colaborativo de tu propia plantilla',
                                        '20% de royalties en cada venta futura',
                                        'Envíos y notificaciones ilimitados',
                                        'Soporte prioritario'
                                    ]
                                },
                                {
                                    title: 'White-Label Empresarial (€3.900)',
                                    items: [
                                        'Licencia "llave en mano" con rebranding completo',
                                        'Servidor y dominio incluidos',
                                        'Panel de administración',
                                        'Soporte gratuito 1 año + actualizaciones'
                                    ]
                                }
                            ].map((reward, i) => (
                                <div className="col-md-6 col-lg-4" key={i}>
                                    <div className="reward-card p-4 h-100 bg-white">
                                        <h3 className="mb-3">{reward.title}</h3>
                                        <ul className="mb-0">
                                            {reward.items.map((item, j) => (
                                                <li key={j} className="mb-2">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />

            {/* Bootstrap JS */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default Crowdfunding;