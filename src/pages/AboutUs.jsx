import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div style={{ backgroundColor: '#FBF8F5', color: '#4A4440', minHeight: '100vh', marginTop: '80px', fontFamily: "'Georgia', serif" }}>
            <section style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 20px 40px 20px' }}>
                <h1 style={{ fontWeight: '700', fontSize: '3rem', color: '#C69C6D', marginBottom: '10px' }}>
                    Sobre <span style={{ color: '#9B7B57' }}>Nosotros</span>
                </h1>
                <p style={{ fontStyle: 'italic', color: '#7E6B5A', marginBottom: '40px', fontSize: '1.15rem' }}>
                    El equipo detr谩s de las invitaciones que cuentan historias de amor
                </p>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#C69C6D', marginBottom: '60px' }}></div>

                {/* Nuestra Historia */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '80px' }}>
                    <div style={{ flex: '1' }}>
                        <h2 style={{ fontWeight: '700', fontSize: '1.75rem', marginBottom: '10px', borderBottom: '2px solid #C69C6D', display: 'inline-block', paddingBottom: '6px' }}>
                            Nuestra Historia
                        </h2>
                        <p style={{ color: '#6B5A4A', lineHeight: '1.6', fontSize: '1rem' }}>
                            Detr谩s de cada invitaci贸n hay una historia de amor esperando ser contada. La nuestra comenz贸 cuando descubrimos que las parejas merec铆an algo m谩s que simples tarjetas tradicionales para anunciar el d铆a m谩s especial de sus vidas. Nacimos de un sue帽o compartido: transformar la manera en que las parejas conectan con sus seres queridos antes del gran d铆a.
                            <br /><br />
                            Lo que empez贸 como una conversaci贸n entre amigos apasionados por el dise帽o y las bodas, se convirti贸 en Invited.es. Cada l铆nea de c贸digo, cada dise帽o y cada palabra que creamos lleva consigo la emoci贸n de quienes entendemos que una invitaci贸n no es solo papel o pixels鈥攅s el primer cap铆tulo de una celebraci贸n inolvidable.
                        </p>
                    </div>
                    <div style={{ flex: '1' }}>
                        <img
                            src="/images/Nuestra_Historia.jpg"
                            alt="Nuestra historia"
                            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 10px rgba(198,156,109,0.3)' }}
                        />
                    </div>
                </div>

                {/* Nuestra Misi贸n */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '80px', flexDirection: 'row-reverse' }}>
                    <div style={{ flex: '1' }}>
                        <h2 style={{ fontWeight: '700', fontSize: '1.75rem', marginBottom: '10px', borderBottom: '2px solid #C69C6D', display: 'inline-block', paddingBottom: '6px' }}>
                            Nuestra Misi贸n
                        </h2>
                        <p style={{ color: '#6B5A4A', lineHeight: '1.6', fontSize: '1rem' }}>
                            Creemos que cada historia de amor es 煤nica, y merece ser anunciada de forma igualmente especial. Nuestra misi贸n va m谩s all谩 de crear invitaciones digitales; buscamos liberar la expresi贸n personal de cada pareja, convirtiendo sus sue帽os en experiencias visuales que emocionen desde el primer vistazo.
                            <br /><br />
                            Cuando una pareja conf铆a en nosotros, no solo les ofrecemos una herramienta鈥攍es entregamos un lienzo en blanco donde plasmar su personalidad, sus colores y el tono de su celebraci贸n. Porque entendemos que las peque帽as decisiones, como elegir la tipograf铆a perfecta o el color ideal, son parte del viaje hacia el "s铆 quiero".
                        </p>
                    </div>
                    <div style={{ flex: '1' }}>
                        <img
                            src="/images/Nuestra_Mision.jpg"
                            alt="Nuestra misi贸n"
                            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 10px rgba(198,156,109,0.3)' }}
                        />
                    </div>
                </div>

                {/* Valores */}
                <section style={{ backgroundColor: '#F7F3EF', padding: '60px 40px', borderRadius: '12px', marginBottom: '80px', display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ maxWidth: '220px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', color: '#C69C6D', marginBottom: '15px' }}>鉂わ笍</div>
                        <h3 style={{ fontWeight: '700', marginBottom: '10px' }}>Pasi贸n</h3>
                        <p style={{ fontSize: '0.9rem', color: '#7E6B5A' }}>Amamos lo que hacemos y ponemos nuestro coraz贸n en cada detalle de vuestras invitaciones.</p>
                    </div>
                    <div style={{ maxWidth: '220px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', color: '#C69C6D', marginBottom: '15px' }}>馃挰</div>
                        <h3 style={{ fontWeight: '700', marginBottom: '10px' }}>Comunicaci贸n</h3>
                        <p style={{ fontSize: '0.9rem', color: '#7E6B5A' }}>Escuchamos vuestras ideas y mantenemos un di谩logo constante durante todo el proceso.</p>
                    </div>
                    <div style={{ maxWidth: '220px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', color: '#4A4440', marginBottom: '15px' }}>馃挕</div>
                        <h3 style={{ fontWeight: '700', marginBottom: '10px' }}>Creatividad</h3>
                        <p style={{ fontSize: '0.9rem', color: '#7E6B5A' }}>Buscamos soluciones 煤nicas y personalizadas para que vuestra invitaci贸n sea verdaderamente especial.</p>
                    </div>
                </section>

                {/* Nuestro Compromiso */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '80px' }}>
                    <div style={{ flex: '1' }}>
                        <h2 style={{ fontWeight: '700', fontSize: '1.75rem', marginBottom: '10px', borderBottom: '2px solid #C69C6D', display: 'inline-block', paddingBottom: '6px' }}>
                            Nuestro Compromiso
                        </h2>
                        <p style={{ color: '#6B5A4A', lineHeight: '1.6', fontSize: '1rem' }}>
                            Caminar junto a ti en este viaje es nuestro mayor privilegio. Cada duda que resolvemos, cada dise帽o que ajustamos y cada sonrisa que provocamos cuando ves tu invitaci贸n terminada, alimenta nuestra pasi贸n por lo que hacemos.
                            <br /><br />
                            Nuestro equipo no est谩 formado por simples dise帽adores o programadores鈥攕omos so帽adores, confidentes y, en cierto modo, c贸mplices de tu historia. Estamos aqu铆 para escucharte, entenderte y asegurarnos de que el primer anuncio de tu boda refleje exactamente lo que imaginas. Porque tu felicidad es nuestra mayor recompensa, y tu confianza, nuestro tesoro m谩s preciado.
                        </p>
                    </div>
                    <div style={{ flex: '1' }}>
                        <img
                            src="/images/Nuestro_Compromiso.jpg"
                            alt="Nuestro compromiso"
                            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 10px rgba(198,156,109,0.3)' }}
                        />
                    </div>
                </div>

                {/* Call to Action */}
                <div style={{ textAlign: 'left', marginBottom: '80px' }}>
                    <h2 style={{ fontWeight: '700', fontSize: '1.75rem', marginBottom: '20px' }}>
                        驴Listos para comenzar vuestra historia?
                    </h2>
                    <p style={{ maxWidth: '600px', color: '#6B5A4A', fontSize: '1rem', marginBottom: '30px' }}>
                        Dejad que el primer cap铆tulo de vuestra celebraci贸n sea tan especial como vosotros. Creemos juntos una invitaci贸n que emocione desde el primer vistazo.
                    </p>
                    <button style={{ backgroundColor: '#C69C6D', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '20px', marginRight: '15px', cursor: 'pointer', fontWeight: '600', fontSize: '1rem' }}>
                        Crear mi invitaci贸n
                    </button>
                    <button style={{ backgroundColor: 'transparent', border: '2px solid #C69C6D', color: '#C69C6D', padding: '12px 30px', borderRadius: '20px', cursor: 'pointer', fontWeight: '600', fontSize: '1rem' }}>
                        Ver ejemplos
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
