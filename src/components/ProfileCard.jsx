import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { PersonFill, HeartFill, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';
import usePageTranslation from '../hooks/usePageTranslation';

const ProfileCard = ({ user, onEdit, weddingDate }) => {
    const { t, loadingTranslation } = usePageTranslation('dashboardPage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }
    return (
        <Card className="shadow-sm mb-4">
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
                                            <td>{guest.attendants.length > 0 ? t("labels.yes") : t("labels.no")}</td>
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

            <style jsx>{`
        .avatar-lg {
          width: 60px;
          height: 60px;
          font-size: 24px;
          font-weight: bold;
        }
        .profile-details {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 12px;
        }
        .detail-item {
          display: flex;
          align-items: center;
          padding: 6px 0;
        }
        .detail-item:not(:last-child) {
          border-bottom: 1px solid #e9ecef;
        }
        @media (max-width: 768px) {
          .avatar-lg {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }
        }
      `}</style>
        </Card>
    );
};

export default ProfileCard;