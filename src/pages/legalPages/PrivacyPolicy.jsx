import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto p-6 shadow-md rounded-xl">
            <h1 className="text-3xl font-bold mb-4">POLÍTICA DE PRIVACIDAD</h1>
            <p className="text-gray-600 mb-2">Fecha de última actualización: 19/03/2025</p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO</h2>
                <p><strong>Responsable:</strong> APA Insular S.L. (en adelante, el “Responsable” o “Invited.es”)</p>
                <p><strong>Inscripción:</strong> Inscrita con fecha 19 de marzo de 2021, en el Tomo 203, folio 121, inscripción 1º, en la hoja IF 8879</p>
                <p><strong>CIF:</strong> B04978920</p>
                <p><strong>Domicilio Social:</strong> Caserío Tesjuate, 39A, 35611, Puerto del Rosario, Las Palmas</p>
                <p><strong>Oficina:</strong> C/ Canalejas, 13. Vivero 15, 35600, Puerto del Rosario, Las Palmas</p>
                <p><strong>Correo electrónico de contacto:</strong> contacto@invited.es</p>
                <p><strong>Sitio Web:</strong> <a href="https://invited.es" className="text-blue-500 hover:underline">https://invited.es</a></p>
                <p>La presente Política de Privacidad regula la recogida y el tratamiento de los datos personales que se realicen a través del sitio web <a href="https://invited.es" className="text-blue-500 hover:underline">https://invited.es</a>, así como en las diferentes interacciones que el usuario pueda mantener con Invited.es.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. DATOS PERSONALES RECOPILADOS</h2>
                <p>En función de las funcionalidades que utilice el usuario en el Sitio Web, se podrán recabar distintos tipos de datos personales, tales como:</p>
                <ul className="list-disc ml-6">
                    <li>Datos de contacto: nombre, apellidos, dirección de correo electrónico, número de teléfono y dirección postal.</li>
                    <li>Datos de navegación: dirección IP, navegador, tipo de dispositivo, sistema operativo, historial de navegación.</li>
                    <li>Datos de personalización y servicio: información proporcionada para la creación y gestión de invitaciones digitales.</li>
                    <li>Datos relativos a la relación contractual: información necesaria para la facturación, pagos y la gestión de la relación con el usuario.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. FINALIDAD DEL TRATAMIENTO DE DATOS</h2>
                <p>Los datos personales recabados se tratarán con las siguientes finalidades:</p>
                <ul className="list-disc ml-6">
                    <li>Gestión del servicio de invitaciones digitales.</li>
                    <li>Facturación, cobros y pagos.</li>
                    <li>Atención al cliente.</li>
                    <li>Envío de comunicaciones comerciales con consentimiento expreso.</li>
                    <li>Cumplimiento de obligaciones legales.</li>
                    <li>Mejora de los servicios.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">4. LEGITIMACIÓN PARA EL TRATAMIENTO</h2>
                <p>La base legal para el tratamiento de los datos personales varía según la finalidad:</p>
                <ul className="list-disc ml-6">
                    <li>Gestión del servicio y relación contractual: Ejecución de un contrato.</li>
                    <li>Atención al cliente: Consentimiento del usuario.</li>
                    <li>Comunicaciones comerciales: Consentimiento expreso.</li>
                    <li>Cumplimiento de obligaciones legales: Cumplimiento normativo.</li>
                    <li>Mejora de servicios: Interés legítimo del Responsable.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">5. CONSERVACIÓN DE LOS DATOS</h2>
                <p>Los datos personales se conservarán mientras dure la relación contractual y hasta que el usuario solicite su supresión. También se conservarán durante los plazos legales exigidos.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">6. COMUNICACIÓN DE DATOS A TERCEROS</h2>
                <p>Invited.es comunicará los datos personales únicamente a:</p>
                <ul className="list-disc ml-6">
                    <li>Proveedores de servicios auxiliares.</li>
                    <li>Organismos públicos cuando la ley lo exija.</li>
                    <li>Colaboradores para la gestión de la invitación digital.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">7. DERECHOS DE LOS USUARIOS</h2>
                <p>El usuario puede ejercer los siguientes derechos:</p>
                <ul className="list-disc ml-6">
                    <li>Derecho de acceso.</li>
                    <li>Derecho de rectificación.</li>
                    <li>Derecho de supresión (derecho al olvido).</li>
                    <li>Derecho a la limitación del tratamiento.</li>
                    <li>Derecho a la portabilidad.</li>
                    <li>Derecho de oposición.</li>
                </ul>
                <p>Para ejercer estos derechos, el usuario podrá enviar un correo a <strong>hola@platita.es</strong>, indicando en el asunto “Protección de Datos” y adjuntando una copia de su documento de identidad.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">8. SEGURIDAD DE LOS DATOS</h2>
                <p>Invited.es se compromete a implantar medidas técnicas y organizativas para garantizar la seguridad de los datos personales.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">9. USO DE COOKIES</h2>
                <p>Para más información, consulta nuestra <a href="/cookies-policy" className="text-blue-500 hover:underline">Política de Cookies</a>.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">10. ACTUALIZACIÓN DE LA POLÍTICA DE PRIVACIDAD</h2>
                <p>Esta política puede modificarse. Se informará de cambios relevantes en el sitio web.</p>
            </section>
        </div>
    );
}

export default PrivacyPolicy;
