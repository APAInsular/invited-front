import React from "react";
import Footer from "../components/Footer";
import usePageTranslation from '../hooks/usePageTranslation';

const Crowdfunding = () => {
    const { t, loadingTranslation } = usePageTranslation('crowfundingPage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    return (
        <div className="container-fluid px-0">
            {/* Bootstrap CSS */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />

            {/* Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />

            {/* Estilos personalizados */}
            <style>{`
                :root {
                    --rosa-claro: #fddede;
                    --rosa-fuerte: #f97c7c;
                    --gris-medio: #555555;
                    --gris-claro: #f7f7f7;
                    --blanco: #ffffff;
                    --gris-texto: #333333;
                }
                
                body {
                    color: var(--gris-texto);
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.6;
                }
                
                h1, h2, h3, h4, h5, h6,
                .display-1, .display-2, .display-3, .display-4,
                .hero h1, section h2 {
                    font-family: 'Playfair Display', serif;
                    font-weight: 600;
                }
                
                .hero h1 {
                    font-weight: 700;
                }
                
                .bg-rosa-claro {
                    background-color: var(--rosa-claro);
                }
                
                .bg-rosa-fuerte {
                    background-color: var(--rosa-fuerte);
                }
                
                .text-rosa-fuerte {
                    color: var(--rosa-fuerte);
                }
                
                .btn-primary {
                    background-color: var(--rosa-fuerte);
                    border-color: var(--rosa-fuerte);
                }
                
                .btn-primary:hover {
                    background-color: var(--gris-medio);
                    border-color: var(--gris-medio);
                }
                
                .navbar {
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                
                .hero {
                    background: linear-gradient(rgba(253, 222, 222, 0.8), rgba(253, 222, 222, 0.9)), 
                                url('https://www.invited.es/images/hero-bg.jpg');
                    background-size: cover;
                    background-position: center;
                    padding: 6rem 0;
                }
                
                .feature-card {
                    transition: transform 0.3s;
                    border-radius: 10px;
                }
                
                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }
                
                .feature-card img {
                    height: 80px;
                    margin-bottom: 1rem;
                }
                
                .video-wrapper {
                    position: relative;
                    padding-bottom: 56.25%; /* 16:9 */
                    height: 0;
                    overflow: hidden;
                }
                
                .video-wrapper iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
                
                .timeline-crowfunding {
                    position: relative;
                    padding-left: 2rem; /* Aumentamos el padding para dar más espacio */
                }

                .timeline-crowfunding::before {
                    content: '';
                    position: absolute;
                    left: 1rem; /* Ajustamos a 1rem (16px) que es mitad de 2rem */
                    top: 0;
                    height: 100%;
                    width: 2px;
                    background: var(--rosa-fuerte);
                }

                .timeline-item-crowfunding {
                    position: relative;
                    padding-bottom: 2rem;
                }

                .timeline-item-crowfunding::before {
                    content: '';
                    position: absolute;
                    left: -0.9rem; /* Ajustamos a -1rem para alinear con la línea */
                    top: 0.5rem; /* Pequeño ajuste vertical para mejor alineación */
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: var(--blanco);
                    border: 3px solid var(--rosa-fuerte);
                    transform: translateX(-50%); /* Centrado perfecto */
                }           
                
                .reward-card {
                    border: 1px solid var(--rosa-claro);
                    border-radius: 10px;
                    transition: all 0.3s;
                }
                
                .reward-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                    border-color: var(--rosa-fuerte);
                }
                
                .reward-card h3 {
                    border-bottom: 1px solid var(--rosa-claro);
                    padding-bottom: 1rem;
                    color: var(--rosa-fuerte);
                }
                
                .reward-card ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                
                .reward-card ul li {
                    position: relative;
                    padding-left: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                
                .reward-card ul li::before {
                    content: '✓';
                    color: var(--rosa-fuerte);
                    position: absolute;
                    left: 0;
                }
            `}</style>

            <div className="container-fluid px-0">
                {/* Hero Section */}
                <section className="hero text-center">
                    <div className="container py-5">
                        <h1 className="display-4 fw-bold mb-4">{t('crowdfundingPage.hero.title')}</h1>
                        <p className="lead mb-4 mx-auto" style={{ maxWidth: "600px" }}>
                            {t('crowdfundingPage.hero.description')}
                        </p>
                        <a
                            href={t('crowdfundingPage.hero.link')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg px-4"
                        >
                            {t('crowdfundingPage.hero.button')}
                        </a>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-5 my-4">
                    <div className="container">
                        <h2 className="text-center mb-5">{t('crowdfundingPage.features.title')}</h2>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card p-4 h-100 bg-white text-center">
                                    <i className={`${t('crowdfundingPage.features.feature1.icon')} text-rosa-fuerte`} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}></i>
                                    <h4 className="mb-3">{t('crowdfundingPage.features.feature1.title')}</h4>
                                    <p>{t('crowdfundingPage.features.feature1.text')}</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card p-4 h-100 bg-white text-center">
                                    <i className={`${t('crowdfundingPage.features.feature2.icon')} text-rosa-fuerte`} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}></i>
                                    <h4 className="mb-3">{t('crowdfundingPage.features.feature2.title')}</h4>
                                    <p>{t('crowdfundingPage.features.feature2.text')}</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card p-4 h-100 bg-white text-center">
                                    <i className={`${t('crowdfundingPage.features.feature3.icon')} text-rosa-fuerte`} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}></i>
                                    <h4 className="mb-3">{t('crowdfundingPage.features.feature3.title')}</h4>
                                    <p>{t('crowdfundingPage.features.feature3.text')}</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="feature-card p-4 h-100 bg-white text-center">
                                    <i className={`${t('crowdfundingPage.features.feature4.icon')} text-rosa-fuerte`} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}></i>
                                    <h4 className="mb-3">{t('crowdfundingPage.features.feature4.title')}</h4>
                                    <p>{t('crowdfundingPage.features.feature4.text')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inspiration Section */}
                <section className="py-5 bg-rosa-claro">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h3 className="text-rosa-fuerte mb-3">{t('crowdfundingPage.inspiration.title1')}</h3>
                                <p className="mb-4">
                                    {t('crowdfundingPage.inspiration.paragraph1')}
                                </p>

                                <h3 className="text-rosa-fuerte mb-3">{t('crowdfundingPage.inspiration.title2')}</h3>
                                <p className="mb-3">{t('crowdfundingPage.inspiration.paragraph2')}</p>
                                <ul className="mb-4">
                                    <li className="mb-2">{t('crowdfundingPage.inspiration.goal1')}</li>
                                    <li className="mb-2">{t('crowdfundingPage.inspiration.goal2')}</li>
                                    <li className="mb-2">{t('crowdfundingPage.inspiration.goal3')}</li>
                                </ul>
                                <p className="mb-4">{t('crowdfundingPage.inspiration.paragraph3')}</p>

                                <h3 className="text-rosa-fuerte mb-3">{t('crowdfundingPage.inspiration.title3')}</h3>
                                <ul>
                                    <li className="mb-2">{t('crowdfundingPage.inspiration.commitment1')}</li>
                                    <li className="mb-2">{t('crowdfundingPage.inspiration.commitment2')}</li>
                                    <li className="mb-2">{t('crowdfundingPage.inspiration.commitment3')}</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <img
                                    src={t('crowdfundingPage.inspiration.imageSrc')}
                                    alt={t('crowdfundingPage.inspiration.imageAlt')}
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">{t('crowdfundingPage.video.title')}</h2>
                        <div className="ratio ratio-16x9">
                            <video
                                controls
                                className="object-fit-contain"
                                poster={t('crowdfundingPage.video.poster')}
                            >
                                <source src={t('crowdfundingPage.video.videoSrc')} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-5 bg-light">
                    <div className="container">
                        <h2 className="text-center mb-5">{t('crowdfundingPage.timeline.title')}</h2>
                        <div className="d-flex justify-content-center">
                            <div className="timeline-crowfunding" style={{ maxWidth: '800px' }}>
                                <div className="timeline-item-crowfunding position-relative ps-4 mb-4">
                                    <h4 className="text-rosa-fuerte mb-2">{t('crowdfundingPage.timeline.step1.date')}</h4>
                                    <p className="mb-0">{t('crowdfundingPage.timeline.step1.description')}</p>
                                </div>
                                <div className="timeline-item-crowfunding position-relative ps-4 mb-4">
                                    <h4 className="text-rosa-fuerte mb-2">{t('crowdfundingPage.timeline.step2.date')}</h4>
                                    <p className="mb-0">{t('crowdfundingPage.timeline.step2.description')}</p>
                                </div>
                                <div className="timeline-item-crowfunding position-relative ps-4 mb-4">
                                    <h4 className="text-rosa-fuerte mb-2">{t('crowdfundingPage.timeline.step3.date')}</h4>
                                    <p className="mb-0">{t('crowdfundingPage.timeline.step3.description')}</p>
                                </div>
                                <div className="timeline-item-crowfunding position-relative ps-4 mb-4">
                                    <h4 className="text-rosa-fuerte mb-2">{t('crowdfundingPage.timeline.step4.date')}</h4>
                                    <p className="mb-0">{t('crowdfundingPage.timeline.step4.description')}</p>
                                </div>
                                <div className="timeline-item-crowfunding position-relative ps-4 mb-4">
                                    <h4 className="text-rosa-fuerte mb-2">{t('crowdfundingPage.timeline.step5.date')}</h4>
                                    <p className="mb-0">{t('crowdfundingPage.timeline.step5.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rewards Section */}
                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">{t('crowdfundingPage.rewards.title')}</h2>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4">
                                <div className="reward-card p-4 h-100 bg-white">
                                    <h3 className="mb-3">{t('crowdfundingPage.rewards.reward1.title')}</h3>
                                    <ul className="mb-0">
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward1.item1')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward1.item2')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward1.item3')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward1.item4')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward1.item5')}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="reward-card p-4 h-100 bg-white">
                                    <h3 className="mb-3">{t('crowdfundingPage.rewards.reward2.title')}</h3>
                                    <ul className="mb-0">
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward2.item1')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward2.item2')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward2.item3')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward2.item4')}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="reward-card p-4 h-100 bg-white">
                                    <h3 className="mb-3">{t('crowdfundingPage.rewards.reward3.title')}</h3>
                                    <ul className="mb-0">
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward3.item1')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward3.item2')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward3.item3')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward3.item4')}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="reward-card p-4 h-100 bg-white">
                                    <h3 className="mb-3">{t('crowdfundingPage.rewards.reward4.title')}</h3>
                                    <ul className="mb-0">
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward4.item1')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward4.item2')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward4.item3')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward4.item4')}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="reward-card p-4 h-100 bg-white">
                                    <h3 className="mb-3">{t('crowdfundingPage.rewards.reward5.title')}</h3>
                                    <ul className="mb-0">
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward5.item1')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward5.item2')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward5.item3')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward5.item4')}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="reward-card p-4 h-100 bg-white">
                                    <h3 className="mb-3">{t('crowdfundingPage.rewards.reward6.title')}</h3>
                                    <ul className="mb-0">
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward6.item1')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward6.item2')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward6.item3')}</li>
                                        <li className="mb-2">{t('crowdfundingPage.rewards.reward6.item4')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />

            {/* Bootstrap JS */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
};

export default Crowdfunding;