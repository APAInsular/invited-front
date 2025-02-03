import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usamos useNavigate en lugar de useHistory
import { Card, Button, Row, Col } from 'react-bootstrap'; // Importamos componentes de React Bootstrap

const TemplatesPage = () => {
    const [templates, setTemplates] = useState([
        { id: 1, name: 'Plantilla 1' },
        { id: 2, name: 'Plantilla 2' },
        { id: 3, name: 'Plantilla 3' },
    ]);

    const navigate = useNavigate(); // Usamos useNavigate para la redirección

    // Función para redirigir al template seleccionado
    const redirectToTemplate = (templateId) => {
        navigate(`/invitation/noseque/${templateId}/form`); // Redirigimos a la ruta correspondiente
    };

    return (
        <div className="templates-container py-5">
            <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                {templates.map((template) => (
                    <Col key={template.id}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title>{template.name}</Card.Title>
                                <Card.Text>
                                    Descripción breve de la plantilla.
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => redirectToTemplate(template.id)}
                                >
                                    Seleccionar Plantilla
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default TemplatesPage;
