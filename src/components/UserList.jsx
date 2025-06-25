import React from 'react';
import { Table, Button } from 'react-bootstrap';
import usePageTranslation from '../hooks/usePageTranslation';

function UserList({ users, deleteUser }) {
    const { t, loadingTranslation } = usePageTranslation('dashboardPage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }
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
