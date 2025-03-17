import React from 'react';
import { Button } from 'react-bootstrap';

function Sidebar({ onSelectComponent }) {
    return (
        <div>
            <h2 className='mt-3'>Menú</h2>
            <Button className='my-2' variant="secondary" onClick={() => onSelectComponent('weddings')}>
                Ver Bodas
            </Button>
        </div>
    );
}

export default Sidebar;
