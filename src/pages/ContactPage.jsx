import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Footer from '../components/Footer';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulación de envío del formulario
        setTimeout(() => {
            console.log('Formulario enviado:', formData);
            setLoading(false);
            setMessage('¡Gracias por tu mensaje! Te responderemos en breve.');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setMessage(''), 5000);
        }, 1500);
    };

    // Estilos personalizados
    const customStyles = {
        primaryColor: '#F19292',
        primaryHover: '#e07d7d',
        lightBg: '#FFF9F9',
        textColor: '#333333',
        lightText: '#6c757d'
    };

    return (
        <div style={{ backgroundColor: customStyles.lightBg, marginTop: "90px" }}>
            {/* Hero Section */}
            <div style={{
                backgroundColor: customStyles.primaryColor,
                padding: '5rem 0'
            }}>
                <div className="container text-center text-white">
                    <h1 className="display-4 fw-bold mb-3">Contáctanos</h1>
                    <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
                        Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container py-5">
                <div className="row g-4">
                    {/* Formulario de contacto */}
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4 p-md-5">
                                <h2 className="mb-4" style={{ color: customStyles.primaryColor }}>Envía un mensaje</h2>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="form-label fw-medium">Nombre completo</label>
                                        <input
                                            type="text"
                                            className="form-control py-2"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label fw-medium">Correo electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control py-2"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label fw-medium">Tu mensaje</label>
                                        <textarea
                                            className="form-control py-2"
                                            id="message"
                                            name="message"
                                            rows="6"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn w-100 py-3 fw-bold text-white"
                                        style={{
                                            backgroundColor: customStyles.primaryColor,
                                            border: 'none'
                                        }}
                                        onMouseOver={(e) => e.target.style.backgroundColor = customStyles.primaryHover}
                                        onMouseOut={(e) => e.target.style.backgroundColor = customStyles.primaryColor}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Enviando...
                                            </>
                                        ) : 'Enviar mensaje'}
                                    </button>

                                    {message && (
                                        <div className="alert alert-success mt-4 mb-0">
                                            {message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Información de contacto */}
                    <div className="col-lg-5">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4 p-md-5">
                                <h2 className="mb-4" style={{ color: customStyles.primaryColor }}>Información de contacto</h2>

                                <div className="d-flex mb-4">
                                    <div className="me-3" style={{ color: customStyles.primaryColor }}>
                                        <FaMapMarkerAlt size={24} />
                                    </div>
                                    <div>
                                        <h3 className="h5 mb-2" style={{ color: customStyles.textColor }}>Dirección</h3>
                                        <p className="mb-0" style={{ color: customStyles.lightText }}>
                                            Av. Insurgentes Sur 1234<br />
                                            Col. Condesa, Ciudad de México<br />
                                            C.P. 06140
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="me-3" style={{ color: customStyles.primaryColor }}>
                                        <FaPhone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="h5 mb-2" style={{ color: customStyles.textColor }}>Teléfonos</h3>
                                        <p className="mb-0" style={{ color: customStyles.lightText }}>
                                            <a href="tel:+525512345678" className="text-decoration-none" style={{ color: customStyles.lightText }}>
                                                (55) 1234 5678
                                            </a><br />
                                            <a href="tel:+525598765432" className="text-decoration-none" style={{ color: customStyles.lightText }}>
                                                (55) 9876 5432
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="me-3" style={{ color: customStyles.primaryColor }}>
                                        <FaEnvelope size={24} />
                                    </div>
                                    <div>
                                        <h3 className="h5 mb-2" style={{ color: customStyles.textColor }}>Correo electrónico</h3>
                                        <p className="mb-0">
                                            <a href="mailto:contacto@empresa.com" className="text-decoration-none" style={{ color: customStyles.lightText }}>
                                                contacto@empresa.com
                                            </a><br />
                                            <a href="mailto:soporte@empresa.com" className="text-decoration-none" style={{ color: customStyles.lightText }}>
                                                soporte@empresa.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="me-3" style={{ color: customStyles.primaryColor }}>
                                        <FaClock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="h5 mb-2" style={{ color: customStyles.textColor }}>Horario de atención</h3>
                                        <p className="mb-0" style={{ color: customStyles.lightText }}>
                                            Lunes a Viernes: 9:00 - 18:00 hrs<br />
                                            Sábados: 10:00 - 14:00 hrs<br />
                                            Domingos: Cerrado
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h3 className="h5 mb-3" style={{ color: customStyles.textColor }}>Síguenos</h3>
                                    <div className="d-flex gap-3">
                                        <a href="#" className="btn btn-outline-secondary btn-icon rounded-circle">
                                            <FaFacebook />
                                        </a>
                                        <a href="#" className="btn btn-outline-secondary btn-icon rounded-circle">
                                            <FaInstagram />
                                        </a>
                                        <a href="#" className="btn btn-outline-secondary btn-icon rounded-circle">
                                            <FaTwitter />
                                        </a>
                                        <a href="#" className="btn btn-outline-secondary btn-icon rounded-circle">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mapa */}
                <div className="mt-5 rounded-3 overflow-hidden shadow-sm">
                    <iframe
                        title="Ubicación de la empresa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.032433578925!2d-13.86272292468735!3d28.50087507571541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4618b6c4e50aa3%3A0x5a9a80a6d20b1e0!2sCalle%20Canalejas%2C%2013%2C%2035600%20Puerto%20del%20Rosario%2C%20Las%20Palmas%2C%20Espa%C3%B1a!5e0!3m2!1ses!2smx!4v1717640000000!5m2!1ses!2smx"
                        width="100%"
                        height="450"
                        style={{ border: 'none' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ContactPage;