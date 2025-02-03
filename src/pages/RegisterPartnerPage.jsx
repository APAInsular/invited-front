import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from 'react-bootstrap';

import apiClient from '../config/axiosConfig';

export default function UserRegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Realizar la solicitud de registro con axios
            const response = await registerUser(data)

            // Supongamos que el backend retorna un mensaje o un token
            console.log('Registro exitoso', response.data);

            // Si se desea redirigir o hacer algo más con la respuesta, se puede hacerlo aquí
            // Por ejemplo, redirigir a otra página o mostrar un mensaje de éxito
            alert('Registro exitoso');

        } catch (error) {
            // Manejo de errores de la solicitud
            console.error('Error en el registro:', error.response?.data || error.message);
            alert('Hubo un error al registrar el usuario. Intenta nuevamente.');
        }
    };

    const registerUser = async (formData) => {
        try {
            // Realizar la solicitud de registro
            const response = await apiClient.post('/api/register', formData);

            return response;
        } catch (error) {
            console.error('Error en el registro:', error.response?.data || error.message);
            throw error;
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 max-w-md mx-auto p-4 border rounded-lg shadow-lg">
            <Form.Group controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    {...register("Name", { required: "El nombre es obligatorio" })}
                />
                {errors.Name && <p className="text-danger">{errors.Name.message}</p>}
            </Form.Group>

            <Form.Group controlId="firstSurname" className="mt-4">
                <Form.Label>Primer Apellido</Form.Label>
                <Form.Control
                    type="text"
                    {...register("First_Surname", { required: "El primer apellido es obligatorio" })}
                />
                {errors.First_Surname && <p className="text-danger">{errors.First_Surname.message}</p>}
            </Form.Group>

            <Form.Group controlId="secondSurname" className="mt-4">
                <Form.Label>Segundo Apellido</Form.Label>
                <Form.Control
                    type="text"
                    {...register("Second_Surname", { required: "El segundo apellido es obligatorio" })}
                />
                {errors.Second_Surname && <p className="text-danger">{errors.Second_Surname.message}</p>}
            </Form.Group>

            <Form.Group controlId="phone" className="mt-4">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                    type="tel"
                    {...register("Phone", { required: "El teléfono es obligatorio" })}
                />
                {errors.Phone && <p className="text-danger">{errors.Phone.message}</p>}
            </Form.Group>

            <Form.Group controlId="email" className="mt-4">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                    type="email"
                    {...register("Email", { required: "El correo electrónico es obligatorio" })}
                />
                {errors.Email && <p className="text-danger">{errors.Email.message}</p>}
            </Form.Group>

            <Form.Group controlId="password" className="mt-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    {...register("password", { required: "La contraseña es obligatoria" })}
                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </Form.Group>

            <Form.Group controlId="passwordConfirmation" className="mt-4">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    {...register("password_confirmation", { required: "Debes confirmar la contraseña" })}
                />
                {errors.password_confirmation && <p className="text-danger">{errors.password_confirmation.message}</p>}
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 mt-4">
                Registrar
            </Button>
        </Form>
    );
}
