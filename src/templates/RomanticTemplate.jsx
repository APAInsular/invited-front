import React, { useState, useEffect } from 'react';
import { Container, Card, Spinner, Alert, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { FaHeart, FaChurch, FaGlassCheers, FaTshirt } from 'react-icons/fa';

const WeddingInvitation = () => {

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
        isChild: null,
        numberOfChildren: 0,
        childrenData: []
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: val,
        });
    };

    const handleChildDataChange = (index, field, value) => {
        const updatedChildrenData = [...formData.childrenData];
        updatedChildrenData[index] = {
            ...updatedChildrenData[index],
            [field]: value,
        };
        setFormData({
            ...formData,
            childrenData: updatedChildrenData,
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

                <Form onSubmit={handleSubmit} className="border p-4 shadow rounded" style={{ backgroundColor: '#fff8e6' }}>
                    <h2 className="text-center text-primary mb-4">Confirma tu asistencia</h2>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Ingresa tu nombre"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="surnames">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control
                            type="text"
                            name="surnames"
                            value={formData.surnames}
                            onChange={handleInputChange}
                            required
                            placeholder="Ingresa tus apellidos"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="extraInformation">
                        <Form.Label>Información Extra</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="extraInformation"
                            value={formData.extraInformation}
                            onChange={handleInputChange}
                            placeholder="Escribe cualquier información adicional"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="allergy">
                        <Form.Label>Alergias</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="allergy"
                            value={formData.allergy}
                            onChange={handleInputChange}
                            placeholder="Especifica tus alergias (si tienes)"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="alimentation">
                        <Form.Label>Alimentación</Form.Label>
                        <Form.Select
                            name="alimentation"
                            value={formData.alimentation}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="Omnívoro">Omnívoro</option>
                            <option value="Vegetariano">Vegetariano</option>
                            <option value="Vegano">Vegano</option>
                            <option value="Otro">Otro</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="isChild">
                        <Form.Label>¿Niño?</Form.Label>
                        <div>
                            <Button
                                variant={formData.isChild === true ? 'primary' : 'outline-primary'}
                                className="me-2"
                                onClick={() => setFormData({ ...formData, isChild: true })}
                            >
                                Sí
                            </Button>
                            <Button
                                variant={formData.isChild === false ? 'primary' : 'outline-primary'}
                                onClick={() => setFormData({ ...formData, isChild: false, numberOfChildren: 0, childrenData: [] })}
                            >
                                No
                            </Button>
                        </div>
                    </Form.Group>

                    {formData.isChild && (
                        <>
                            <Form.Group className="mb-3" controlId="numberOfChildren">
                                <Form.Label>¿Cuántos niños?</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="numberOfChildren"
                                    value={formData.numberOfChildren}
                                    onChange={(e) => {
                                        const numberOfChildren = Number(e.target.value);
                                        setFormData({
                                            ...formData,
                                            numberOfChildren,
                                            childrenData: Array(numberOfChildren).fill({ name: '', surnames: '', age: '' }),
                                        });
                                    }}
                                    min="1"
                                    placeholder="Número de niños"
                                />
                            </Form.Group>

                            {formData.childrenData.map((child, index) => (
                                <div key={index} className="border p-3 mb-3 rounded">
                                    <h5>Niño {index + 1}</h5>
                                    <Form.Group className="mb-3" controlId={`childName-${index}`}>
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={child.name}
                                            onChange={(e) => handleChildDataChange(index, 'name', e.target.value)}
                                            placeholder="Nombre del niño"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId={`childSurnames-${index}`}>
                                        <Form.Label>Apellidos</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={child.surnames}
                                            onChange={(e) => handleChildDataChange(index, 'surnames', e.target.value)}
                                            placeholder="Apellidos del niño"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId={`childAge-${index}`}>
                                        <Form.Label>Edad</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={child.age}
                                            onChange={(e) => handleChildDataChange(index, 'age', e.target.value)}
                                            placeholder="Edad del niño"
                                        />
                                    </Form.Group>
                                </div>
                            ))}
                        </>
                    )}

                    <Button variant="primary" type="submit" className="w-100">
                        Enviar Confirmación
                    </Button>
                </Form>
            </main>

            <footer className="text-center mt-4">
                <p className="fs-5 fst-italic text-muted">
                    ¡Esperamos verte allí con muchas ganas de celebrar! 🎉
                </p>
            </footer>
        </Container>
    );
};

export default WeddingInvitation;