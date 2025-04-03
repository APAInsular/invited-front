import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form, Table } from 'react-bootstrap';
import apiClient from '../config/axiosConfig';
import Sidebar from '../components/Sidebar';
import WeddingList from '../components/WeddingList';
import GuestList from '../components/GuestList';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserList from '../components/UserList';

function Dashboard() {
    const navigate = useNavigate();
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
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    const [users, setUsers] = useState(null)
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

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem('auth_token');
                if (!token) navigate("/login");
                const response = await apiClient.get('/api/user/is-admin', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                // Verificar si el usuario es admin
                setIsAdmin(response.data.isAdmin);
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            }
        };
        fetchUser();
    }, []);


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
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const token = sessionStorage.getItem('auth_token');
            const response = await apiClient.get('/api/users', {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log(response.data)
            setUsers(response.data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const deleteUser = async (userId) => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción no se puede deshacer',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar'
        });

        if (result.isConfirmed) {
            try {
                const token = sessionStorage.getItem('auth_token');
                await apiClient.delete(`/api/users/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUsers(users.filter(user => user.id !== userId));
                Swal.fire('Eliminado', 'El usuario ha sido eliminado.', 'success');
            } catch (error) {
                console.error('Error al eliminar usuario:', error);
            }
        }
    };

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
        const { name, value } = e.target;
        if (name === "location.city" || name === "location.country") {
            // Actualizamos la propiedad de location de manera correcta
            const [key, subKey] = name.split('.');
            setEditWeddingData((prevData) => ({
                ...prevData,
                [key]: {
                    ...prevData[key],
                    [subKey]: value,
                }
            }));
        } else {
            setEditWeddingData({
                ...editWeddingData,
                [name]: value,
            });
        }
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
        <>
            <Container fluid className="mt-5 px-0">
                <Row className="g-0">
                    {/* Sidebar - hidden on small screens, shown on medium+ */}
                    <Col md={3} className="bg-light d-none d-md-block">
                        <Sidebar onSelectComponent={setActiveComponent} isAdmin={isAdmin} />
                    </Col>

                    {/* Main content area */}
                    <Col xs={12} md={9} className="p-3 mt-5">
                        {/* Mobile menu toggle button */}
                        <Button
                            variant="primary"
                            className="d-md-none mb-3"
                            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
                        >
                            Menu
                        </Button>

                        {/* Mobile sidebar overlay */}
                        {showMobileSidebar && (
                            <div className="mobile-sidebar-overlay">
                                <Sidebar
                                    onSelectComponent={(comp) => {
                                        setActiveComponent(comp);
                                        setShowMobileSidebar(false);
                                    }}
                                />
                            </div>
                        )}

                        {/* User welcome section */}
                        {user && (
                            <div className="d-flex flex-column flex-md-row align-items-center mb-4">
                                <h4 className="me-md-3 mb-2 mb-md-0 text-center text-md-start">
                                    Bienvenido, {user.name} y {user.partner.name}
                                </h4>
                            </div>
                        )}

                        {/* Main content */}
                        {activeComponent === 'weddings' && (
                            <>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ProfileCard
                                            user={user}
                                            onEdit={handleShowUserModal}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        {/* Puedes añadir otros componentes aquí */}
                                    </div>
                                </div>

                                <WeddingList weddings={weddings} onWeddingSelect={setSelectedWeddingId} />

                                {selectedWedding && (
                                    <div className="mt-4">
                                        <GuestList
                                            guestCount={selectedWedding.guestCount}
                                            selectedWeddingId={selectedWeddingId}
                                            guests={weddingGuest}
                                            onGuestDeleted={onGuestDeleted}
                                        />

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>Detalles de la Boda</h4>
                                            <Button
                                                variant="warning"
                                                onClick={handleShowWeddingModal}
                                                size="sm"
                                            >
                                                Editar
                                            </Button>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-md-6 mb-3">
                                                <div className="card h-100 shadow-sm">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-primary mb-4">
                                                            <i className="bi bi-geo-alt-fill me-2"></i>Detalles Principales
                                                        </h5>
                                                        <ul className="list-unstyled">
                                                            <li className="mb-3 d-flex">
                                                                <span className="me-2 text-muted">
                                                                    <i className="bi bi-geo"></i>
                                                                </span>
                                                                <div>
                                                                    <h6 className="mb-0 text-secondary">Ubicación</h6>
                                                                    <p className="mb-0">{selectedWedding.location.city}, {selectedWedding.location.country}</p>
                                                                </div>
                                                            </li>
                                                            <li className="mb-3 d-flex">
                                                                <span className="me-2 text-muted">
                                                                    <i className="bi bi-calendar-event"></i>
                                                                </span>
                                                                <div>
                                                                    <h6 className="mb-0 text-secondary">Fecha</h6>
                                                                    <p className="mb-0">{formatDate(selectedWedding.weddingDate)}</p>
                                                                </div>
                                                            </li>
                                                            <li className="d-flex">
                                                                <span className="me-2 text-muted">
                                                                    <i className="bi bi-chat-square-text"></i>
                                                                </span>
                                                                <div>
                                                                    <h6 className="mb-0 text-secondary">Mensaje</h6>
                                                                    <p className="mb-0 text-muted font-italic">"{selectedWedding.customMessage}"</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 mb-3">
                                                <div className="card h-100 shadow-sm">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-primary mb-4">
                                                            <i className="bi bi-info-circle-fill me-2"></i>Información Adicional
                                                        </h5>
                                                        <ul className="list-unstyled">
                                                            <li className="mb-3 d-flex">
                                                                <span className="me-2 text-muted">
                                                                    <i className="bi bi-sunglasses"></i>
                                                                </span>
                                                                <div>
                                                                    <h6 className="mb-0 text-secondary">Vestimenta</h6>
                                                                    <p className="mb-0">
                                                                        {selectedWedding.dressCode || "Sin especificar"}
                                                                        {selectedWedding.dressCode && (
                                                                            <small className="d-block text-muted mt-1">Código de vestimenta</small>
                                                                        )}
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li className="mb-3 d-flex">
                                                                <span className="me-2 text-muted">
                                                                    <i className="bi bi-egg-fried"></i>
                                                                </span>
                                                                <div>
                                                                    <h6 className="mb-0 text-secondary">Comida</h6>
                                                                    <p className="mb-0">
                                                                        {selectedWedding.foodType || "Por determinar"}
                                                                        {selectedWedding.foodType && (
                                                                            <small className="d-block text-muted mt-1">Tipo de menú</small>
                                                                        )}
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <h5 className="mt-3">Eventos de la Boda</h5>
                                        {selectedWedding.events && selectedWedding.events.length > 0 ? (
                                            <div className="list-group">
                                                {selectedWedding.events.map((event, index) => (
                                                    <div key={index} className="list-group-item">
                                                        <div className="d-flex w-100 justify-content-between">
                                                            <h6 className="mb-1">{event.name}</h6>
                                                            <small>{event.time.split(":").slice(0, 2).join(":")}</small>
                                                        </div>
                                                        <p className="mb-1">{event.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p>No hay eventos programados para esta boda.</p>
                                        )}
                                    </div>
                                )}
                            </>
                        )}

                        {activeComponent === 'admin' && isAdmin && (
                            <UserList users={users} deleteUser={deleteUser} />
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
                                    <Form.Group><Form.Label>Ubicación</Form.Label><Form.Control type="text" name="location.city" value={editWeddingData.location.city} onChange={handleWeddingInputChange} /></Form.Group>
                                    <Form.Group><Form.Label>Ubicación</Form.Label><Form.Control type="text" name="location.country" value={editWeddingData.location.country} onChange={handleWeddingInputChange} /></Form.Group>
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
                {/* Add CSS for mobile sidebar */}
                <style jsx>{`
                .mobile-sidebar-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.5);
                    z-index: 1000;
                    padding: 20px;
                }
                
                @media (min-width: 768px) {
                    .mobile-sidebar-overlay {
                        display: none;
                    }
                }
            `}</style>

            </Container>
            <Footer></Footer>
        </>
    );
}

export default Dashboard;
