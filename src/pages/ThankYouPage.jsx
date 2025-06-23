import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import usePageTranslation from "../hooks/usePageTranslation";

export default function ThankYouPage() {
    const { t, loadingTranslation } = usePageTranslation('thankYouPage');
    const navigate = useNavigate();

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-6 mt-5">
            <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {t('title')}
            </motion.h1>
            <motion.p
                className="text-lg text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {t('message')}
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <Button onClick={() => navigate("/")}>{t('button')}</Button>
            </motion.div>
        </div>
    );
}
