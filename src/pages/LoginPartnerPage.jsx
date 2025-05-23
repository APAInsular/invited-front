import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, InputGroup } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import apiClient from '../config/axiosConfig';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Eye, EyeOff } from "lucide-react";
import Swal from 'sweetalert2';

const Login = () => {
  const { login } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

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

    if (formData.email === '' || formData.password === '') {
      setError('Por favor, ingresa tu email y contraseña.');

    } else {
      setError('');
      try {
        const result = await loginPartner();
        const partnerName = result.user_details.original.Name + '&' + result.user_details.original.partner.Name;
        const partnerNameWithoutSpaces = partnerName.replace(/\s+/g, '');
        navigate(`/${partnerNameWithoutSpaces}`); // Redirige al usuario
      } catch {
        setError('No se pudo iniciar sesión. Contraseña o correo incorrectos.');
      }
    }
  };

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center py-5">
        <Col md={6}>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Contraseña*</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <InputGroup.Text onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
                  {showPassword ? <EyeOff /> : <Eye />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Row>
              <Col>
                <Link to={"/register"} style={{ fontSize: "12px" }}>No tengo una cuenta</Link>
                <p style={{ marginTop: "1px", fontSize: "12px" }}>(*) campos obligatorios</p>
              </Col>
            </Row>

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
