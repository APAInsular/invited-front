import React from 'react';
import { Button } from 'react-bootstrap';

function Sidebar({ onSelectComponent }) {
    return (
        <div>
            <h2>Menú</h2>
            <Button className='my-2' variant="primary" onClick={() => onSelectComponent('users')}>
                Ver Usuarios
            </Button>
            <Button className='my-2' variant="secondary" onClick={() => onSelectComponent('invitations')}>
                Ver Invitados
            </Button>
        </div>
    );
}

export default Sidebar;
