import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl">
            <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
            <p className="text-gray-600 mb-2">Última actualización: 19/02/2025</p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. Identificación del Responsable del Tratamiento</h2>
                <p><strong>Responsable:</strong> APA Insular SL (en adelante, "Isla32")</p>
                <p><strong>Registro:</strong> Inscrito el 19 de marzo de 2021, en el Tomo 203, folio 121, asiento 1, hoja IF 8879</p>
                <p><strong>CIF:</strong> B04978920</p>
                <p><strong>Domicilio social:</strong> Caserío Tesjuate, 39A, 35611, Puerto del Rosario, Las Palmas</p>
                <p><strong>Oficina:</strong> C/ Canalejas, 13. Vivero 15, 35600, Puerto del Rosario, Las Palmas</p>
                <p><strong>Email:</strong> info@isla32.com</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. Datos Personales Recopilados</h2>
                <ul className="list-disc ml-6">
                    <li>Datos de contacto: nombre, apellidos, correo electrónico, teléfono, dirección postal.</li>
                    <li>Datos de navegación: dirección IP, navegador, dispositivo, sistema operativo, historial de navegación.</li>
                    <li>Información de facturación y pago: cuenta bancaria, tarjeta de crédito/débito u otros métodos de pago.</li>
                    <li>Datos de reservas o compras: fecha, hora, número de personas, información de envíos.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. Finalidad del Tratamiento de Datos</h2>
                <p>Los datos personales se procesan para:</p>
                <ul className="list-disc ml-6">
                    <li>Gestión de reservas y compras.</li>
                    <li>Relación contractual: facturación, pagos, comunicaciones sobre los servicios contratados.</li>
                    <li>Atención al cliente: consultas, quejas, incidencias.</li>
                    <li>Envío de comunicaciones comerciales con el consentimiento del usuario.</li>
                    <li>Cumplimiento de obligaciones legales.</li>
                    <li>Mejorar nuestros servicios mediante análisis de uso de la web.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">4. Base Legal del Tratamiento</h2>
                <p>El tratamiento se basa en:</p>
                <ul className="list-disc ml-6">
                    <li>Ejecución de la relación contractual.</li>
                    <li>Consentimiento del usuario en ciertos casos.</li>
                    <li>Cumplimiento de obligaciones legales.</li>
                    <li>Interés legítimo del Responsable.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">5. Conservación de Datos</h2>
                <p>Los datos se conservarán mientras dure la relación contractual, hasta que el usuario solicite su eliminación o según los plazos legales.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">6. Comunicación de Datos a Terceros</h2>
                <p>Se compartirán datos solo con:</p>
                <ul className="list-disc ml-6">
                    <li>Proveedores de servicios (hosting, pasarelas de pago, marketing).</li>
                    <li>Organismos públicos si es requerido por ley.</li>
                    <li>Colaboradores para la gestión de reservas o compras.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">7. Derechos del Usuario</h2>
                <p>El usuario puede ejercer los siguientes derechos:</p>
                <ul className="list-disc ml-6">
                    <li>Acceso, rectificación y supresión de datos.</li>
                    <li>Limitación y oposición al tratamiento.</li>
                    <li>Portabilidad de los datos.</li>
                    <li>Derecho a no ser objeto de decisiones automatizadas.</li>
                </ul>
                <p>Para ejercerlos, puede escribir a info@isla32.com adjuntando una copia de su documento de identidad.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">8. Seguridad de los Datos</h2>
                <p>Isla32 aplica medidas de seguridad para proteger la información personal contra accesos no autorizados.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">9. Uso de Cookies</h2>
                <p>Para más información, consulta nuestra Política de Cookies.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">10. Actualización de la Política de Privacidad</h2>
                <p>Esta política puede modificarse. Se informará de cambios relevantes en el sitio web.</p>
            </section>
        </div>
    );
}

export default PrivacyPolicy;