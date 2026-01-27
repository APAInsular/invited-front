import React, { useState, useEffect } from 'react';
import { Table, Button, OverlayTrigger, Tooltip, Card, Badge, Accordion } from 'react-bootstrap';
import apiClient from '../config/axiosConfig';
import usePageTranslation from '../hooks/usePageTranslation';

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

    const { translate: t, loadingTranslation } = usePageTranslation('dashboardPage');


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
    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

    return (
        <Card className="mb-4">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Card.Title>{t("sections.guestList")}</Card.Title>
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
                                    <th>{t("labels.guestName")}</th>
                                    <th>{t("labels.guestAccompanied")}</th>
                                    <th>{t("labels.guestAllergy")}</th>
                                    <th>{t("labels.guestFeeding")}</th>
                                    <th>{t("labels.guestAge")}</th>
                                    <th>{t("labels.guestAction")}</th>
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
                                            <td>{guest.allergy ? guest.allergy : t("labels.notSpecified")}</td>
                                            <td>{guest.feeding ? guest.feeding : t("labels.notSpecified")}</td>
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
                                                                <strong>{t("guestList.mobileDetails.fullName")}</strong> {guest.name} {guest.firstSurname} {guest.secondSurname}
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong>{t("guestList.mobileDetails.allergy")}</strong> {guest.allergy || t("labels.notSpecified")}
                                                            </div>
                                                            <div className="mb-2">
                                                                <strong>{t("guestList.mobileDetails.feeding")}</strong> {guest.feeding || t("labels.notSpecified")}
                                                            </div>
                                                            {guest.extraInformation && (
                                                                <div className="mb-2">
                                                                    <strong>{t("guestList.mobileDetails.extraInfo")}</strong> {guest.extraInformation}
                                                                </div>
                                                            )}
                                                            <div className="d-flex justify-content-end">
                                                                <Button
                                                                    variant="outline-danger"
                                                                    size="sm"
                                                                    onClick={() => deleteGuest(guest.id)}
                                                                >
                                                                    {t("guestList.deleteButton")}
                                                                </Button>
                                                            </div>

                                                            {guest.attendants.length > 0 && (
                                                                <div className="mt-3">
                                                                    <h6>{t("guestList.mobileDetails.companions")}</h6>
                                                                    <ul className="list-group">
                                                                        {guest.attendants.map((attendant) => (
                                                                            <li key={attendant.id} className="list-group-item">
                                                                                {attendant.name} {attendant.firstSurname} - {t("guestList.mobileDetails.companionAge")}: {attendant.age}
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
                    <p className="text-muted">{t("guestList.noGuests")}</p>
                )}
            </Card.Body>
        </Card>

    );
}

export default GuestList;