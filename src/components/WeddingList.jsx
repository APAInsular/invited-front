import React from 'react';
import { ListGroup } from 'react-bootstrap';

function WeddingList({ weddings, onWeddingSelect }) {
    return (
        <div>
            <h3 className='mt-2'>Mis Bodas</h3>
            {weddings.length > 0 ? (
                <ListGroup>
                    {weddings.map((wedding) => (
                        <ListGroup.Item
                            key={wedding.id}
                            action
                            onClick={() => onWeddingSelect(wedding.id)}
                        >
                            Fecha de la boda: {new Date(wedding.weddingDate).toLocaleDateString()}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) : (
                <p>No tienes bodas registradas.</p>
            )}
        </div>
    );
}

export default WeddingList;
