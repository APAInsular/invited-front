import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import usePageTranslation from '../hooks/usePageTranslation';

const AboutUs = () => {

    const { translate: t, loadingTranslation } = usePageTranslation('aboutUsPage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

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
                        {t('aboutPage.hero.title')}
                    </h1>
                    <p className="fst-italic fs-5" style={{ color: '#7E6B5A' }}>
                        {t('aboutPage.hero.subtitle')}
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
                            {t("aboutPage.ourStory.title")}
                        </h2>
                        <p className="text-muted lh-lg">
                            {t("aboutPage.ourStory.text")}
                            <br /><br />
                            {t("aboutPage.ourStory.text2")}
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
                            {t("aboutPage.ourMission.title")}
                        </h2>
                        <p className="text-muted lh-lg">
                            {t("aboutPage.ourMission.text")}
                            <br /><br />
                            {t("aboutPage.ourMission.text2")}
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
                            <h3 className="fw-semibold mb-3">{t("aboutPage.values.value1Title")}</h3>
                            <p className="text-muted">
                                {t("aboutPage.values.value1Text")}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-white p-4 rounded shadow-sm text-center h-100">
                            <div className="fs-2 mb-3" style={{ color: '#F19292' }}>💬</div>
                            <h3 className="fw-semibold mb-3">{t("aboutPage.values.value2Title")}</h3>
                            <p className="text-muted">
                                {t("aboutPage.values.value2Text")}                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-white p-4 rounded shadow-sm text-center h-100">
                            <div className="fs-2 mb-3" style={{ color: '#F19292' }}>🎨</div>
                            <h3 className="fw-semibold mb-3">{t("aboutPage.values.value2Title")}</h3>
                            <p className="text-muted">
                                {t("aboutPage.values.value3Text")}                            </p>
                        </div>
                    </div>
                </div>

                {/* Nuestro Compromiso */}
                <div className="row align-items-center g-5 mb-5">
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-3 pb-2 border-bottom border-2" style={{ borderColor: '#F19292' }}>
                            {t("aboutPage.ourCommitment.title")}
                        </h2>
                        <p className="text-muted lh-lg">
                            {t("aboutPage.ourCommitment.text")}
                            <br /><br />
                            {t("aboutPage.ourCommitment.text2")}
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
                        {t("aboutPage.callToAction.title")}
                    </h2>
                    <p className="text-muted mb-4" style={{ maxWidth: '600px' }}>
                        {t("aboutPage.callToAction.text")}
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;