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
                                Nacimos de una idea sencilla: hacer que el proceso de invitar a los seres queridos sea fácil,
                                moderno y emocionante. Desde entonces, hemos ayudado a cientos de parejas a compartir su gran día
                                de forma única.
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
                                Queremos que cada pareja pueda expresarse sin límites. Por eso creamos herramientas accesibles,
                                personalizables y visualmente atractivas para hacer que cada invitación sea especial.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="fw-bold text-danger-emphasis">Nuestro Compromiso</h2>
                    <p className="text-muted">
                        Te acompañamos en todo el proceso para que diseñar tu invitación sea tan especial como compartirla.
                        Si tienes dudas o necesitas ayuda, nuestro equipo estará encantado de ayudarte.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
