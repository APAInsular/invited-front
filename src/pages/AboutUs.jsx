import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div style={{ backgroundColor: '#FBF8F5', color: '#4A4440', minHeight: '100vh', marginTop: '80px', fontFamily: "'Georgia', serif" }}>
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px 40px 20px' }}>
                <h1 style={{ fontWeight: '700', fontSize: '3rem', color: '#F19292', marginBottom: '10px' }}>
                    Sobre <span style={{ color: '#F19292' }}>Nosotros</span>
                </h1>
                <p style={{ fontStyle: 'italic', color: '#7E6B5A', marginBottom: '40px', fontSize: '1.15rem' }}>
                    El equipo detrás de las invitaciones que cuentan historias de amor
                </p>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#F19292', marginBottom: '60px' }}></div>

                {/* Nuestra Historia */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '80px' }}>
                    <div style={{ flex: '1' }}>
                        <h2 style={{ fontWeight: '700', fontSize: '1.75rem', marginBottom: '10px', borderBottom: '2px solid #C69C6D', display: 'inline-block', paddingBottom: '6px' }}>
                            Nuestra Historia
                        </h2>
                        <p style={{ color: '#6B5A4A', lineHeight: '1.6', fontSize: '1rem' }}>
                            Detrás de cada invitación hay una historia de amor esperando ser contada. La nuestra comenzó cuando descubrimos que las parejas merecían algo más que simples tarjetas tradicionales para anunciar el día más especial de sus vidas. Nacimos de un sueño compartido: transformar la manera en que las parejas conectan con sus seres queridos antes del gran día.
                            <br />
                            Lo que empezó como una conversación entre amigos apasionados por el diseño y las bodas, se convirtió en Invited.es. Cada línea de código, cada diseño y cada palabra que creamos lleva consigo la emoción de quienes entendemos que una invitación no es solo papel o pixels—es el primer capítulo de una celebración inolvidable.</p>
                    </div>
                    <div style={{ flex: '1' }}>
                        <img
                            src="/images/Nuestra_Historia.jpg"
                            alt="Nuestra historia"
                            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 10px #F19292' }}
                        />
                    </div>
                </div>

                {/* Nuestra Misi贸n */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '80px', flexDirection: 'row-reverse' }}>
                    <div style={{ flex: '1' }}>
                        <h2 style={{ fontWeight: '700', fontSize: '1.75rem', marginBottom: '10px', borderBottom: '2px solid #F19292', display: 'inline-block', paddingBottom: '6px' }}>
                            Nuestra Misión
                        </h2>
                        <p style={{ color: '#6B5A4A', lineHeight: '1.6', fontSize: '1rem' }}>
                            Creemos que cada historia de amor es única, y merece ser anunciada de forma igualmente especial. Nuestra misión va más allá de crear invitaciones digitales; buscamos liberar la expresión personal de cada pareja, convirtiendo sus sueños en experiencias visuales que emocionen desde el primer vistazo.
                            <br />
                            Cuando una pareja confía en nosotros, no solo les ofrecemos una herramienta—les entregamos un lienzo en blanco donde plasmar su personalidad, sus colores y el tono de su celebración. Porque entendemos que las pequeñas decisiones, como elegir la tipografía perfecta o el color ideal, son parte del viaje hacia el "sí quiero".</p>
                    </div>
                    <div style={{ flex: '1' }}>
                        <img
                            src="/images/Nuestra_Mision.jpg"
                            alt="Nuestra mision"
                            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 10px #F19292' }}
                        />
                    </div>
                </div>

                {/* Valores */}
                <section className='row g-4' style={{ backgroundColor: '#F7F3EF', padding: '60px 40px', borderRadius: '12px', marginBottom: '80px', display: 'flex', justifyContent: 'space-around' }}>
                    <div className='col-md-4 mx-2' style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', color: '#F19292', marginBottom: '15px' }}></div>
                        <h3 style={{ fontWeight: '600', marginBottom: '10px' }}>Pasión</h3>
                        <p style={{ fontSize: '0.9rem', color: '#7E6B5A' }}>Amamos lo que hacemos y ponemos nuestro corazón en cada detalle de vuestras invitaciones.</p>
                    </div>
                    <div className='col-md-4 mx-2' style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', color: '#F19292', marginBottom: '15px' }}></div>
                        <h3 style={{ fontWeight: '600', marginBottom: '10px' }}>Comunicación</h3>
                        <p style={{ fontSize: '0.9rem', color: '#7E6B5A' }}>Escuchamos vuestras ideas y mantenemos un diálogo constante durante todo el proceso.</p>
                    </div>
                    <div className='col-md-4 mx-2' style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', color: '#F19292', marginBottom: '15px' }}></div>
                        <h3 style={{ fontWeight: '600', marginBottom: '10px' }}>Creatividad</h3>
                        <p style={{ fontSize: '0.9rem', color: '#7E6B5A' }}>Buscamos soluciones únicas y personalizadas para que vuestra invitación sea verdaderamente especial.</p>
                    </div>
                </section>

                {/* Nuestro Compromiso */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '80px' }}>
                    <div style={{ flex: '1' }}>
                        <h2 style={{ fontWeight: '700', fontSize: '1.75rem', marginBottom: '10px', borderBottom: '2px solid #F19292', display: 'inline-block', paddingBottom: '6px' }}>
                            Nuestro Compromiso
                        </h2>
                        <p style={{ color: '#6B5A4A', lineHeight: '1.6', fontSize: '1rem' }}>
                            Caminar junto a ti en este viaje es nuestro mayor privilegio. Cada duda que resolvemos, cada diseño que ajustamos y cada sonrisa que provocamos cuando ves tu invitación terminada, alimenta nuestra pasión por lo que hacemos.
                            <br />
                            Nuestro equipo no está formado por simples diseñadores o programadores—somos soñadores, confidentes y, en cierto modo, cómplices de tu historia. Estamos aquí para escucharte, entenderte y asegurarnos de que el primer anuncio de tu boda refleje exactamente lo que imaginas. Porque tu felicidad es nuestra mayor recompensa, y tu confianza, nuestro tesoro más preciado.</p>
                    </div>
                    <div style={{ flex: '1' }}>
                        <img
                            src="/images/Logo_Invited_SinFondo.png"
                            alt="Nuestro compromiso"
                            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 10px #F19292' }}
                        />
                    </div>
                </div>

                {/* Call to Action */}
                <div style={{ textAlign: 'left', marginBottom: '80px' }}>
                    <h2 style={{ fontWeight: '700', fontSize: '1.75rem', marginBottom: '20px' }}>
                        Listos para comenzar vuestra historia?
                    </h2>
                    <p style={{ maxWidth: '600px', color: '#6B5A4A', fontSize: '1rem', marginBottom: '30px' }}>
                        Dejad que el primer capítulo de vuestra celebración sea tan especial como vosotros. Creemos juntos una invitación que emocione desde el primer vistazo.
                    </p>
                    <button style={{ backgroundColor: '#F19292', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '20px', marginRight: '15px', cursor: 'pointer', fontWeight: '600', fontSize: '1rem' }}>
                        Crear mi invitación
                    </button>
                    <button style={{ backgroundColor: 'transparent', border: '2px solid #F19292', color: '#F19292', padding: '12px 30px', borderRadius: '20px', cursor: 'pointer', fontWeight: '600', fontSize: '1rem' }}>
                        Ver ejemplos
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
