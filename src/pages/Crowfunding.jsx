import React from "react";

const Crowfunding = () => {
    return (
        <>
            <div>
                {/* Header y navegación */}
                <header>
                    <img src="https://www.invited.es/images/logo_invited.png" alt="Invited Logo" className="logo" />
                    <nav>
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/about">Sobre nosotros</a></li>
                            <li><a href="/login">Iniciar sesión</a></li>
                            <li><a href="/register">Registro</a></li>
                        </ul>
                    </nav>
                </header>

                {/* Sección Hero */}
                <section className="hero">
                    <div className="hero-content">
                        <h1>Crowdfunding · Invited</h1>
                        <p>
                            Ayúdanos a lanzar Invited: la plataforma de invitaciones digitales 100 % automáticas para bodas y eventos.
                            Cero papel, cero estrés.
                        </p>
                        <a
                            href="https://www.kickstarter.com/projects/javier/invited"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Visita nuestra campaña
                        </a>
                    </div>
                </section>

                {/* ¿Por qué elegir Invited? */}
                <section>
                    <h2 className="section-title">¿Por qué elegir Invited?</h2>
                    <div className="features-grid">
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
                            <div className="feature-card" key={idx}>
                                <img src={feature.img} alt={feature.alt} />
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Inspiración, Crowdfunding y Compromiso */}
                <section>
                    <div className="two-columns">
                        <div className="text-block">
                            <h3>Nuestra inspiración</h3>
                            <p>
                                Somos Javier y Antonio, fundadores de <strong>Invited</strong>, una plataforma nacida en las Islas Canarias con el anhelo de devolverle a cada celebración su esencia: la conexión humana.
                            </p>
                            <h3>¿Por qué crowdfunding?</h3>
                            <p>Creemos en el poder de la comunidad. Con vuestra ayuda, podremos:</p>
                            <ul>
                                <li><strong>Consolidar el núcleo tecnológico</strong> – Dos desarrolladores y un gestor trabajarán durante tres meses…</li>
                                <li><strong>Diseñar plantillas premium</strong> – 20 diseños exclusivos de diferentes estilos…</li>
                                <li><strong>Lanzar una campaña de marketing emocional</strong> – Para llegar a parejas, familiares y profesionales…</li>
                            </ul>
                            <p>Cada euro recaudado se traducirá en horas de código, diseño y mensajes de “¡Sí, estaremos allí!”.</p>
                            <h3>Nuestro compromiso</h3>
                            <ul>
                                <li><strong>Transparencia total:</strong> publicaremos avances semanales y compartiremos el presupuesto.</li>
                                <li><strong>Calidad y cercanía:</strong> canal directo con los mecenas para sugerencias y dudas.</li>
                                <li><strong>Escalabilidad:</strong> ampliaremos Invited a cumpleaños, bautizos y más si superamos el objetivo.</li>
                            </ul>
                        </div>
                        <div>
                            <img src="https://www.invited.es/images/hero-crowdfunding-2.jpg" alt="Javier y Antonio trabajando en Invited" />
                        </div>
                    </div>
                </section>

                {/* Video */}
                <section>
                    <h2 className="section-title">Conoce Invited en acción</h2>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/TU_VIDEO_ID?rel=0&autoplay=0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Invited Video"
                        />
                    </div>
                </section>

                {/* Cronograma */}
                <section>
                    <h2 className="section-title">Cronograma de entregas</h2>
                    <ul className="timeline">
                        {[
                            ['6 de junio de 2025', 'Lanzamiento de la campaña en Kickstarter.'],
                            ['6 de julio de 2025', 'Inicio formal del desarrollo (I+D y arquitectura).'],
                            ['6 de agosto de 2025', 'Implementación del panel de proveedores y pruebas internas.'],
                            ['6 de septiembre de 2025', 'Diseño e integración de 20 plantillas premium.'],
                            ['30 de septiembre de 2025', 'Pruebas finales (QA), ajustes y lanzamiento completo.']
                        ].map(([date, desc], i) => (
                            <li key={i} className="timeline-item">
                                <h4>{date}</h4>
                                <p>{desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Recompensas */}
                <section>
                    <h2 className="section-title">Recompensas</h2>
                    <div className="rewards-grid">
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
                                    'Licencia “llave en mano” con rebranding completo',
                                    'Servidor y dominio incluidos',
                                    'Panel de administración',
                                    'Soporte gratuito 1 año + actualizaciones'
                                ]
                            }
                        ].map((reward, i) => (
                            <div className="reward-card" key={i}>
                                <h3>{reward.title}</h3>
                                <ul>
                                    {reward.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <style jsx>{`
                /* General */
                a {
                    color: #0070f3;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                h1, h2, h3, h4 {
                    margin: 0 0 15px 0;
                }

                /* Header */
                header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 15px 40px;
                    background: #fff;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }
                .logo {
                    height: 40px;
                }
                nav ul {
                    display: flex;
                    gap: 20px;
                }
                nav li {
                    font-weight: 600;
                }
                nav a {
                    color: #333;
                    font-weight: 600;
                }
                nav a:hover {
                    color: #0070f3;
                }

                /* Hero */
                .hero {
                    background: url('https://www.invited.es/images/hero-crowdfunding.jpg') center center/cover no-repeat;
                    padding: 120px 20px 80px;
                    color: white;
                    text-align: center;
                    position: relative;
                }
                .hero::after {
                    content: "";
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.4);
                    z-index: 0;
                }
                .hero-content {
                    position: relative;
                    z-index: 1;
                    max-width: 700px;
                    margin: 0 auto;
                }
                .btn-primary {
                    display: inline-block;
                    background: #0070f3;
                    padding: 12px 30px;
                    border-radius: 6px;
                    font-weight: 700;
                    color: white;
                    margin-top: 20px;
                    transition: background 0.3s ease;
                }
                .btn-primary:hover {
                    background: #005bb5;
                }

                /* Section title */
                .section-title {
                    text-align: center;
                    font-size: 2rem;
                    margin: 60px 0 30px;
                    font-weight: 700;
                }

                /* Features grid */
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
                    gap: 30px;
                    padding: 0 20px 40px;
                }
                .feature-card {
                    background: white;
                    border-radius: 10px;
                    padding: 25px 20px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                    text-align: center;
                    transition: box-shadow 0.3s ease;
                }
                .feature-card:hover {
                    box-shadow: 0 6px 25px rgba(0,0,0,0.12);
                }
                .feature-card img {
                    max-width: 60px;
                    margin-bottom: 15px;
                }
                .feature-card h3 {
                    margin-bottom: 10px;
                    font-size: 1.2rem;
                }
                .feature-card p {
                    font-size: 0.95rem;
                    color: #666;
                    line-height: 1.4;
                }

                /* Two columns */
                .two-columns {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 30px;
                    padding: 0 20px 60px;
                    align-items: center;
                    justify-content: center;
                }
                .text-block {
                    flex: 1 1 400px;
                    max-width: 600px;
                }
                .two-columns > div:last-child {
                    flex: 1 1 350px;
                    max-width: 400px;
                }
                .two-columns img {
                    max-width: 100%;
                    border-radius: 8px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                }

                /* Video */
                .video-wrapper {
                    position: relative;
                    padding-bottom: 56.25%; /* 16:9 */
                    height: 0;
                    overflow: hidden;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    max-width: 800px;
                    margin: 0 auto 60px;
                }
                .video-wrapper iframe {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%;
                    height: 100%;
                    border: 0;
                }

                /* Timeline */
                .timeline {
                    max-width: 700px;
                    margin: 0 auto 60px;
                    padding: 0 20px;
                    border-left: 3px solid #0070f3;
                }
                .timeline-item {
                    margin-left: 30px;
                    margin-bottom: 40px;
                    position: relative;
                }
                .timeline-item::before {
                    content: "";
                    position: absolute;
                    left: -15px;
                    top: 5px;
                    width: 12px;
                    height: 12px;
                    background: #0070f3;
                    border-radius: 50%;
                }
                .timeline-item h4 {
                    font-weight: 700;
                    color: #0070f3;
                    margin-bottom: 5px;
                }
                .timeline-item p {
                    color: #444;
                }

                /* Rewards grid */
                .rewards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
                    gap: 30px;
                    padding: 0 20px 80px;
                }
                .reward-card {
                    background: white;
                    border-radius: 10px;
                    padding: 20px 25px;
                    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
                    transition: box-shadow 0.3s ease;
                }
                .reward-card:hover {
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                }
                .reward-card h3 {
                    font-size: 1.25rem;
                    margin-bottom: 15px;
                    color: #0070f3;
                }
                .reward-card ul {
                    list-style: disc inside;
                    color: #555;
                }
                .reward-card ul li {
                    margin-bottom: 8px;
                    font-size: 0.95rem;
                }

                @media (max-width: 768px) {
                    header {
                        flex-direction: column;
                        gap: 10px;
                    }
                    nav ul {
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 15px;
                    }
                    .two-columns {
                        flex-direction: column;
                    }
                    .text-block, .two-columns > div:last-child {
                        max-width: 100%;
                    }
                }
            `}</style>
        </>
    );
};

export default Crowfunding;
