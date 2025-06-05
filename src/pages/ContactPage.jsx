import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

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

            // Limpiar el mensaje después de 5 segundos
            setTimeout(() => setMessage(''), 5000);
        }, 1500);
    };

    return (
        <div className="bg-light">
            {/* Hero Section */}
            <div className="bg-danger text-white py-5">
                <div className="container text-center py-4">
                    <h1 className="display-4 fw-bold mb-3">Contáctanos</h1>
                    <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
                        Estamos aquí para ayudarte. Ponte en contacto con nosotros a través del formulario, redes sociales o visita nuestras oficinas.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container my-5">
                <div className="row g-4">
                    {/* Formulario de contacto - Columna izquierda */}
                    <div className="col-lg-6">
                        <div className="card shadow-sm h-100">
                            <div className="card-body p-4">
                                <h2 className="text-danger mb-4">¿Tienes preguntas?</h2>
                                <p className="text-muted mb-4">Déjanos tu mensaje y te responderemos en breve.</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label">Mensaje</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-danger w-100 py-2 fw-bold"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Enviando...
                                            </>
                                        ) : 'Enviar Mensaje'}
                                    </button>

                                    {message && (
                                        <div className="alert alert-success mt-3 mb-0">
                                            {message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Información de contacto - Columna derecha */}
                    <div className="col-lg-6">
                        <div className="card shadow-sm h-100">
                            <div className="card-body p-4">
                                <h2 className="text-danger mb-4">Información de Contacto</h2>

                                <div className="d-flex mb-4">
                                    <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-3 me-3 flex-shrink-0">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h3 className="h5 mb-2">Dirección</h3>
                                        <p className="text-muted mb-0">
                                            Calle Principal #123, Colonia Centro<br />
                                            Ciudad de México, CDMX 06000
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-3 me-3 flex-shrink-0">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="h5 mb-2">Teléfonos</h3>
                                        <p className="text-muted mb-0">
                                            Oficina: <a href="tel:+525512345678" className="text-decoration-none">(55) 1234 5678</a><br />
                                            Móvil: <a href="tel:+525587654321" className="text-decoration-none">(55) 8765 4321</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-3 me-3 flex-shrink-0">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h3 className="h5 mb-2">Correos Electrónicos</h3>
                                        <p className="text-muted mb-0">
                                            <a href="mailto:info@empresa.com" className="text-decoration-none">info@empresa.com</a><br />
                                            <a href="mailto:soporte@empresa.com" className="text-decoration-none">soporte@empresa.com</a><br />
                                            <a href="mailto:ventas@empresa.com" className="text-decoration-none">ventas@empresa.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-3 me-3 flex-shrink-0">
                                        <FaClock size={20} />
                                    </div>
                                    <div>
                                        <h3 className="h5 mb-2">Horario de Atención</h3>
                                        <p className="text-muted mb-0">
                                            Lunes a Viernes: 9:00 am - 6:00 pm<br />
                                            Sábados: 10:00 am - 2:00 pm<br />
                                            Domingos: Cerrado
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 pt-2">
                                    <h3 className="h5 mb-3">Síguenos en redes sociales</h3>
                                    <div className="d-flex gap-3">
                                        <a href="#" className="btn btn-outline-danger btn-social rounded-circle">
                                            <FaFacebook />
                                        </a>
                                        <a href="#" className="btn btn-outline-danger btn-social rounded-circle">
                                            <FaInstagram />
                                        </a>
                                        <a href="#" className="btn btn-outline-danger btn-social rounded-circle">
                                            <FaTwitter />
                                        </a>
                                        <a href="#" className="btn btn-outline-danger btn-social rounded-circle">
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.88861477103!2d-99.1697679246908!3d19.42702048187285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1717638188768!5m2!1ses!2smx"
                        width="100%"
                        height="450"
                        style={{ border: 'none' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;