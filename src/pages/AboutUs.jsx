import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div className="bg-light" style={{
            color: '#4A4440',
            minHeight: '100vh',
            fontFamily: "'Georgia', serif",
            paddingTop: '80px'
        }}>
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold display-4" style={{ color: '#F19292' }}>
                        Sobre <span style={{ color: '#F19292' }}>Nosotros</span>
                    </h1>
                    <p className="fst-italic fs-5" style={{ color: '#7E6B5A' }}>
                        El equipo detrás de las invitaciones que cuentan historias de amor
                    </p>
                    <div className="mx-auto" style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: '#F19292'
                    }}></div>
                </div>

                {/* Nuestra Historia */}
                <div className="row align-items-center g-5 mb-5">
                    <div className="col-lg-6 order-lg-1 order-2">
                        <h2 className="fw-bold mb-3 pb-2 border-bottom border-2" style={{ borderColor: '#C69C6D' }}>
                            Nuestra Historia
                        </h2>
                        <p className="text-muted lh-lg">
                            Detrás de cada invitación hay una historia de amor esperando ser contada. La nuestra comenzó cuando descubrimos que las parejas merecían algo más que simples tarjetas tradicionales para anunciar el día más especial de sus vidas. Nacimos de un sueño compartido: transformar la manera en que las parejas conectan con sus seres queridos antes del gran día.
                            <br /><br />
                            Lo que empezó como una conversación entre amigos apasionados por el diseño y las bodas, se convirtió en Invited.es. Cada línea de código, cada diseño y cada palabra que creamos lleva consigo la emoción de quienes entendemos que una invitación no es solo papel o pixels—es el primer capítulo de una celebración inolvidable.
                        </p>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                        <img
                            src="/images/Nuestra_Historia.jpg"
                            alt="Nuestra historia"
                            className="img-fluid rounded shadow"
                            style={{ boxShadow: '0 4px 10px #F19292' }}
                        />
                    </div>
                </div>

                {/* Nuestra Misión */}
                <div className="row align-items-center g-5 mb-5">
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-3 pb-2 border-bottom border-2" style={{ borderColor: '#F19292' }}>
                            Nuestra Misión
                        </h2>
                        <p className="text-muted lh-lg">
                            Creemos que cada historia de amor es única, y merece ser anunciada de forma igualmente especial. Nuestra misión va más allá de crear invitaciones digitales; buscamos liberar la expresión personal de cada pareja, convirtiendo sus sueños en experiencias visuales que emocionen desde el primer vistazo.
                            <br /><br />
                            Cuando una pareja confía en nosotros, no solo les ofrecemos una herramienta—les entregamos un lienzo en blanco donde plasmar su personalidad, sus colores y el tono de su celebración. Porque entendemos que las pequeñas decisiones, como elegir la tipografía perfecta o el color ideal, son parte del viaje hacia el "sí quiero".
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="/images/Nuestra_Mision.jpg"
                            alt="Nuestra mision"
                            className="img-fluid rounded shadow"
                            style={{ boxShadow: '0 4px 10px #F19292' }}
                        />
                    </div>
                </div>

                {/* Valores */}
                <div className="row g-4 mb-5 py-5 px-3 rounded" style={{ backgroundColor: '#F7F3EF' }}>
                    <div className="col-md-4">
                        <div className="bg-white p-4 rounded shadow-sm text-center h-100">
                            <div className="fs-2 mb-3" style={{ color: '#F19292' }}>❤️</div>
                            <h3 className="fw-semibold mb-3">Pasión</h3>
                            <p className="text-muted">
                                Amamos lo que hacemos y ponemos nuestro corazón en cada detalle de vuestras invitaciones.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-white p-4 rounded shadow-sm text-center h-100">
                            <div className="fs-2 mb-3" style={{ color: '#F19292' }}>💬</div>
                            <h3 className="fw-semibold mb-3">Comunicación</h3>
                            <p className="text-muted">
                                Escuchamos vuestras ideas y mantenemos un diálogo constante durante todo el proceso.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-white p-4 rounded shadow-sm text-center h-100">
                            <div className="fs-2 mb-3" style={{ color: '#F19292' }}>🎨</div>
                            <h3 className="fw-semibold mb-3">Creatividad</h3>
                            <p className="text-muted">
                                Buscamos soluciones únicas y personalizadas para que vuestra invitación sea verdaderamente especial.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Nuestro Compromiso */}
                <div className="row align-items-center g-5 mb-5">
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-3 pb-2 border-bottom border-2" style={{ borderColor: '#F19292' }}>
                            Nuestro Compromiso
                        </h2>
                        <p className="text-muted lh-lg">
                            Caminar junto a ti en este viaje es nuestro mayor privilegio. Cada duda que resolvemos, cada diseño que ajustamos y cada sonrisa que provocamos cuando ves tu invitación terminada, alimenta nuestra pasión por lo que hacemos.
                            <br /><br />
                            Nuestro equipo no está formado por simples diseñadores o programadores—somos soñadores, confidentes y, en cierto modo, cómplices de tu historia. Estamos aquí para escucharte, entenderte y asegurarnos de que el primer anuncio de tu boda refleje exactamente lo que imaginas. Porque tu felicidad es nuestra mayor recompensa, y tu confianza, nuestro tesoro más preciado.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="/images/Logo_Invited_SinFondo.png"
                            alt="Nuestro compromiso"
                            className="img-fluid rounded shadow"
                            style={{ boxShadow: '0 4px 10px #F19292' }}
                        />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mb-5">
                    <h2 className="fw-bold mb-4">
                        ¿Listos para comenzar vuestra historia?
                    </h2>
                    <p className="text-muted mb-4" style={{ maxWidth: '600px' }}>
                        Dejad que el primer capítulo de vuestra celebración sea tan especial como vosotros. Creemos juntos una invitación que emocione desde el primer vistazo.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                        <button className="btn text-white px-4 py-2 rounded-pill fw-semibold" style={{ backgroundColor: '#F19292' }}>
                            Crear mi invitación
                        </button>
                        <button className="btn border-2 px-4 py-2 rounded-pill fw-semibold" style={{ borderColor: '#F19292', color: '#F19292' }}>
                            Ver ejemplos
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;