import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import usePageTranslation from '../hooks/usePageTranslation';

function WeddingList({ weddings, onWeddingSelect, isAdmin }) {

    const { translate: t, loadingTranslation } = usePageTranslation('dashboardPage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>{t("sections.weddingList")}</Card.Title>

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
                                        <strong>{t("sections.weddingListDate")} {new Date(wedding.weddingDate).toLocaleDateString()}</strong>
                                    </span>
                                    <span className="text-muted small">
                                        {wedding.location.city}, {wedding.location.country}
                                    </span>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                ) : (
                    <p className="text-muted">{t("sections.noWedding")}</p>
                )}
            </Card.Body>
        </Card>
    );
}

export default WeddingList;