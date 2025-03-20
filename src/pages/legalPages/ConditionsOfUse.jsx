import React from "react";

const ConditionsOfUse = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">CONDICIONES GENERALES DE USO</h1>
            <p className="text-sm text-gray-600 mb-2">Última actualización: 30/01/2025</p>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">1. OBJETO Y ACEPTACIÓN</h2>
                <p>
                    Estas Condiciones Generales de Uso regulan el acceso y uso del sitio web
                    www.isla32.com, así como sus contenidos y servicios.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">2. IDENTIFICACIÓN DEL TITULAR</h2>
                <p>
                    <strong>Empresa:</strong> APA Insular SL <br />
                    <strong>CIF:</strong> B04978920 <br />
                    <strong>Domicilio:</strong> Caserío Tesjuate, 39A, 35611, Puerto del Rosario, Las Palmas <br />
                    <strong>Email de contacto:</strong> info@isla32.com
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">3. DESCRIPCIÓN DEL SERVICIO</h2>
                <ul className="list-disc ml-5">
                    <li>Publicidad y reserva de viviendas vacacionales.</li>
                    <li>Reserva de experiencias turísticas y de ocio.</li>
                    <li>Compra de productos locales.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">4. ACCESO Y REGISTRO</h2>
                <ul className="list-disc ml-5">
                    <li>El acceso general es libre, pero algunas funciones requieren registro.</li>
                    <li>El usuario debe proporcionar información veraz.</li>
                    <li>Las credenciales de acceso son responsabilidad del usuario.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">5. OBLIGACIONES DEL USUARIO</h2>
                <ul className="list-disc ml-5">
                    <li>Respetar la legislación vigente y las presentes condiciones.</li>
                    <li>No publicar contenido ilícito, ofensivo o que vulnere derechos de terceros.</li>
                    <li>Hacer un uso adecuado de la plataforma.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">6. CONDICIONES ESPECÍFICAS</h2>
                <p>Aplicables a propietarios de viviendas, organizadores de experiencias y vendedores.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">7. RESPONSABILIDAD Y GARANTÍAS</h2>
                <p>
                    Isla32 actúa como intermediario y no se hace responsable por la ejecución efectiva
                    de los servicios o la calidad de los productos vendidos.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold">8. MODIFICACIONES Y LEGISLACIÓN APLICABLE</h2>
                <p>
                    Estas condiciones pueden ser modificadas en cualquier momento y se rigen por la
                    legislación española, sometiéndose a los tribunales de Las Palmas.
                </p>
            </section>
        </div>
    );
}

export default ConditionsOfUse;