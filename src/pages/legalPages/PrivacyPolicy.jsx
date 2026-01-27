import React from "react";
import Footer from "../../components/Footer";
import usePageTranslation from "../../hooks/usePageTranslation";

const PrivacyPolicy = () => {
    const { translate: t, loadingTranslation } = usePageTranslation('politicsPage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    return (
        <>
            <div className="container mx-auto shadow-md rounded-xl" style={{ marginTop: "90px" }}>
                <h1 className="text-3xl font-bold mb-4">{t('privacyPolicy')}</h1>
                <p className="text-gray-600 mb-2">{t('updated')}</p>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{t('controllerIdentification.title')}</h2>
                    <p><strong>{t('controllerIdentification.responsible')}</strong> {t('controllerIdentification.responsibleText')}</p>
                    <p><strong>{t('controllerIdentification.registration')}</strong> {t('controllerIdentification.registrationText')}</p>
                    <p><strong>{t('controllerIdentification.cif')}</strong> {t('controllerIdentification.cifText')}</p>
                    <p><strong>{t('controllerIdentification.registeredAddress')}</strong> {t('controllerIdentification.registeredAddressText')}</p>
                    <p><strong>{t('controllerIdentification.office')}</strong> {t('controllerIdentification.officeText')}</p>
                    <p><strong>{t('controllerIdentification.email')}</strong> {t('controllerIdentification.emailText')}</p>
                    <p><strong>{t('controllerIdentification.website')}</strong> <a href="https://invited.es" className="text-blue-500 hover:underline">{t('controllerIdentification.websiteText')}</a></p>
                    <p>{t('controllerIdentification.description')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{t('collectedData.title')}</h2>
                    <p>{t('collectedData.intro')}</p>
                    <ul className="list-disc ml-6">
                        <li>{t('collectedData.type1')}</li>
                        <li>{t('collectedData.type2')}</li>
                        <li>{t('collectedData.type3')}</li>
                        <li>{t('collectedData.type4')}</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{t('purpose.title')}</h2>
                    <p>{t('purpose.intro')}</p>
                    <ul className="list-disc ml-6">
                        <li>{t('purpose.purpose1')}</li>
                        <li>{t('purpose.purpose2')}</li>
                        <li>{t('purpose.purpose3')}</li>
                        <li>{t('purpose.purpose4')}</li>
                        <li>{t('purpose.purpose5')}</li>
                        <li>{t('purpose.purpose6')}</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{t('lawfulBasis.title')}</h2>
                    <p>{t('lawfulBasis.intro')}</p>
                    <ul className="list-disc ml-6">
                        <li>{t('lawfulBasis.basis1')}</li>
                        <li>{t('lawfulBasis.basis2')}</li>
                        <li>{t('lawfulBasis.basis3')}</li>
                        <li>{t('lawfulBasis.basis4')}</li>
                        <li>{t('lawfulBasis.basis5')}</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{t('dataRetention.title')}</h2>
                    <p>{t('dataRetention.text')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{t('dataDisclosure.title')}</h2>
                    <p>{t('dataDisclosure.intro')}</p>
                    <ul className="list-disc ml-6">
                        <li>{t('dataDisclosure.disclosure1')}</li>
                        <li>{t('dataDisclosure.disclosure2')}</li>
                        <li>{t('dataDisclosure.disclosure3')}</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{t('userRights.title')}</h2>
                    <p>{t('userRights.intro')}</p>
                    <ul className="list-disc ml-6">
                        <li>{t('userRights.right1')}</li>
                        <li>{t('userRights.right2')}</li>
                        <li>{t('userRights.right3')}</li>
                        <li>{t('userRights.right4')}</li>
                        <li>{t('userRights.right5')}</li>
                        <li>{t('userRights.right6')}</li>
                    </ul>
                    <p>{t('userRights.additionalText')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{t('dataSecurity.title')}</h2>
                    <p>{t('dataSecurity.text')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{t('cookies.title')}</h2>
                    <p>{t('cookies.text')}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">{t('policyUpdate.title')}</h2>
                    <p>{t('policyUpdate.text')}</p>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
}

export default PrivacyPolicy;