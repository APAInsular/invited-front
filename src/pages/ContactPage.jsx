import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaClock, FaYoutube } from 'react-icons/fa';
import Footer from '../components/Footer';
import apiClient from '../config/axiosConfig';
import usePageTranslation from '../hooks/usePageTranslation';

const ContactPage = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const { t, loadingTranslation } = usePageTranslation('contactPage');


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

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
            setMessage(`${t('contactPage.formSection.successMessage')}`);
        } catch (error) {
            setMessage(`${t('contactPage.formSection.failedMessage')}`);
            console.error(error);
        }

        setLoading(false);
    };

    // Estilos personalizados
    const customStyles = {
        primaryColor: '#F19292',
        primaryHover: '#e07d7d',
        lightBg: '#FFF9F9',
        textColor: '#333333',
        lightText: '#6c757d'
    };

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    return (
        <div style={{ backgroundColor: customStyles.lightBg, marginTop: "90px" }}>
            {/* Hero Section */}
            <div style={{
                backgroundColor: customStyles.primaryColor,
                padding: '5rem 0'
            }}>
                <div className="container text-center text-white">
                    <h1 className="display-4 fw-bold mb-3">{t('contactPage.hero.title')}</h1>
                    <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
                        {t('contactPage.hero.description')}
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
                                <h2 className="mb-4" style={{ color: customStyles.primaryColor }}>{t('contactPage.formSection.title')}</h2>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="form-label fw-medium">{t('contactPage.formSection.fields.nameLabel')}</label>
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
                                        <label htmlFor="email" className="form-label fw-medium">{t('contactPage.formSection.fields.emailLabel')}</label>
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
                                        <label htmlFor="message" className="form-label fw-medium">{t('contactPage.formSection.fields.messageLabel')}</label>
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

                                    {/* Checkbox de términos y condiciones */}
                                    <div className="mb-4 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="terms"
                                            name="terms"
                                            checked={formData.terms || false}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="terms" className="form-check-label ms-2">
                                            {t('contactPage.formSection.fields.termsCheckbox')} <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer" style={{ color: customStyles.primaryColor }}>{t('contactPage.formSection.fields.termsLink')}</a> {t('contactPage.formSection.fields.termsCheckbox2')} <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer" style={{ color: customStyles.primaryColor }}>{t('contactPage.formSection.fields.privacyLink')}</a>
                                        </label>
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
                                                {t('contactPage.formSection.fields.sendingButton')}
                                            </>
                                        ) : `${t('contactPage.formSection.fields.submitButton')}` }
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
                                <h2 className="mb-4" style={{ color: customStyles.primaryColor }}>{t("contactPage.contactInfoSection.title")}</h2>

                                <div className="d-flex mb-4">
                                    <div className="me-3" style={{ color: customStyles.primaryColor }}>
                                        <FaMapMarkerAlt size={24} />
                                    </div>
                                    <div>
                                        <h3 className="h5 mb-2" style={{ color: customStyles.textColor }}>{t("contactPage.contactInfoSection.addressTitle")}</h3>
                                        <p className="mb-0" style={{ color: customStyles.lightText }}>
                                            {t("contactPage.contactInfoSection.addressLine1")}<br />
                                            {t("contactPage.contactInfoSection.addressLine2")}<br />
                                            {t("contactPage.contactInfoSection.addressLine3")}
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="me-3" style={{ color: customStyles.primaryColor }}>
                                        <FaEnvelope size={24} />
                                    </div>
                                    <div>
                                        <h3 className="h5 mb-2" style={{ color: customStyles.textColor }}>{t("contactPage.contactInfoSection.emailTitle")}</h3>
                                        <p className="mb-0">
                                            <a href="mailto:contacto@empresa.com" className="text-decoration-none" style={{ color: customStyles.lightText }}>
                                                {t("contactPage.contactInfoSection.emailValue")}
                                            </a><br />
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="me-3" style={{ color: customStyles.primaryColor }}>
                                        <FaClock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="h5 mb-2" style={{ color: customStyles.textColor }}>{t("contactPage.contactInfoSection.hoursTitle")}</h3>
                                        <p className="mb-0" style={{ color: customStyles.lightText }}>
                                            {t("contactPage.contactInfoSection.hoursValue")}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h3 className="h5 mb-3" style={{ color: customStyles.textColor }}>{t("contactPage.contactInfoSection.socialTitle")}</h3>
                                    <div className="d-flex gap-3">
                                        <a
                                            href="https://www.facebook.com/invit3d"
                                            className="btn btn-outline-secondary btn-icon rounded-circle p-3"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaFacebook size={24} />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/invited.es"
                                            className="btn btn-outline-secondary btn-icon rounded-circle p-3"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaInstagram size={24} />
                                        </a>
                                        <a
                                            href="https://www.youtube.com/@Invited-es/"
                                            className="btn btn-outline-secondary btn-icon rounded-circle p-3"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaYoutube size={24} />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/company/platita/"
                                            className="btn btn-outline-secondary btn-icon rounded-circle p-3"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin size={24} />
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