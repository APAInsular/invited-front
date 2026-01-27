import React from 'react';
import { Table } from 'react-bootstrap';
import usePageTranslation from '../hooks/usePageTranslation';

function InvitationList({ invitations }) {

    const { translate: t, loadingTranslation } = usePageTranslation('dashboardPage');

    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }
    return (
        <div>
            <h3>Lista de Invitaciones</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Asistencia</th>
                        <th>Acompañante</th>
                        <th>Nombre del acompañante</th>
                        <th>Alimentación</th>
                        <th>Niños</th>
                    </tr>
                </thead>
                <tbody>
                    {invitations.map(invite => (
                        <tr key={invite.id}>
                            <td>{invite.id}</td>
                            <td>{invite.email}</td>
                            <td>{invite.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default InvitationList;
