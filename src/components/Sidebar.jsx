import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
    HouseDoor,
    CalendarEvent,
    People,
    Envelope,
    Gear,
    Gift,
    CashCoin,
    Camera,
    MusicNoteList,
    Map
} from 'react-bootstrap-icons';

function Sidebar({ onSelectComponent }) {
    const navigate = useNavigate();

    const menuItems = [
        { id: 'dashboard', label: 'Inicio', icon: <HouseDoor className="me-2" />, action: () => navigate('/dashboard') },
        { id: 'weddings', label: 'Mis Bodas', icon: <CalendarEvent className="me-2" />, action: () => onSelectComponent('weddings') },
        { id: 'guests', label: 'Invitados', icon: <People className="me-2" />, action: () => onSelectComponent('guests') },
        { id: 'invitations', label: 'Invitaciones', icon: <Envelope className="me-2" /> },
        { id: 'gifts', label: 'Lista de Regalos', icon: <Gift className="me-2" /> },
        { id: 'budget', label: 'Presupuesto', icon: <CashCoin className="me-2" /> },
        { id: 'photography', label: 'Fotografía', icon: <Camera className="me-2" /> },
        { id: 'music', label: 'Música', icon: <MusicNoteList className="me-2" /> },
        { id: 'seating', label: 'Distribución', icon: <Map className="me-2" /> },
        { id: 'settings', label: 'Configuración', icon: <Gear className="me-2" /> }
    ];

    return (
        <div className="sidebar-container bg-light p-3 h-100 mt-4">
            <div className="text-center mb-4">
                <h3 className="text-primary">
                    <span className="d-none d-md-inline">Mi Boda Perfecta</span>
                    <span className="d-md-none">MBP</span>
                </h3>
                <hr className="my-2" />
            </div>

            <Nav variant="pills" className="flex-column">
                {menuItems.map((item) => (
                    <Nav.Item key={item.id} className="mb-2">
                        <Nav.Link
                            onClick={item.action}
                            className="d-flex align-items-center py-2 px-3 rounded"
                            activeClassName="active"
                        >
                            {item.icon}
                            <span className="d-none d-md-inline">{item.label}</span>
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>

            <div className="mt-auto pt-3 border-top">
                <div className="d-flex align-items-center px-3 py-2">
                    <div className="avatar-sm bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2">
                        {String(localStorage.getItem('userName') || 'U').charAt(0).toUpperCase()}
                    </div>
                    <div className="d-none d-md-block">
                        <div className="fw-bold">{localStorage.getItem('userName') || 'Usuario'}</div>
                        <small className="text-muted">Administrador</small>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .sidebar-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          box-shadow: 2px 0 10px rgba(0,0,0,0.1);
        }
        .avatar-sm {
          width: 36px;
          height: 36px;
          font-size: 14px;
        }
        .nav-pills .nav-link.active {
          background-color: #0d6efd;
          color: white;
        }
        .nav-link {
          color: #495057;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          background-color: #e9ecef;
        }
        @media (max-width: 767.98px) {
          .sidebar-container {
            min-height: auto;
          }
        }
      `}</style>
        </div>
    );
}

export default Sidebar;