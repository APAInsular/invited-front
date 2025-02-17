import React, { useState, useEffect } from 'react';
import { Container, Card, Spinner, Alert, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { FaHeart, FaChurch, FaGlassCheers, FaTshirt } from 'react-icons/fa';
import NewAttendantForm from '../components/newAttendantForm.jsx';

const RomanticTemplate = ({ weddingData }) => {

    // useEffect(() => {
    //     const fetchInvitationData = async () => {
    //         try {
    //             const response = await fetch('/api/wedding-invitation'); // Cambia la URL por la de tu API
    //             if (!response.ok) {
    //                 throw new Error('Error al obtener los datos de la invitación');
    //             }
    //             const data = await response.json();
    //             setInvitationData(data);
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     //fetchInvitationData();
    // }, []);

    const [formData, setFormData] = useState({
        name: '',
        surnames: '',
        extraInformation: '',
        allergy: '',
        alimentation: '',
        numberOfAttendant: "",
        AttendantData: []
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: val,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <Container className="py-5" style={{ maxWidth: '800px' }}>
            <header className="text-center mb-5 pt-3 my-3">
                <h1 className="display-4 fw-bold text-danger">✨ ¡Estás invitado a nuestra boda! ✨</h1>
                <p className="fs-5 text-muted fst-italic">Una celebración del amor y la alegría</p>
            </header>

            <main>
                <Card className="mb-5 border-0 shadow text-center py-5" style={{ backgroundColor: '#fff8e6' }}>
                    <Card.Body>
                        <FaHeart size={50} className="text-danger mb-3" />
                        <Card.Title className="fs-3 text-primary">Nombre de los novios</Card.Title>
                        <Card.Text className="fs-5 text-secondary">
                            Aquí encontrarás el nombre de los protagonistas de esta celebración especial.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mb-5 border-0 shadow text-center" style={{ backgroundColor: '#fff8e6' }}>
                    <Card.Body>
                        <FaChurch size={50} className="text-primary mb-3" />
                        <Card.Title className="fs-3 text-primary">Ceremonia</Card.Title>
                        <Card.Text className="fs-5 text-secondary">
                            <strong>Ubicación:</strong> lugar
                        </Card.Text>
                        <Card.Text className="fs-5 text-secondary">
                            <strong>Fecha:</strong> fecha
                        </Card.Text>
                        <Card.Text className="fs-5 text-secondary">
                            <strong>Hora de inicio:</strong> hora
                        </Card.Text>
                        <Card.Text className="fs-5 text-secondary">
                            Únete a nosotros en un momento lleno de amor y promesas.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mb-5 border-0 shadow text-center" style={{ backgroundColor: '#fff8e6' }}>
                    <Card.Body>
                        <FaGlassCheers size={50} className="text-warning mb-3" />
                        <Card.Title className="fs-3 text-primary">Celebración</Card.Title>
                        <Card.Text className="fs-5 text-secondary">
                            <strong>Ubicación:</strong> lugar
                        </Card.Text>
                        <Card.Text className="fs-5 text-secondary">
                            <strong>Almuerzo:</strong> comida
                        </Card.Text>
                        <Card.Text className="fs-5 text-secondary">
                            <strong>Cena:</strong> cena
                        </Card.Text>
                        <Card.Text className="fs-5 text-secondary">
                            <strong>Inicio de la fiesta:</strong> fiesta inicio
                        </Card.Text>
                        <Card.Text className="fs-5 text-secondary">
                            <strong>Fin de la fiesta:</strong> fiesta final
                        </Card.Text>
                        <Card.Text className="fs-5 text-secondary">
                            Prepárate para una noche inolvidable de risas y baile.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mb-5 border-0 shadow text-center" style={{ backgroundColor: '#fff8e6' }}>
                    <Card.Body>
                        <FaTshirt size={50} className="text-success mb-3" />
                        <Card.Title className="fs-3 text-primary">Código de Vestimenta</Card.Title>
                        <Card.Text className="fs-5 text-secondary">
                            Elegancia y comodidad son la clave para disfrutar de este día especial.
                        </Card.Text>
                        <Card.Text className="fs-5 text-secondary">vestimenta</Card.Text>
                    </Card.Body>
                </Card>

                <NewAttendantForm weddingData={weddingData} />
            </main>

            <footer className="text-center mt-4">
                <p className="fs-5 fst-italic text-muted">
                    ¡Esperamos verte allí con muchas ganas de celebrar! 🎉
                </p>
            </footer>
        </Container >
    );
};

export default RomanticTemplate;