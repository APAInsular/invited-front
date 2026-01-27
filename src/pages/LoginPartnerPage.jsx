import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, InputGroup } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import apiClient from '../config/axiosConfig';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Eye, EyeOff } from "lucide-react";
import usePageTranslation from '../hooks/usePageTranslation';

const Login = () => {
  const { translate: t, loadingTranslation } = usePageTranslation('loginPage');

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
      setError(`${t('login.errorMessage')}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email === '' || formData.password === '') {
      setError(`${t('login.errorMessage')}`);

    } else {
      setError('');
      try {
        const result = await loginPartner();
        const partnerName = result.user_details.original.Name + '&' + result.user_details.original.partner.Name;
        const partnerNameWithoutSpaces = partnerName.replace(/\s+/g, '');
        navigate(`/${partnerNameWithoutSpaces}`); // Redirige al usuario
      } catch {
        setError(`${t('login.errorMessage')}`);
      }
    }
  };

  if (loadingTranslation) {
    return <div className="text-center py-5">Loading translations...</div>;
  }

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center py-5">
        <Col md={6}>
          <h2 className="text-center mb-4">{t('login.title')}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>{t('login.emailLabel')}</Form.Label>
              <Form.Control
                type="email"
                placeholder={t('login.emailPlaceholder')}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>{t('login.passwordLabel')}</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder={t('login.passwordPlaceholder')}
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
                <Link to={"/register"} style={{ fontSize: "12px" }}>{t('login.noAccount')}</Link>
                <p style={{ marginTop: "1px", fontSize: "12px" }}>{t('login.requiredFieldsNote')}</p>
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="mt-4 w-100">
              {t('login.submitButton')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
