import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import apiClient from '../config/axiosConfig';
import Sidebar from '../components/Sidebar';
import WeddingList from '../components/WeddingList';
import GuestList from '../components/GuestList';

function Dashboard() {
    const [user, setUser] = useState(null);
    const [weddings, setWeddings] = useState([]);
    const [selectedWeddingId, setSelectedWeddingId] = useState(null);
    const [selectedWedding, setSelectedWedding] = useState(null);
    const [weddingGuest, setWeddingGuest] = useState([]);
    const [error, setError] = useState(null);
    const [activeComponent, setActiveComponent] = useState('weddings');
    const [isLoading, setIsLoading] = useState(true);
    const [showUserModal, setShowUserModal] = useState(false);
    const [showWeddingModal, setShowWeddingModal] = useState(false);
    const [editUserData, setEditUserData] = useState({
        name: '',
        email: '',
        phone: '',
        firstSurname: '',
        secondSurname: '',
        partner: {
            name: '',
            firstSurname: '',
            secondSurname: '',
        }
    });
    const [editWeddingData, setEditWeddingData] = useState({
        location: '',
        weddingDate: '',
        customMessage: '',
        dressCode: '',
        foodType: '',
        guestCount: ''
    });

    const onGuestDeleted = (guestId) => {
        setWeddingGuest((prevGuests) => prevGuests.filter(guest => guest.id !== guestId));
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem('auth_token');
                if (!token) return;
                const response = await apiClient.get('/api/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data);
                setEditUserData(
                    {
                        name: response.data.name,
                        firstSurname: response.data.firstSurname,
                        secondSurname: response.data.secondSurname,
                        phone: response.data.phone,
                        email: response.data.email,
                        partner: {
                            name: response.data.partner.name,
                            firstSurname: response.data.partner.firstSurname,
                            secondSurname: response.data.partner.secondSurname,
                        }
                    }
                );
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        if (user) {
            const fetchWeddings = async () => {
                try {
                    const response = await apiClient.get(`/api/user/${user.id}/weddings`);
                    setWeddings(response.data.weddings);
                    setIsLoading(false);
                } catch (err) {
                    setError('Error al obtener bodas.');
                }
            };
            fetchWeddings();
        }
    }, [user]);

    useEffect(() => {
        if (selectedWeddingId) {
            const fetchGuests = async () => {
                try {
                    const response = await apiClient.get(`/api/wedding/${selectedWeddingId}/invitados`);
                    setSelectedWedding(response.data.wedding);
                    setWeddingGuest(response.data.guests);
                    setEditWeddingData({
                        location: {
                            city: response.data.wedding.location.city,
                            country: response.data.wedding.location.country,
                        },
                        weddingDate: response.data.wedding.weddingDate,
                        customMessage: response.data.wedding.customMessage,
                        dressCode: response.data.wedding.dressCode,
                        foodType: response.data.wedding.foodType,
                        guestCount: response.data.wedding.guestCount
                    });
                } catch (err) {
                    setError('Error al obtener invitados.');
                }
            };
            fetchGuests();
        }
    }, [selectedWeddingId]);

    const handleShowUserModal = () => setShowUserModal(true);
    const handleCloseUserModal = () => setShowUserModal(false);
    const handleShowWeddingModal = () => setShowWeddingModal(true);
    const handleCloseWeddingModal = () => setShowWeddingModal(false);

    const handleWeddingInputChange = (e) => {
        setEditWeddingData({ ...editWeddingData, [e.target.name]: e.target.value });
    };

    const handleSaveUserChanges = async () => {
        try {
            const token = sessionStorage.getItem('auth_token');
            await apiClient.put(`/api/users/${user.id}`, editUserData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser({ ...user, ...editUserData });
            handleCloseUserModal();
        } catch (err) {
            console.error('Error al actualizar usuario:', err);
        }
    };

    const handleSaveWeddingChanges = async () => {
        try {
            await apiClient.put(`/api/weddings/${selectedWeddingId}`, editWeddingData);
            setSelectedWedding({ ...selectedWedding, ...editWeddingData });
            handleCloseWeddingModal();
        } catch (err) {
            console.error('Error al actualizar la boda:', err);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return ""; // Manejo de valores nulos o indefinidos
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    if (error) return <div>ERROR</div>
    if (isLoading) return <div>Obteniendo información...</div>;

    return (
        <Container fluid className="mt-5">
            <Row>
                <Col sm={3} className="bg-light mt-5">
                    <Sidebar onSelectComponent={setActiveComponent} />
                </Col>
                <Col sm={9} className="p-3 mt-5">
                    {user && (
                        <div className="d-flex align-items-center">
                            <h4 className="me-3">Bienvenido, {user.name} y {user.partner.name}</h4>
                            <Button variant="primary" onClick={handleShowUserModal}>Editar Perfil</Button>
                        </div>
                    )}
                    {activeComponent === 'weddings' && (
                        <>
                            <WeddingList weddings={weddings} onWeddingSelect={setSelectedWeddingId} />
                            {selectedWedding && (
                                <div>
                                    <GuestList
                                        guestCount={selectedWedding.guestCount}
                                        selectedWeddingId={selectedWeddingId}
                                        guests={weddingGuest}
                                        onGuestDeleted={onGuestDeleted}
                                    />
                                    <h4>Detalles de la Boda</h4>
                                    <p>Ubicación: {selectedWedding.location.city}, {selectedWedding.location.country}</p>
                                    <p>Fecha: {formatDate(selectedWedding.weddingDate)}</p>                                    <p>Mensaje personalizado: {selectedWedding.customMessage}</p>
                                    <p>Código de vestimenta: {selectedWedding.dressCode}</p>
                                    <p>Tipo de comida: {selectedWedding.foodType}</p>

                                    <h5>Eventos de la Boda</h5>
                                    {selectedWedding.events && selectedWedding.events.length > 0 ? (
                                        <ul>
                                            {selectedWedding.events.map((event, index) => (
                                                <li key={index}>
                                                    <strong>{event.name}</strong> - {event.time.split(":").slice(0, 2).join(":")}
                                                    <p>{event.description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No hay eventos programados para esta boda.</p>
                                    )}
                                    <Button variant="warning" onClick={handleShowWeddingModal}>Editar Boda</Button>
                                </div>
                            )}
                        </>
                    )}
                    {/* Modal para editar usuario */}
                    <Modal show={showUserModal} onHide={handleCloseUserModal}>
                        <Modal.Header closeButton><Modal.Title>Editar Perfil</Modal.Title></Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group><Form.Label>Nombre</Form.Label><Form.Control type="text" name="name" value={editUserData.name} onChange={(e) => setEditUserData({ ...editUserData, name: e.target.value })} /></Form.Group>
                                <Form.Group><Form.Label>Primer Apellido</Form.Label><Form.Control type="text" name="firstSurname" value={editUserData.firstSurname} onChange={(e) => setEditUserData({ ...editUserData, firstSurname: e.target.value })} /></Form.Group>
                                <Form.Group><Form.Label>Segundo Apellido</Form.Label><Form.Control type="text" name="secondSurname" value={editUserData.secondSurname} onChange={(e) => setEditUserData({ ...editUserData, secondSurname: e.target.value })} /></Form.Group>
                                <Form.Group><Form.Label>Email</Form.Label><Form.Control type="email" name="email" value={editUserData.email} onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })} /></Form.Group>
                                <Form.Group><Form.Label>Teléfono</Form.Label><Form.Control type="text" name="phone" value={editUserData.phone} onChange={(e) => setEditUserData({ ...editUserData, phone: e.target.value })} /></Form.Group>
                                <h5>Datos de la Pareja</h5>
                                <Form.Group>
                                    <Form.Label>Nombre de la Pareja</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="partner.name"
                                        value={editUserData.partner.name}
                                        onChange={(e) => setEditUserData({
                                            ...editUserData,
                                            partner: {
                                                ...editUserData.partner,
                                                name: e.target.value
                                            }
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Primer Apellido de la Pareja</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="partner.firstSurname"
                                        value={editUserData.partner.firstSurname}
                                        onChange={(e) => setEditUserData({
                                            ...editUserData,
                                            partner: {
                                                ...editUserData.partner,
                                                firstSurname: e.target.value
                                            }
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Segundo Apellido de la Pareja</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="partner.secondSurname"
                                        value={editUserData.partner.secondSurname}
                                        onChange={(e) => setEditUserData({
                                            ...editUserData,
                                            partner: {
                                                ...editUserData.partner,
                                                secondSurname: e.target.value
                                            }
                                        })}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseUserModal}>Cerrar</Button>
                            <Button variant="primary" onClick={handleSaveUserChanges}>Guardar Cambios</Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Modal para editar boda */}
                    <Modal show={showWeddingModal} onHide={handleCloseWeddingModal}>
                        <Modal.Header closeButton><Modal.Title>Editar Boda</Modal.Title></Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group><Form.Label>Ubicación</Form.Label><Form.Control type="text" name="location" value={editWeddingData.location} onChange={handleWeddingInputChange} /></Form.Group>
                                <Form.Group><Form.Label>Fecha de Boda</Form.Label><Form.Control type="date" name="weddingDate" value={editWeddingData.weddingDate} onChange={handleWeddingInputChange} /></Form.Group>
                                <Form.Group><Form.Label>Mensaje Personalizado</Form.Label><Form.Control type="text" name="customMessage" value={editWeddingData.customMessage} onChange={handleWeddingInputChange} /></Form.Group>
                                <Form.Group><Form.Label>Código de Vestimenta</Form.Label><Form.Control type="text" name="dressCode" value={editWeddingData.dressCode} onChange={handleWeddingInputChange} /></Form.Group>
                                <Form.Group><Form.Label>Tipo de Comida</Form.Label><Form.Control type="text" name="foodType" value={editWeddingData.foodType} onChange={handleWeddingInputChange} /></Form.Group>
                                <Form.Group><Form.Label>Numero de invitados</Form.Label><Form.Control type="text" name="guestCount" value={editWeddingData.guestCount} onChange={handleWeddingInputChange} /></Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseWeddingModal}>Cerrar</Button>
                            <Button variant="primary" onClick={handleSaveWeddingChanges}>Guardar Cambios</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
