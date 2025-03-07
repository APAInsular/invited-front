import React from 'react';
import { Table } from 'react-bootstrap';

function WeddingList({ weddings, onWeddingSelect }) {
    return (
        <div>
            <h3>Lista de Bodas</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Pareja</th>
                        <th>Día de boda</th>
                    </tr>
                </thead>
                <tbody>
                    {weddings.map(wedding => (
                        <tr key={wedding.id} onClick={() => onWeddingSelect(wedding.id)}>
                            <td>{wedding.id}</td>
                            <td>{wedding.user.name} {wedding.user.firstSurname} {wedding.user.secondSurname}</td>
                            <td>{wedding.user.partner.name} {wedding.user.partner.firstSurname} {wedding.user.partner.secondSurname}</td>
                            <td>{wedding.weddingDate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
export default WeddingList;
