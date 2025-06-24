import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import apiClient from '../config/axiosConfig';
import usePageTranslation from '../hooks/usePageTranslation';

function EditUserModal({ show, onClose, userData, onUserUpdated }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        firstSurname: '',
        secondSurname: '',
        partnerName: '',
        partnerFirstSurname: '',
        partnerSecondSurname: '',
    });

    const { t, loadingTranslation } = usePageTranslation('dashboardPage');


    useEffect(() => {
        if (userData) {
            setFormData({
                name: userData.name || '',
                email: userData.email || '',
                phone: userData.phone || '',
                firstSurname: userData.firstSurname || '',
                secondSurname: userData.secondSurname || '',
                partnerName: userData.partner?.name || '',
                partnerFirstSurname: userData.partner?.firstSurname || '',
                partnerSecondSurname: userData.partner?.secondSurname || '',
            });
        }
    }, [userData]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        onUserUpdated(formData);
    };
    if (loadingTranslation) {
        return <div className="text-center py-5">Loading translations...</div>;
    }
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{t("sections.editProfile")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>{t("labels.name")}</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{t("labels.firstSurname")}</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstSurname"
                            value={formData.firstSurname}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{t("labels.secondSurname")}</Form.Label>
                        <Form.Control
                            type="text"
                            name="secondSurname"
                            value={formData.secondSurname}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{t("labels.email")}</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{t("labels.phone")}</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <h5>{t("sections.partnerData")}</h5>
                    <Form.Group>
                        <Form.Label>{t("labels.partnerName")}</Form.Label>
                        <Form.Control
                            type="text"
                            name="partnerName"
                            value={formData.partnerName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{t("labels.partnerFirstSurname")}</Form.Label>
                        <Form.Control
                            type="text"
                            name="partnerFirstSurname"
                            value={formData.partnerFirstSurname}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>{t("labels.partnerSecondSurname")}</Form.Label>
                        <Form.Control
                            type="text"
                            name="partnerSecondSurname"
                            value={formData.partnerSecondSurname}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    {t("buttons.close")}
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    {t("buttons.saveChanges")}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditUserModal;
