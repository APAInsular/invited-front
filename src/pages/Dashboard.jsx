import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';
import InvitationList from '../components/InvitationList';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Dashboard() {
    // Estado para manejar qué componente mostrar
    const [activeComponent, setActiveComponent] = useState('users');

    // Función para cambiar el componente activo
    const handleComponentChange = (component) => {
        setActiveComponent(component);
    };

    return (
        <Container fluid className='mt-5'>
            <Row>
                <Col sm={3} className="bg-light">
                    {/* Pasamos handleComponentChange como prop a Sidebar */}
                    <Sidebar onSelectComponent={handleComponentChange} />
                </Col>
                <Col sm={9} className="p-3">
                    {activeComponent === 'users' && <UserList />}
                    {activeComponent === 'invitations' && <InvitationList />}
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
