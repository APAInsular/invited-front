import React from 'react';
import { Table } from 'react-bootstrap';

function UserList({ users }) {
    return (
        <div>
            <h3>Lista de Usuarios</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Pareja</th>
                        <th>Email</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name} {user.firstSurname} {user.secondSurname}</td>
                            <td>{user.partner.name} {user.partner.firstSurname} {user.partner.secondSurname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default UserList;
