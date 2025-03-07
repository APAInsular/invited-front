import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';
import InvitationList from '../components/InvitationList';
import WeddingList from '../components/WeddingList';
import { Container, Row, Col } from 'react-bootstrap';
import apiClient from '../config/axiosConfig';

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [weddings, setWeddings] = useState([]);
    const [error, setError] = useState(null);
    const [activeComponent, setActiveComponent] = useState('users');
    const [selectedWeddingId, setSelectedWeddingId] = useState(null); // Estado para almacenar el ID de la boda seleccionada

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Obtener datos de usuarios
                const userResponse = await apiClient.get('/api/users');
                setUsers(userResponse.data);

                // Obtener datos de bodas/invitaciones
                const weddingResponse = await apiClient.get('/api/weddings');
                setWeddings(weddingResponse.data);

            } catch (err) {
                setError('Error al obtener datos de la API.');
                console.error(err);
            }
        };

        fetchData();
    }, []);

    // Filtrar la boda seleccionada
    const selectedWedding = weddings.find(wedding => wedding.id === selectedWeddingId);

    return (
        <Container fluid className="mt-5">
            <Row>
                <Col sm={3} className="bg-light mt-5">
                    <Sidebar onSelectComponent={setActiveComponent} />
                </Col>
                <Col sm={9} className="p-3 mt-5">
                    {error && <p className="text-danger">{error}</p>}
                    {activeComponent === 'users' && <UserList users={users} />}
                    {activeComponent === 'weddings' && (
                        <>
                            <WeddingList
                                weddings={weddings}
                                onWeddingSelect={setSelectedWeddingId} // Pasar la función al componente WeddingList
                            />
                            {selectedWeddingId && selectedWedding && (
                                <div>
                                    <h4>Detalles de la Boda</h4>
                                    <p>ID de la boda: {selectedWedding.id}</p>
                                    <p>Nombre: {selectedWedding.user.name} {selectedWedding.user.firstSurname} {selectedWedding.user.secondSurname}</p>
                                    <p>Pareja: {selectedWedding.user.partner.name} {selectedWedding.user.partner.firstSurname} {selectedWedding.user.partner.secondSurname}</p>
                                    <p>Fecha: {selectedWedding.weddingDate}</p>

                                    {/* Mostrar los eventos de la boda */}
                                    <h5>Eventos de la Boda</h5>
                                    {selectedWedding.events && selectedWedding.events.length > 0 ? (
                                        <ul>
                                            {selectedWedding.events.map((event, index) => (
                                                <li key={index}>
                                                    <strong>{event.name}</strong> - {event.date}
                                                    <p>{event.description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No hay eventos programados para esta boda.</p>
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
}


export default Dashboard;
