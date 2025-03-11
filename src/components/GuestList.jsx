import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import apiClient from '../config/axiosConfig';

function GuestList({ guestCount, selectedWeddingId, guests, onGuestDeleted }) {
    const [guestCountData, setGuestCountData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchWeddings = async () => {
            try {
                const response = await apiClient.get(`/api/wedding/${selectedWeddingId}/numeroInvitados`);
                setGuestCountData(response.data.total_guests_and_attendants);
            } catch (err) {
                setError('Error al obtener bodas.');
            }
        };
        fetchWeddings();
    }, [guestCountData]);

    const deleteGuest = async (guestId) => {
        if (!window.confirm("¿Seguro que quieres eliminar este invitado?")) return;

        try {
            const token = sessionStorage.getItem('auth_token');

            await apiClient.delete(`/api/wedding/${selectedWeddingId}/guest/${guestId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            // Llamar a la función del padre para actualizar la lista de invitados
            onGuestDeleted(guestId);
        } catch (error) {
            console.error("Error al eliminar el invitado:", error);
            alert("Hubo un error al intentar eliminar el invitado.");
        }
    };

    return (
        <div>
            <h3 className='mt-2'>Lista de Invitados</h3>
            <h6>{guestCountData}/{guestCount}</h6>
            {guests.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Acompañante</th>
                            <th>Edad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guests.map((guest) => (
                            <React.Fragment key={guest.id}>
                                <tr>
                                    <td>{guest.name} {guest.firstSurname} {guest.secondSurname}</td>
                                    <td>{guest.attendants.length > 0 ? "Si" : "No"}</td>
                                    <td></td>
                                    <td onClick={() => deleteGuest(guest.id)} style={{ cursor: "pointer", color: "red" }}>🗑️</td>
                                </tr>
                                {guest.attendants.length > 0 && guest.attendants.map((attendant) => (
                                    <tr key={attendant.id}>
                                        <td></td>
                                        <td>{attendant.name} {attendant.firstSurname} {attendant.secondSurname}</td>
                                        <td>{attendant.age}</td>
                                        <td></td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No hay invitados registrados.</p>
            )}
        </div>
    );
}

export default GuestList;
