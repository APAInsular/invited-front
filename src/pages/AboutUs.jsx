import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div style={{ backgroundColor: '#FAF9F8', color: '#2F2F2F', minHeight: '100vh', marginTop: "80px" }}>
            <section className="py-5 text-center">
                <div className="container">
                    <h1 className="display-5 fw-bold text-danger-emphasis">Sobre Nosotros</h1>
                    <p className="lead text-muted mb-5">
                        En <strong>Invited.es</strong>, transformamos las invitaciones de boda tradicionales en experiencias digitales memorables.
                    </p>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="/images/Nuestra_Mision.jpg"
                                alt="Equipo de Invited.es"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="fw-bold text-danger-emphasis">Nuestra Historia</h2>
                            <p className="text-muted">
                                Detrás de cada invitación hay una historia de amor esperando ser contada. La nuestra comenzó cuando descubrimos que las parejas merecían algo más que simples tarjetas tradicionales para anunciar el día más especial de sus vidas. Nacimos de un sueño compartido: transformar la manera en que las parejas conectan con sus seres queridos antes del gran día.

                                Lo que empezó como una conversación entre amigos apasionados por el diseño y las bodas, se convirtió en Invited.es. Cada línea de código, cada diseño y cada palabra que creamos lleva consigo la emoción de quienes entendemos que una invitación no es solo papel o pixels—es el primer capítulo de una celebración inolvidable.
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2 mb-4 mb-md-0">
                            <img
                                src="/images/Nuestra_Historia.jpg"
                                alt="Nuestra misión"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-md-6 order-md-1">
                            <h2 className="fw-bold text-danger-emphasis">Nuestra Misión</h2>
                            <p className="text-muted">
                                Creemos que cada historia de amor es única, y merece ser anunciada de forma igualmente especial. Nuestra misión va más allá de crear invitaciones digitales; buscamos liberar la expresión personal de cada pareja, convirtiendo sus sueños en experiencias visuales que emocionen desde el primer vistazo.

                                Cuando una pareja confía en nosotros, no solo les ofrecemos una herramienta—les entregamos un lienzo en blanco donde plasmar su personalidad, sus colores y el tono de su celebración. Porque entendemos que las pequeñas decisiones, como elegir la tipografía perfecta o el color ideal, son parte del viaje hacia el "sí quiero".
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="fw-bold text-danger-emphasis">Nuestro Compromiso</h2>
                    <p className="text-muted">
                        Caminar junto a ti en este viaje es nuestro mayor privilegio. Cada duda que resolvemos, cada diseño que ajustamos y cada sonrisa que provocamos cuando ves tu invitación terminada, alimenta nuestra pasión por lo que hacemos.

                        Nuestro equipo no está formado por simples diseñadores o programadores—somos soñadores, confidentes y, en cierto modo, cómplices de tu historia. Estamos aquí para escucharte, entenderte y asegurarnos de que el primer anuncio de tu boda refleje exactamente lo que imaginas. Porque tu felicidad es nuestra mayor recompensa, y tu confianza, nuestro tesoro más preciado.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
