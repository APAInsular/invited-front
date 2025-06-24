import React from 'react';
import { Table, Button } from 'react-bootstrap';

function UserList({ users, deleteUser }) {

    return (
        <div className="admin-panel mt-4">
            <h5>{t("sections.userManagement")}</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>{t("labels.userId")}</th>
                        <th>{t("labels.name")}</th>
                        <th>{t("labels.email")}</th>
                        <th>{t("labels.actions")}</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button variant="danger" size="sm" onClick={() => deleteUser(user.id)}>
                                    {t("buttons.delete")}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

    );
}

export default UserList;
