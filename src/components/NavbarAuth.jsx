import React, { useState } from 'react';
import { FaUsers, FaHeart, FaSearch } from 'react-icons/fa';
import { Navbar, Container, Button, Form, InputGroup } from 'react-bootstrap';

const NavbarAuth = ({ setAdminScene, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg py-3">
            <Container fluid>
                <Navbar.Brand className="fw-bold">Panel de Administración</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-content" />

                <Navbar.Collapse id="navbar-content" className="justify-content-between">
                    <div className="d-flex flex-column flex-lg-row gap-2 my-2 my-lg-0">
                        <Button
                            variant="outline-light"
                            onClick={() => setAdminScene("users")}
                            className="rounded-pill px-3 d-flex align-items-center"
                        >
                            <FaUsers className="me-2" />
                            Usuarios
                        </Button>

                        <Button
                            variant="outline-light"
                            onClick={() => setAdminScene("weddings")}
                            className="rounded-pill px-3 d-flex align-items-center"
                        >
                            <FaHeart className="me-2" />
                            Bodas
                        </Button>
                    </div>

                    <Form onSubmit={handleSearch} className="mt-3 mt-lg-0" style={{ maxWidth: '400px' }}>
                        <InputGroup>
                            <Form.Control
                                type="search"
                                placeholder="Buscar usuario..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="rounded-start-pill border-end-0"
                            />
                            <Button
                                variant="outline-light"
                                type="submit"
                                className="rounded-end-pill border-start-0 d-flex align-items-center"
                            >
                                <FaSearch />
                            </Button>
                            <Button
                                variant="link"
                                type='submit'
                                onClick={() => setSearchTerm(null)}
                                className="p-0 ms-2"
                            >
                                Mostrar todos
                            </Button>
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarAuth;