import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { LanguageProvider } from '../context/LanguageContext';
import NavigationBar from '../components/NavigationBar';

const AppLayout = () => {
    const { lang } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Verificar si la ruta actual tiene un idioma válido
    useEffect(() => {
        if (!["es", "en"].includes(lang)) {
            // Si el idioma en la URL no es válido, redirigir a español
            const pathParts = location.pathname.split('/');
            pathParts[1] = 'es';
            navigate(pathParts.join('/'), { replace: true });
        }
    }, [lang, location, navigate]);

    const pathname = location.pathname;
    const regex = /\/invitacion\/[^\/]+\/[^\/]+/;
    const isInvitationRoute = regex.test(pathname);

    return (
        <LanguageProvider>
            <div className='d-flex flex-column min-vh-100'>
                {!isInvitationRoute && <NavigationBar />}
                <Outlet />
            </div>
        </LanguageProvider>
    );
};

export default AppLayout;