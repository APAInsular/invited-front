import React, { useState, useEffect } from 'react';
import { Nav, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  HouseDoor,
  CalendarEvent,
  People,
  Envelope,
  Gear,
  ShieldLock
} from 'react-bootstrap-icons';
import apiClient from '../config/axiosConfig';

function Sidebar({ onSelectComponent, isAdmin }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const menuItems = [
    { id: 'dashboard', label: 'Inicio', icon: <HouseDoor className="me-2" />, action: () => navigate('/dashboard') },
    { id: 'weddings', label: 'Mis Bodas', icon: <CalendarEvent className="me-2" />, action: () => onSelectComponent('weddings') },
    { id: 'guests', label: 'Invitados', icon: <People className="me-2" />, action: () => onSelectComponent('guests') },
    { id: 'invitations', label: 'Invitaciones', icon: <Envelope className="me-2" />, action: () => onSelectComponent('invitations') },
    { id: 'settings', label: 'Configuración', icon: <Gear className="me-2" />, action: () => onSelectComponent('settings') }
  ];

  if (isAdmin) {
    menuItems.push({ id: 'admin', label: 'Panel Admin', icon: <ShieldLock className="me-2" />, action: () => onSelectComponent('admin') });
  }





  return (
    <div className="sidebar-container bg-light p-3 h-100 mt-5">
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
            <Nav.Link onClick={item.action} className="d-flex align-items-center py-2 px-3 rounded">
              {item.icon}
              <span className="d-none d-md-inline">{item.label}</span>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default Sidebar;
