import React from "react";
import Footer from "../../components/Footer";
import usePageTranslation from '../../hooks/usePageTranslation';

const ConditionsOfUse = () => {
    const { t, loadingTranslation } = usePageTranslation('termsOfUsePage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    return (
        <>
            <div className="container mx-auto" style={{ marginTop: "90px" }}>
                <h1 className="text-2xl font-bold mb-4">{t('termsAndConditions')}</h1>
                <p className="text-sm text-gray-600 mb-2">{t('updated')}</p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">{t('introduction.title')}</h2>
                    <p>{t('introduction.paragraph1')}</p>
                    <p>{t('introduction.paragraph2')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">{t('controllerData.title')}</h2>
                    <p><strong>{t('controllerData.responsible')}</strong> {t('controllerData.responsibleText')}</p>
                    <p><strong>{t('controllerData.cif')}</strong> {t('controllerData.cifText')}</p>
                    <p><strong>{t('controllerData.address')}</strong> {t('controllerData.addressText')}</p>
                    <p><strong>{t('controllerData.office')}</strong> {t('controllerData.officeText')}</p>
                    <p><strong>{t('controllerData.email')}</strong> {t('controllerData.emailText')}</p>
                    <p><strong>{t('controllerData.website')}</strong> <a href="https://invited.es" className="text-blue-600">{t('controllerData.websiteText')}</a></p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">{t('object.title')}</h2>
                    <p>{t('object.paragraph1')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">{t('siteUse.title')}</h2>
                    <h3 className="text-lg font-semibold">{t('siteUse.useAllowedTitle')}</h3>
                    <p>{t('siteUse.useAllowedParagraph1')}</p>
                    <p>{t('siteUse.useAllowedParagraph2')}</p>
                    <h3 className="text-lg font-semibold">{t('siteUse.accountSecurityTitle')}</h3>
                    <p>{t('siteUse.accountSecurityParagraph1')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">{t('intellectualProperty.title')}</h2>
                    <p>{t('intellectualProperty.paragraph1')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">{t('liability.title')}</h2>
                    <h3 className="text-lg font-semibold">{t('liability.availabilityTitle')}</h3>
                    <p>{t('liability.availabilityParagraph1')}</p>
                    <p>{t('liability.availabilityParagraph2')}</p>
                    <h3 className="text-lg font-semibold">{t('liability.contentLinksTitle')}</h3>
                    <p>{t('liability.contentLinksParagraph1')}</p>
                    <p>{t('liability.contentLinksParagraph2')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">{t('contracting.title')}</h2>
                    <p>{t('contracting.paragraph1')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">{t('modifications.title')}</h2>
                    <p>{t('modifications.paragraph1')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">{t('jurisdiction.title')}</h2>
                    <p>{t('jurisdiction.paragraph1')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">{t('contact.title')}</h2>
                    <p>{t('contact.paragraph1')}</p>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
}

export default ConditionsOfUse;