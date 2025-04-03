import React from 'react';
import { Table, Button } from 'react-bootstrap';

function UserList({ users, deleteUser }) {

    return (
        <div className="admin-panel mt-4">
            <h5>Gestión de Usuarios</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button variant="danger" size="sm" onClick={() => deleteUser(user.id)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

    );
}

export default UserList;
