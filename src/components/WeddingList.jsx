import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

function WeddingList({ weddings, onWeddingSelect }) {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Mis Bodas</Card.Title>
                {weddings.length > 0 ? (
                    <ListGroup variant="flush">
                        {weddings.map((wedding) => (
                            <ListGroup.Item
                                key={wedding.id}
                                action
                                onClick={() => onWeddingSelect(wedding.id)}
                                className="py-3"
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>
                                        <strong>Boda el {new Date(wedding.weddingDate).toLocaleDateString()}</strong>
                                    </span>
                                    <span className="text-muted small">
                                        {wedding.location.city}, {wedding.location.country}
                                    </span>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                ) : (
                    <p className="text-muted">No tienes bodas registradas.</p>
                )}
            </Card.Body>
        </Card>
    );
}

export default WeddingList;