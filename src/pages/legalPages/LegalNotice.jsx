import React from "react";

const LegalNotice = () => {
    return (
        <div className="container my-5 mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Aviso Legal</h1>
            <p className="text-gray-600 mb-2">Última actualización: 20 de marzo de 2025</p>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Identificación del Titular</h2>
                <p><strong>Razón Social:</strong> APA Insular, S.L.</p>
                <p><strong>Domicilio Social:</strong> Caserío Tesjuate, 39A, 35611, Puerto del Rosario, Las Palmas</p>
                <p><strong>Oficina:</strong> C/ Canalejas, 13. Vivero 15, 35600, Puerto del Rosario, Las Palmas</p>
                <p><strong>CIF:</strong> B04978920</p>
                <p><strong>Teléfono:</strong> 613 026 824</p>
                <p><strong>Email:</strong> contacto@invited.es</p>
                <p><strong>Nombre de dominio:</strong> <a href="https://invited.es" className="text-blue-500">https://invited.es</a></p>
                <p><strong>Inscripción:</strong> Inscrita el 19 de marzo de 2021, en el Tomo 203, folio 121, inscripción 1º, hoja IF 8879</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Objeto</h2>
                <p>El presente Aviso Legal regula el uso de la web invited.es, incluyendo todos los servicios disponibles en ella. Su finalidad principal es la creación y gestión de invitaciones digitales para bodas, eventos, comuniones, cumpleaños y otros acontecimientos especiales.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. Propiedad Intelectual e Industrial</h2>
                <p>Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos y diseño gráfico, son propiedad exclusiva de APA Insular S.L. o de terceros con autorización para su uso. Queda prohibida su reproducción total o parcial sin autorización expresa, salvo para uso personal y privado.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. Condiciones de Uso</h2>
                <p>El usuario se compromete a utilizar la web de forma adecuada, respetando la normativa vigente y los derechos de terceros. Está prohibido cualquier uso fraudulento, ilícito o que pueda perjudicar el funcionamiento de la web o los intereses de APA Insular S.L.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. Exclusión de Responsabilidad</h2>
                <p><strong>Contenido:</strong> APA Insular S.L. no garantiza la exactitud, integridad o actualidad de los contenidos y no se responsabiliza de posibles errores u omisiones.</p>
                <p><strong>Enlaces Externos:</strong> La web puede contener enlaces a terceros, los cuales no implican afiliación ni responsabilidad sobre sus contenidos o políticas.</p>
                <p><strong>Disponibilidad y Accesibilidad:</strong> Aunque se realizan esfuerzos para mantener la web operativa, no se garantiza su funcionamiento ininterrumpido ni la ausencia de errores técnicos.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. Legislación Aplicable y Jurisdicción</h2>
                <p>Este Aviso Legal se rige por la legislación española, incluyendo la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico, la Ley Orgánica 3/2018 de Protección de Datos Personales y el Reglamento (UE) 2016/679. Cualquier disputa será resuelta en los Juzgados y Tribunales de Las Palmas de Gran Canaria.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">7. Modificaciones</h2>
                <p>APA Insular S.L. se reserva el derecho a modificar este Aviso Legal en cualquier momento y sin previo aviso. Se recomienda a los usuarios revisar periódicamente el contenido para estar informados de posibles cambios.</p>
            </section>
        </div>
    );
}

export default LegalNotice;