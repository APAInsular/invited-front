import axios from 'axios';
import Cookies from 'js-cookie';

// Configurar Axios
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL, // Usa la variable de entorno o un valor por defecto
    withCredentials: true, // Permitir el envío de cookies en las solicitudes
    headers: {
        'Content-Type': 'application/json',
    },
});

// Función para obtener el token CSRF
export const getCsrfToken = async () => {
    try {
        // Solicitar el token CSRF desde Laravel Sanctum
        await apiClient.get('/sanctum/csrf-cookie');

        // Obtener el token CSRF de las cookies
        const csrfToken = Cookies.get('XSRF-TOKEN');

        // Añadir dinámicamente el token CSRF a los encabezados de Axios
        apiClient.defaults.headers['X-XSRF-TOKEN'] = csrfToken;

        console.log('CSRF token obtenido y configurado en Axios');
    } catch (error) {
        console.error('Error obteniendo el token CSRF:', error);
    }
};

export const fetchUser = async () => {
    try {
        const token = sessionStorage.getItem('auth_token');

        if (!token) {
            // Si no hay token, no intentamos obtener el usuario
            console.log("No hay usuario autenticado.");
            return;
        }

        const response = await apiClient.get('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`,
                withCredentials: true
            },
        });

        console.log('Usuario:', response.data);
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.log("Usuario no autorizado. Redirigiendo al login...");
            // Aquí puedes redirigir al login o mostrar un mensaje al usuario
        } else {
            console.error("Error al obtener el usuario:", error);
        }
    }
};

export default apiClient;
