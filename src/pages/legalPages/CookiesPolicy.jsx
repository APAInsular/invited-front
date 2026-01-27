import React from "react";
import Footer from "../../components/Footer";
import usePageTranslation from '../../hooks/usePageTranslation';

const CookiesPolicy = () => {
    const { translate: t, loadingTranslation } = usePageTranslation('cookiesPage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    return (
        <>
            <div className="container mx-auto shadow-md rounded-lg" style={{ marginTop: "90px" }}>
                <h1 className="text-2xl font-bold mb-4">{t('cookiesPolicy')}</h1>
                <p className="text-gray-600 mb-2">{t('updated')}</p>

                <h2 className="text-xl font-semibold mt-4">{t('whatAreCookies.title')}</h2>
                <p className="text-gray-700">
                    {t('whatAreCookies.text')}
                </p>

                <h2 className="text-xl font-semibold mt-4">{t('cookiesUsed.title')}</h2>
                <p className="text-gray-700">
                    {t('cookiesUsed.text')}
                </p>

                <h3 className="text-lg font-semibold mt-2">{t('cookiesUsed.essentialCookies.title')}</h3>
                <p className="text-gray-700">
                    {t('cookiesUsed.essentialCookies.text')}
                </p>

                <h3 className="text-lg font-semibold mt-2">{t('cookiesUsed.performanceCookies.title')}</h3>
                <p className="text-gray-700">
                    {t('cookiesUsed.performanceCookies.text')}
                </p>

                <h3 className="text-lg font-semibold mt-2">{t('cookiesUsed.functionalityCookies.title')}</h3>
                <p className="text-gray-700">
                    {t('cookiesUsed.functionalityCookies.text')}
                </p>

                <h3 className="text-lg font-semibold mt-2">{t('cookiesUsed.advertisingCookies.title')}</h3>
                <p className="text-gray-700">
                    {t('cookiesUsed.advertisingCookies.text')}
                </p>

                <h2 className="text-xl font-semibold mt-4">{t('cookieManagement.title')}</h2>
                <p className="text-gray-700">
                    {t('cookieManagement.paragraph1')}
                </p>
                <p className="text-gray-700">
                    {t('cookieManagement.paragraph2')}
                </p>
                <h2 className="text-xl font-semibold mt-4">{t('policyChanges.title')}</h2>
                <p className="text-gray-700">
                    {t('policyChanges.text')}
                </p>

                <h2 className="text-xl font-semibold mt-4">{t('contact.title')}</h2>
                <p className="text-gray-700">
                    {t('contact.text')}
                </p>
            </div>
            <Footer></Footer>
        </>
    );
}

export default CookiesPolicy