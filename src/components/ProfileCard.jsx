import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { PersonFill, HeartFill, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';
import usePageTranslation from '../hooks/usePageTranslation';

const ProfileCard = ({ user, onEdit, weddingDate }) => {
    const { translate: t, loadingTranslation } = usePageTranslation('dashboardPage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }
    return (
        <Card className="shadow-sm mb-4">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <h4 className="mb-1">
                            <PersonFill className="text-primary me-2" />
                            {t("sections.userProfile")}
                        </h4>
                        <Badge bg="light" text="dark" className="text-uppercase">
                            {t("userProfile.planBadge")}
                        </Badge>
                    </div>
                    <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={onEdit}
                    >
                        {t("buttons.edit")}
                    </Button>
                </div>

                <div className="d-flex align-items-center mb-3">
                    <div className="avatar-lg bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h5 className="mb-0">
                            {user?.name} {user?.firstSurname}
                        </h5>
                        <p className="text-muted mb-0">
                            {t("sections.partnerData")} {user?.partner?.name} {user?.partner?.firstSurname}
                        </p>
                    </div>
                </div>

                <div className="profile-details">
                    <div className="detail-item">
                        <EnvelopeFill className="text-muted me-2" />
                        <span>{user?.email || t("labels.notSpecified")}</span>
                    </div>
                    <div className="detail-item">
                        <TelephoneFill className="text-muted me-2" />
                        <span>{user?.phone || t("labels.notSpecified")}</span>
                    </div>
                    <div className="detail-item">
                        <HeartFill className="text-danger me-2" />
                        <span>
                            {t("userProfile.memberSince")} {new Date().toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
                        </span>
                    </div>
                </div>
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