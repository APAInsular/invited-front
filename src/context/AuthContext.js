import { createContext, useState, useEffect } from 'react';
import apiClient from '../config/axiosConfig';

// Crear el contexto
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({name: "aaaaaa"});

    // Cargar usuario autenticado al iniciar la app
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem('auth_token');
                if (!token) return;

                const response = await apiClient.get('/api/user', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setUser(response.data);
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            }
        };

        // fetchUser();
    }, []);

    // Función para manejar el login
    const login = (userData, token) => {
        sessionStorage.setItem('auth_token', token);
        // setUser(userData);
    };

    // Función para manejar el logout
    const logout = async () => {
        try {
            const token = sessionStorage.getItem('auth_token');
            await apiClient.post('/api/logout', {}, {
                headers: { Authorization: `Bearer ${token}` }
            });

            sessionStorage.removeItem('auth_token');
            setUser(null);
            window.location.href = '/login';
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
