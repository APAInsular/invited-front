import React from "react";

const LegalNotice = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Aviso Legal</h1>
            <p className="text-gray-600 mb-2">Última actualización: 19 de febrero de 2025</p>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Identificación del Titular del Sitio Web</h2>
                <p><strong>Propietario:</strong> APA Insular SL</p>
                <p><strong>Registro:</strong> Inscrita el 19 de marzo de 2021, en el Tomo 203, folio 121, entrada 1, hoja IF 8879</p>
                <p><strong>CIF:</strong> B04978920</p>
                <p><strong>Domicilio Registrado:</strong> Caserío Tesjuate, 39A, 35611, Puerto del Rosario, Las Palmas</p>
                <p><strong>Oficina:</strong> C/ Canalejas, 13. Vivero 15, 35600, Puerto del Rosario, Las Palmas</p>
                <p><strong>Email:</strong> info@isla32.com</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Objeto</h2>
                <p>Este Aviso Legal regula el acceso, navegación y uso del sitio web www.isla32.com. Al acceder al sitio web, el usuario acepta expresamente las condiciones aquí establecidas.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. Usuarios</h2>
                <p>El acceso y uso del sitio web otorgan la condición de “usuario”. Algunos servicios pueden requerir un registro previo.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. Acceso y Uso del Sitio Web</h2>
                <p>El acceso al sitio web es gratuito. El usuario se compromete a no introducir virus ni realizar actividades que perjudiquen al propietario o terceros.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. Propiedad Intelectual e Industrial</h2>
                <p>Todos los contenidos del sitio web son propiedad exclusiva del titular o de terceros con licencia.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. Responsabilidad</h2>
                <p>El usuario es responsable del uso del sitio web y el titular no se hace responsable de daños derivados de un uso indebido.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">7. Protección de Datos Personales</h2>
                <p>Para conocer cómo tratamos los datos personales, consulte nuestra <a href="#" className="text-blue-500">Política de Privacidad</a>.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">8. Uso de Cookies</h2>
                <p>Este sitio web utiliza cookies. Para más información, consulte nuestra <a href="#" className="text-blue-500">Política de Cookies</a>.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">9. Modificaciones</h2>
                <p>El propietario se reserva el derecho de modificar este Aviso Legal sin previo aviso.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">10. Legislación Aplicable y Jurisdicción</h2>
                <p>Este Aviso Legal se rige por la legislación española. Cualquier disputa será resuelta en los tribunales de la provincia de Las Palmas.</p>
            </section>
        </div>
    );
}

export default LegalNotice;