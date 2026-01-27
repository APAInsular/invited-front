import React from "react";
import Footer from "../../components/Footer";
import usePageTranslation from '../../hooks/usePageTranslation';

const LegalNotice = () => {
    const { translate: t, loadingTranslation } = usePageTranslation('legalNoticePage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    return (
        <>
            <div className="container mx-auto" style={{ marginTop: "150px" }}>
                <h1 className="text-3xl font-bold mb-4">{t('legalNotice')}</h1>
                <p className="text-gray-600 mb-2">{t('updated')}</p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{t('introduction.title')}</h2>
                    <p><strong>{t('introduction.companyName')}</strong> {t('introduction.companyNameText')}</p>
                    <p><strong>{t('introduction.registeredAddress')}</strong> {t('introduction.registeredAddressText')}</p>
                    <p><strong>{t('introduction.office')}</strong> {t('introduction.officeText')}</p>
                    <p><strong>{t('introduction.cif')}</strong> {t('introduction.cifText')}</p>
                    <p><strong>{t('introduction.phone')}</strong> {t('introduction.phoneText')}</p>
                    <p><strong>{t('introduction.email')}</strong> {t('introduction.emailText')}</p>
                    <p><strong>{t('introduction.domainName')}</strong> <a href="https://invited.es" className="text-blue-500">{t('introduction.domainNameText')}</a></p>
                    <p><strong>{t('introduction.registration')}</strong> {t('introduction.registrationText')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{t('object.title')}</h2>
                    <p>{t('object.text')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{t('intellectual.title')}</h2>
                    <p>{t('intellectual.text')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{t('terms.title')}</h2>
                    <p>{t('terms.text')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{t('disclaimer.title')}</h2>
                    <p><strong>{t('disclaimer.content')}</strong> {t('disclaimer.contentText')}</p>
                    <p><strong>{t('disclaimer.links')}</strong> {t('disclaimer.linksText')}</p>
                    <p><strong>{t('disclaimer.availability')}</strong> {t('disclaimer.availabilityText')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{t('law.title')}</h2>
                    <p>{t('law.text')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{t('modification.title')}</h2>
                    <p>{t('modification.text')}</p>
                </section>

            </div>
            <Footer></Footer>
        </>
    );
}

export default LegalNotice;