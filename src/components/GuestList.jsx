import React, { useState, useEffect } from 'react';
import { Table, Button, OverlayTrigger, Tooltip, Card, Badge, Accordion } from 'react-bootstrap';
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
    }, [selectedWeddingId]);

    const deleteGuest = async (guestId) => {
        if (!window.confirm("¿Seguro que quieres eliminar este invitado?")) return;

        try {
            const token = sessionStorage.getItem('auth_token');
            await apiClient.delete(`/api/wedding/${selectedWeddingId}/guest/${guestId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            onGuestDeleted(guestId);
        } catch (error) {
            console.error("Error al eliminar el invitado:", error);
            alert("Hubo un error al intentar eliminar el invitado.");
        }
    };

    return (
        <Card className="mb-4">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Card.Title>Lista de Invitados</Card.Title>
                    <Badge bg="info" pill>
                        {guestCountData}/{guestCount}
                    </Badge>
                </div>

                {guests.length > 0 ? (
                    <div className="table-responsive">
                        <Table striped bordered hover className="mb-0">
                            {/* Desktop table */}
                            <thead className="d-none d-md-table-header-group">
                                <tr>
                                    <th>Nombre</th>
                                    <th>Acompañante</th>
                                    <th>Alergia</th>
                                    <th>Alimentación</th>
                                    <th>Edad</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {guests.map((guest) => (
                                    <React.Fragment key={guest.id}>
                                        {/* Desktop row */}
                                        <tr className="d-none d-md-table-row">
                                            <td style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                                {guest.name} {guest.firstSurname} {guest.secondSurname}
                                                {guest.extraInformation && (
                                                    <OverlayTrigger
                                                        placement="right"
                                                        overlay={<Tooltip id={`tooltip-${guest.id}`}>{guest.extraInformation}</Tooltip>}
                                                    >
                                                        <span style={{ cursor: "pointer", fontSize: "14px", color: "#007bff", fontWeight: "bold", marginLeft: "3px" }}>
                                                            ⓘ
                                                        </span>
                                                    </OverlayTrigger>
                                                )}
                                            </td>
                                            <td>{guest.attendants.length > 0 ? "Sí" : "No"}</td>
                                            <td>{guest.allergy ? guest.allergy : "Ninguna"}</td>
                                            <td>{guest.feeding ? guest.feeding : "Sin preferencias"}</td>
                                            <td className='text-center'>-</td>
                                            <td className='text-center' onClick={() => deleteGuest(guest.id)} style={{ cursor: "pointer", color: "red" }}>🗑️</td>
                                        </tr>

                                        {/* Mobile row */}
                                        <tr className="d-md-none">
                                            <td colSpan="6">
                                                <Accordion>
                                                    <Accordion.Item eventKey={guest.id}>
                                                        <Accordion.Header>
                                                            <div className="d-flex justify-content-between w-100 pe-3">
                                                                <span>
                                                                    {guest.name} {guest.firstSurname}
                                                                </span>
                                                                {guest.attendants.length > 0 && (
                                                                    <Badge bg="secondary" pill>
                                                                        +{guest.attendants.length}
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="mb-2">
                                                                <strong>Nombre completo:</strong> {guest.name} {guest.firstSurname} {guest.secondSurname}
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong>Alergias:</strong> {guest.allergy || "Ninguna"}
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong>Alimentación:</strong> {guest.feeding || "Sin preferencias"}
                                                            </div>
                                                            {guest.extraInformation && (
                                                                <div className="mb-2">
                                                                    <strong>Información adicional:</strong> {guest.extraInformation}
                                                                </div>
                                                            )}
                                                            <div className="d-flex justify-content-end">
                                                                <Button
                                                                    variant="outline-danger"
                                                                    size="sm"
                                                                    onClick={() => deleteGuest(guest.id)}
                                                                >
                                                                    Eliminar
                                                                </Button>
                                                            </div>

                                                            {guest.attendants.length > 0 && (
                                                                <div className="mt-3">
                                                                    <h6>Acompañantes:</h6>
                                                                    <ul className="list-group">
                                                                        {guest.attendants.map((attendant) => (
                                                                            <li key={attendant.id} className="list-group-item">
                                                                                {attendant.name} {attendant.firstSurname} - Edad: {attendant.age}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </td>
                                        </tr>

                                        {guest.attendants.length > 0 && guest.attendants.map((attendant) => (
                                            <tr key={attendant.id} className="d-none d-md-table-row">
                                                <td></td>
                                                <td>{attendant.name} {attendant.firstSurname} {attendant.secondSurname}</td>
                                                <td>{attendant.age}</td>
                                                <td colSpan="3"></td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                ) : (
                    <p className="text-muted">No hay invitados registrados.</p>
                )}
            </Card.Body>
        </Card>
    );
}

export default GuestList;