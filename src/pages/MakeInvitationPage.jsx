import React, { useState, useEffect } from 'react';
import apiClient from '../config/axiosConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

const MakeInvitationPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem('auth_token');

                if (!token) {
                    console.log("No hay usuario autenticado.");
                    return;
                }

                const response = await apiClient.get('/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(response.data);
                console.log('Usuario:', response.data);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log("Usuario no autorizado. Redirigiendo al login...");
                } else {
                    console.error("Error al obtener el usuario:", error);
                }
            }
        };
        fetchUser();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        apiClient.post('/api/crear-invitacion', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
            },
        })
            .then(response => {
                console.log('Invitación creada:', response.data);
            })
            .catch(error => {
                console.error('Error al crear la invitación:', error);
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Crear Invitación de Boda</h2>
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="mb-3">
                    <label className="form-label">Nombre del Novio:</label>
                    <input type="text" name="nombre_novio" className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Nombre de la Novia:</label>
                    <input type="text" name="nombre_novia" className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Fecha de la Boda:</label>
                    <input type="date" name="fecha_boda" className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Plantilla:</label>
                    <select name="plantilla" className="form-select" required>
                        <option value="plantilla1">Plantilla 1</option>
                        <option value="plantilla2">Plantilla 2</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Itinerario:</label>
                    <textarea name="itinerario" className="form-control" rows="4" required placeholder="Describe el itinerario de la boda..."></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Tipo de Alimentación:</label>
                    <select name="alimentacion" className="form-select" required>
                        <option value="vegetariana">Vegetariana</option>
                        <option value="vegana">Vegana</option>
                        <option value="mixta">Mixta</option>
                        <option value="otra">Otra</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Lugar del Evento:</label>
                    <input type="text" name="lugar_evento" className="form-control" required placeholder="Introduce el lugar del evento" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Número de Invitados:</label>
                    <input type="number" name="numero_invitados" className="form-control" required placeholder="Introduce el número de invitados" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Mensaje Personalizado:</label>
                    <textarea name="mensaje_personalizado" className="form-control" rows="4" placeholder="Escribe un mensaje personalizado..."></textarea>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Crear Invitación</button>
                </div>
            </form>
        </div>
    );
};

export default MakeInvitationPage