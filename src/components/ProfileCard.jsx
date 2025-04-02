import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { PersonFill, HeartFill, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

const ProfileCard = ({ user, onEdit, weddingDate }) => {
    return (
        <Card className="shadow-sm mb-4">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <h4 className="mb-1">
                            <PersonFill className="text-primary me-2" />
                            Perfil de Usuario
                        </h4>
                        <Badge bg="light" text="dark" className="text-uppercase">
                            Plan Premium
                        </Badge>
                    </div>
                    <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={onEdit}
                    >
                        Editar
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
                        <p className="text-muted mb-0">y {user?.partner?.name} {user?.partner?.firstSurname}</p>
                    </div>
                </div>

                <div className="profile-details">
                    <div className="detail-item">
                        <EnvelopeFill className="text-muted me-2" />
                        <span>{user?.email || 'No especificado'}</span>
                    </div>
                    <div className="detail-item">
                        <TelephoneFill className="text-muted me-2" />
                        <span>{user?.phone || 'No especificado'}</span>
                    </div>
                    <div className="detail-item">
                        <HeartFill className="text-danger me-2" />
                        <span>En Invited desde {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</span>
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