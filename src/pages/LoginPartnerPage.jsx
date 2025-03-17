import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import apiClient from '../config/axiosConfig';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);

  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const loginPartner = async () => {
    try {
      const response = await apiClient.post('/api/login', formData);
      login(response.data.user_details.original, response.data.token);
      navigate(`/`);
    } catch (error) {
      setError('No se pudo iniciar sesión.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Email === '' || formData.password === '') {
      setError('Por favor, ingresa tu email y contraseña.');
    } else {
      setError('');
      try {
        const result = await loginPartner();
        const partnerName = result.user_details.original.Name + '&' + result.user_details.original.partner.Name;
        const partnerNameWithoutSpaces = partnerName.replace(/\s+/g, '');
        navigate(`/${partnerNameWithoutSpaces}`); // Redirige al usuario
      } catch {
        setError('No se pudo iniciar sesión. Inténtalo de nuevo.');
      }
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center py-5">
        <Col md={6}>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 w-100">
              Iniciar Sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
