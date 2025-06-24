import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import apiClient from '../config/axiosConfig';
import Sidebar from '../components/Sidebar';
import WeddingList from '../components/WeddingList';
import GuestList from '../components/GuestList';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserList from '../components/UserList';
import NavbarAuth from '../components/NavbarAuth';
import { Plus, X } from 'react-bootstrap-icons';
import usePageTranslation from '../hooks/usePageTranslation';

function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [weddings, setWeddings] = useState([]);
    const [allWeddings, setAllWeddings] = useState([]);
    const [selectedWeddingId, setSelectedWeddingId] = useState(null);
    const [selectedWedding, setSelectedWedding] = useState(null);
    const [weddingGuest, setWeddingGuest] = useState([]);
    const [error, setError] = useState(null);
    const [activeComponent, setActiveComponent] = useState('weddings');
    const [isLoading, setIsLoading] = useState(true);
    const [showUserModal, setShowUserModal] = useState(false);
    const [showWeddingModal, setShowWeddingModal] = useState(false);
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    const [users, setUsers] = useState([])
    const [isAdmin, setIsAdmin] = useState();
    const [images, setImages] = useState(selectedWedding?.images || []);
    const [adminScene, setAdminScene] = useState("users");
    const [filteredUsers, setFilteredUsers] = useState();
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
    const baseUrl = process.env.REACT_APP_AWS_URL;

    const fileInputRef = useRef(null);

    const onGuestDeleted = (guestId) => {
        setWeddingGuest((prevGuests) => prevGuests.filter(guest => guest.id !== guestId));
    };

    const { t, loadingTranslation } = usePageTranslation('dashboardPage');



    /*
    FUNCIONALIDADES ADMIN:
    
    -> Eliminar usuarios
    -> Ver usuarios
    -> Ver bodas - Con susu imágenes
    -> Eliminar imágenes
    -> Eliminar bodas
    -> Editar usuarios
    -> Editar bodas
    */

    useEffect(() => {
        setIsLoading(true);
        const fetchUserAdmin = async () => {
            try {
                const token = sessionStorage.getItem('auth_token');
                if (!token) navigate("/login");
                const response = await apiClient.get('/api/user/is-admin', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                // Verificar si el usuario es admin
                console.log(isAdmin)

                console.log(response)
                setIsAdmin(response.data.isAdmin);
                setIsLoading(false);
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            }
        };
        const fetchWeddingsAdmin = async () => {
            try {
                const token = sessionStorage.getItem('auth_token');
                if (!token) navigate("/login");
                const response = await apiClient.get('/api/weddings', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                console.log(response.data)
                setAllWeddings(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            }
        };
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
                setIsLoading(false);
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            }
        };
        fetchUserAdmin();
        fetchWeddingsAdmin();
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
    }, [user]);

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            if (user) {
                const token = sessionStorage.getItem('auth_token');
                const response = await apiClient.get('/api/users', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                console.log(response.data)
                setUsers(response.data);
                setFilteredUsers(response.data);
                setIsLoading(false);
            }
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

    const [showModal, setShowModal] = useState(false);

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

    const handleSearch = (searchTerm) => {
        if (searchTerm === null) {
            // Si el campo de búsqueda está vacío, mostrar todos los usuarios
            setFilteredUsers(users); // filteredUsers es un estado donde guardas los resultados
            return;
        }

        const term = searchTerm.toLowerCase();

        const results = users.filter(user => {
            // Buscar coincidencias en nombre, email u otros campos relevantes
            return (
                user.name.toLowerCase().includes(term) ||
                user.email.toLowerCase().includes(term) ||
                (user.firstSurname && user.firstSurname.toLowerCase().includes(term))
            );
        });

        setFilteredUsers(results);
    };

    const handleClearSearch = (searchTerm) => {
        setFilteredUsers(users);
        searchTerm = "";
    }

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

    useEffect(() => {
        if (selectedWedding?.images) {
            setImages(selectedWedding.images);
        }
    }, [selectedWedding]);

    console.log(selectedWedding)

    const formatDate = (dateString) => {
        if (!dateString) return ""; // Manejo de valores nulos o indefinidos
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const handleGalleryUpload = async (e) => {
        const files = e.target.files;

        if (!files || files.length === 0) {
            alert('Por favor, selecciona al menos una imagen');
            return;
        }

        // Convertir FileList a Array y validar imágenes
        const filesArray = Array.from(files).filter(file => {
            const isValid = file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024;
            if (!isValid) {
                alert(`El archivo ${file.name} no es una imagen válida o excede el tamaño de 5MB`);
            }
            return isValid;
        });

        if (filesArray.length === 0) return;

        try {
            // 1. Crear previsualizaciones locales
            const previewImages = filesArray.map(file => ({
                id: `preview-${Date.now()}-${file.name}`,
                name: file.name,
                url: URL.createObjectURL(file),
                isUploading: true
            }));

            setImages(prev => [...prev, ...previewImages]);

            // 2. Preparar FormData para subida
            const formData = new FormData();
            filesArray.forEach(file => formData.append('images[]', file));

            const token = sessionStorage.getItem("auth_token");

            // 3. Subir al servidor
            const response = await apiClient.post(
                `/api/weddings/${selectedWeddingId}/images`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // 4. Manejo seguro de la respuesta
            let uploadedImages = [];

            // Caso 1: La respuesta es un array directo
            if (Array.isArray(response.data)) {
                uploadedImages = response.data;
            }
            // Caso 2: La respuesta es un objeto con propiedad 'data' que es array
            else if (Array.isArray(response.data?.data)) {
                uploadedImages = response.data.data;
            }
            // Caso 3: La respuesta es un objeto con imágenes en otra propiedad
            else if (response.data?.images) {
                uploadedImages = Array.isArray(response.data.images) ? response.data.images : [response.data.images];
            }
            // Caso 4: Formato inesperado pero contiene la información necesaria
            else if (response.data) {
                uploadedImages = [response.data]; // Convertir a array si es un solo objeto
            }

            // 5. Actualizar estado con respuesta del servidor
            setImages(prev => [
                ...prev.filter(img => !img.isUploading), // Eliminar previsualizaciones
                ...uploadedImages.map(img => ({
                    id: img.id || `img-${Date.now()}-${Math.random()}`,
                    url: img.url || `${baseUrl}${img.path}`,
                    ...img
                }))
            ]);

        } catch (error) {
            console.error('Error al subir imágenes:', error.response?.data || error);
            // Eliminar previsualizaciones en caso de error
            setImages(prev => prev.filter(img => !img.isUploading));
            alert('Error al subir imágenes. Por favor intenta nuevamente.');
        } finally {
            e.target.value = ''; // Resetear input
        }
    };

    const handleDeleteImage = (imageId) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará la imagen permanentemente.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const token = sessionStorage.getItem('auth_token');
                    await apiClient.delete(`/api/images/${imageId}`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });

                    // Elimina del estado
                    setImages((prevImages) => prevImages.filter(img => img.id !== imageId));

                    Swal.fire('¡Eliminada!', 'La imagen ha sido eliminada.', 'success');
                } catch (error) {
                    Swal.fire('Error', 'No se pudo eliminar la imagen.', 'error');
                }
            }
        });
    };

    // Función para abrir el selector de archivos
    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Limpiar para permitir reseleccionar los mismos archivos
            fileInputRef.current.click();
        }
    };

    if (error) return <div>ERROR</div>
    if (isLoading && users.length > 0 && filteredUsers.length > 0 && allWeddings.length > 0 && weddings.length > 0 && user && isAdmin) return <div>Obteniendo información...</div>;

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }

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
                            {t('sidebar.menu')}
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
                                    {t("welcome.greeting")} {user.name} {t("welcome.greeting2")} {user.partner.name}
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
                                        {user ? (
                                            <Link
                                                to={`/${user.name}&${user.partner.name}/invitation/plantilla/form`}
                                                className="btn btn-primary"
                                            >
                                                {t("buttons.startNow")}
                                            </Link>
                                        ) : null
                                        }
                                    </div>
                                </div>

                                <WeddingList weddings={weddings} onWeddingSelect={setSelectedWeddingId} isAdmin={isAdmin} />

                                {selectedWedding && (
                                    <div className="mt-4">
                                        <Button
                                            variant="dangers"
                                            onClick={() => setSelectedWedding(null)}
                                            size="md"
                                            className='mb-2 btn btn-outline-dark rounded-pill'
                                        >
                                            {t("buttons.closeWedding")}
                                        </Button>
                                        {selectedWedding.images ? (
                                            <Button
                                                variant="dangers"
                                                onClick={() => setShowModal(true)}
                                                size="md"
                                                className='mb-2 btn btn-outline-dark rounded-pill'
                                            >
                                                {t("buttons.viewImages")}
                                            </Button>
                                        ) : (
                                            <strong className='ml-2'>{t("buttons.noImages")}</strong>
                                        )}

                                        <GuestList
                                            guestCount={selectedWedding.guestCount}
                                            selectedWeddingId={selectedWeddingId}
                                            guests={weddingGuest}
                                            onGuestDeleted={onGuestDeleted}
                                        />

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>{t("sections.weddingDetails")}</h4>
                                            <Button
                                                variant="warning"
                                                onClick={handleShowWeddingModal}
                                                size="sm"
                                            >
                                                {t("buttons.edit")}
                                            </Button>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-md-6 mb-3">
                                                <div className="card h-100 shadow-sm">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-primary mb-4">
                                                            <i className="bi bi-geo-alt-fill me-2"></i>{t("sections.mainDetails")}
                                                        </h5>
                                                        <ul className="list-unstyled">
                                                            <li className="mb-3 d-flex">
                                                                <span className="me-2 text-muted">
                                                                    <i className="bi bi-geo"></i>
                                                                </span>
                                                                <div>
                                                                    <h6 className="mb-0 text-secondary">{t("sections.location")}</h6>
                                                                    <p className="mb-0">{selectedWedding.location.city}, {selectedWedding.location.country}</p>
                                                                </div>
                                                            </li>
                                                            <li className="mb-3 d-flex">
                                                                <span className="me-2 text-muted">
                                                                    <i className="bi bi-calendar-event"></i>
                                                                </span>
                                                                <div>
                                                                    <h6 className="mb-0 text-secondary">{t("sections.date")}</h6>
                                                                    <p className="mb-0">{formatDate(selectedWedding.weddingDate)}</p>
                                                                </div>
                                                            </li>
                                                            <li className="d-flex">
                                                                <span className="me-2 text-muted">
                                                                    <i className="bi bi-chat-square-text"></i>
                                                                </span>
                                                                <div>
                                                                    <h6 className="mb-0 text-secondary">{t("sections.message")}</h6>
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
                                                            <i className="bi bi-info-circle-fill me-2"></i>{t("sections.additionalInfo")}
                                                        </h5>
                                                        <ul className="list-unstyled">
                                                            <li className="mb-3 d-flex">
                                                                <span className="me-2 text-muted">
                                                                    <i className="bi bi-sunglasses"></i>
                                                                </span>
                                                                <div>
                                                                    <h6 className="mb-0 text-secondary">{t("sections.dressCode")}</h6>
                                                                    <p className="mb-0">
                                                                        {selectedWedding.dressCode || "Sin especificar"}
                                                                        
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li className="mb-3 d-flex">
                                                                <span className="me-2 text-muted">
                                                                    <i className="bi bi-egg-fried"></i>
                                                                </span>
                                                                <div>
                                                                    <h6 className="mb-0 text-secondary">{t("sections.food")}</h6>
                                                                    <p className="mb-0">
                                                                        {selectedWedding.foodType || "Por determinar"}
                                                                        
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <h5 className="mt-3">{t("sections.weddingEvents")}</h5>
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
                                            <p>{t("sections.noEvents")}</p>
                                        )}
                                    </div>
                                )}
                            </>
                        )}

                        {activeComponent === 'admin' && isAdmin && users && (
                            <>
                                <NavbarAuth
                                    onSearch={handleSearch}
                                    setAdminScene={setAdminScene}
                                />

                                {adminScene === 'users' && (
                                    <UserList users={filteredUsers} deleteUser={deleteUser} handleClearSearch={handleClearSearch} />
                                )}

                                {adminScene === 'weddings' && (
                                    <>
                                        <h5 className='mt-3'>{t("sections.weddingManagement")}</h5>
                                        <WeddingList weddings={allWeddings} onWeddingSelect={setSelectedWeddingId} isAdmin={isAdmin} />
                                        {selectedWedding && (
                                            <div className="mt-4">
                                                <Button
                                                    variant="dangers"
                                                    onClick={() => setSelectedWedding(null)}
                                                    size="md"
                                                    className='mb-2 btn btn-outline-dark rounded-pill'
                                                >
                                                    {t("buttons.closeWedding")}
                                                </Button>
                                                {selectedWedding.images ? (
                                                    <Button
                                                        variant="dangers"
                                                        onClick={() => setShowModal(true)}
                                                        size="md"
                                                        className='mb-2 btn btn-outline-dark rounded-pill'
                                                    >
                                                        {t("buttons.viewImages")}
                                                    </Button>
                                                ) : (
                                                    <strong className='ml-2'>{t("buttons.noImages")}</strong>
                                                )}

                                                <GuestList
                                                    guestCount={selectedWedding.guestCount}
                                                    selectedWeddingId={selectedWeddingId}
                                                    guests={weddingGuest}
                                                    onGuestDeleted={onGuestDeleted}
                                                />

                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <h4>{t("sections.weddingDetails")}</h4>
                                                    <Button
                                                        variant="warning"
                                                        onClick={handleShowWeddingModal}
                                                        size="sm"
                                                    >
                                                        {t("buttons.edit")}
                                                    </Button>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12 col-md-6 mb-3">
                                                        <div className="card h-100 shadow-sm">
                                                            <div className="card-body">
                                                                <h5 className="card-title text-primary mb-4">
                                                                    <i className="bi bi-geo-alt-fill me-2"></i>{t("sections.mainDetails")}
                                                                </h5>
                                                                <ul className="list-unstyled">
                                                                    <li className="mb-3 d-flex">
                                                                        <span className="me-2 text-muted">
                                                                            <i className="bi bi-geo"></i>
                                                                        </span>
                                                                        <div>
                                                                            <h6 className="mb-0 text-secondary">{t("sections.location")}</h6>
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
                                                                    <i className="bi bi-info-circle-fill me-2"></i>{t("sections.additionalInfo")}
                                                                </h5>
                                                                <ul className="list-unstyled">
                                                                    <li className="mb-3 d-flex">
                                                                        <span className="me-2 text-muted">
                                                                            <i className="bi bi-sunglasses"></i>
                                                                        </span>
                                                                        <div>
                                                                            <h6 className="mb-0 text-secondary">{t("sections.dressCode")}</h6>
                                                                            <p className="mb-0">
                                                                                {selectedWedding.dressCode || "Sin especificar"}
                                                                                {selectedWedding.dressCode && (
                                                                                    <small className="d-block text-muted mt-1">{t("sections.dressCode")}</small>
                                                                                )}
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="mb-3 d-flex">
                                                                        <span className="me-2 text-muted">
                                                                            <i className="bi bi-egg-fried"></i>
                                                                        </span>
                                                                        <div>
                                                                            <h6 className="mb-0 text-secondary">{t("sections.food")}</h6>
                                                                            <p className="mb-0">
                                                                                {selectedWedding.foodType || "Por determinar"}
                                                                                {selectedWedding.foodType && (
                                                                                    <small className="d-block text-muted mt-1">{t("labels.foodType")}</small>
                                                                                )}
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h5 className="mt-3">{t("sections.weddingEvents")}</h5>
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
                                                    <p>{t("sections.noEvents")}</p>
                                                )}
                                            </div>
                                        )}
                                    </>
                                )}
                            </>
                        )}

                        {/* Modal para editar usuario */}
                        <Modal show={showUserModal} onHide={handleCloseUserModal}>
                            <Modal.Header closeButton><Modal.Title>{t("sections.editProfile")}l</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group><Form.Label>{t("labels.name")}</Form.Label><Form.Control type="text" name="name" value={editUserData.name} onChange={(e) => setEditUserData({ ...editUserData, name: e.target.value })} /></Form.Group>
                                    <Form.Group><Form.Label>{t("labels.firstSurname")}</Form.Label><Form.Control type="text" name="firstSurname" value={editUserData.firstSurname} onChange={(e) => setEditUserData({ ...editUserData, firstSurname: e.target.value })} /></Form.Group>
                                    <Form.Group><Form.Label>{t("labels.secondSurname")}</Form.Label><Form.Control type="text" name="secondSurname" value={editUserData.secondSurname} onChange={(e) => setEditUserData({ ...editUserData, secondSurname: e.target.value })} /></Form.Group>
                                    <Form.Group><Form.Label>{t("labels.email")}</Form.Label><Form.Control type="email" name="email" value={editUserData.email} onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })} /></Form.Group>
                                    <Form.Group><Form.Label>{t("labels.phone")}</Form.Label><Form.Control type="text" name="phone" value={editUserData.phone} onChange={(e) => setEditUserData({ ...editUserData, phone: e.target.value })} /></Form.Group>
                                    <h5>{t("sections.partnerData")}</h5>
                                    <Form.Group>
                                        <Form.Label>{t("labels.partnerName")}</Form.Label>
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
                                        <Form.Label>{t("labels.partnerFirstSurname")}</Form.Label>
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
                                        <Form.Label>{t("labels.partnerSecondSurname")}</Form.Label>
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
                                <Button variant="secondary" onClick={handleCloseUserModal}>{t("buttons.close")}</Button>
                                <Button variant="primary" onClick={handleSaveUserChanges}>{t("buttons.saveChanges")}</Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>{t("sections.gallery")}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="d-flex flex-wrap gap-3 justify-content-start">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="position-relative border rounded overflow-hidden"
                                            style={{ width: '150px', height: '150px' }}
                                        >
                                            <img
                                                src={`${baseUrl}${image.image}`}
                                                alt={`boda-${index}`}
                                                className="w-100 h-100 object-fit-cover"
                                            />
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                className="position-absolute top-0 end-0 m-1 p-1 rounded-circle"
                                                onClick={() => handleDeleteImage(image.id)}
                                            >
                                                <X size={16} />
                                            </Button>
                                        </div>
                                    ))}

                                    {/* Cuadrado para añadir nuevas imágenes */}
                                    <div
                                        className="border rounded d-flex flex-column justify-content-center align-items-center"
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            cursor: 'pointer',
                                            borderStyle: 'dashed',
                                            backgroundColor: 'rgba(0,0,0,0.05)'
                                        }}
                                        onClick={triggerFileInput}
                                    >
                                        <Plus size={32} className="text-muted" />
                                        <span className="text-muted mt-2">{t("buttons.addImage")}</span>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            accept="image/*"
                                            multiple
                                            style={{ display: 'none' }}
                                            onChange={handleGalleryUpload}
                                        />
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowModal(false)}>
                                    {t("buttons.close")}
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        {/* Modal para editar boda */}
                        <Modal show={showWeddingModal} onHide={handleCloseWeddingModal}>
                            <Modal.Header closeButton><Modal.Title>{t("sections.editWedding")}</Modal.Title></Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group><Form.Label>{t("sections.location")}</Form.Label><Form.Control type="text" name="location.city" value={editWeddingData.location.city} onChange={handleWeddingInputChange} /></Form.Group>
                                    <Form.Group><Form.Label>{t("sections.location")}</Form.Label><Form.Control type="text" name="location.country" value={editWeddingData.location.country} onChange={handleWeddingInputChange} /></Form.Group>
                                    <Form.Group><Form.Label>{t("labels.weddingDate")}</Form.Label><Form.Control type="date" name="weddingDate" value={editWeddingData.weddingDate} onChange={handleWeddingInputChange} /></Form.Group>
                                    <Form.Group><Form.Label>{t("labels.customMessage")}</Form.Label><Form.Control type="text" name="customMessage" value={editWeddingData.customMessage} onChange={handleWeddingInputChange} /></Form.Group>
                                    <Form.Group><Form.Label>{t("labels.dressCode")}</Form.Label><Form.Control type="text" name="dressCode" value={editWeddingData.dressCode} onChange={handleWeddingInputChange} /></Form.Group>
                                    <Form.Group><Form.Label>{t("labels.foodType")}</Form.Label><Form.Control type="text" name="foodType" value={editWeddingData.foodType} onChange={handleWeddingInputChange} /></Form.Group>
                                    <Form.Group><Form.Label>{t("sections.guestCount")}</Form.Label><Form.Control type="text" name="guestCount" value={editWeddingData.guestCount} onChange={handleWeddingInputChange} /></Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseWeddingModal}>{t("buttons.close")}</Button>
                                <Button variant="primary" onClick={handleSaveWeddingChanges}>{t("buttons.saveChanges")}</Button>
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
