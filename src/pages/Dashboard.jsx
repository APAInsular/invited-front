import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';
import InvitationList from '../components/InvitationList';
import { Container, Row, Col } from 'react-bootstrap';

function Dashboard() {
    // Datos simulados de usuarios
    const users = [
        { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'Admin' },
        { id: 2, name: 'María López', email: 'maria@example.com', role: 'Usuario' },
        { id: 3, name: 'Carlos Gómez', email: 'carlos@example.com', role: 'Moderador' }
    ];

    // Datos simulados de invitaciones
    const invitations = [
        { id: 1, email: 'invitado1@example.com', status: 'Pendiente' },
        { id: 2, email: 'invitado2@example.com', status: 'Aceptada' },
        { id: 3, email: 'invitado3@example.com', status: 'Rechazada' }
    ];

    // Estado para manejar qué componente mostrar
    const [activeComponent, setActiveComponent] = useState('users');

    return (
        <Container fluid className="mt-5">
            <Row>
                <Col sm={3} className="bg-light">
                    <Sidebar onSelectComponent={setActiveComponent} />
                </Col>
                <Col sm={9} className="p-3">
                    {activeComponent === 'users' && <UserList users={users} />}
                    {activeComponent === 'invitations' && <InvitationList invitations={invitations} />}
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
