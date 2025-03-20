import React from "react";

const CookiesPolicy = () => {
    return (
        <div className="container mx-auto p-6 shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">POLÍTICA DE COOKIES</h1>
            <p className="text-gray-600 mb-2">Fecha de última actualización: 19-03-2025</p>

            <h2 className="text-xl font-semibold mt-4">1. ¿Qué son las cookies?</h2>
            <p className="text-gray-700">
                Las cookies son pequeños archivos de texto que se almacenan en el dispositivo (ordenador, móvil o tableta) del usuario cuando visita un sitio web. Estas cookies permiten que el Sitio Web recuerde sus acciones y preferencias (como el idioma, el tamaño de fuente, etc.) durante un período de tiempo, facilitando así la navegación y mejorando su experiencia.
            </p>

            <h2 className="text-xl font-semibold mt-4">2. ¿Qué cookies utiliza Invited.es?</h2>
            <p className="text-gray-700">
                Invited.es, una aplicación desarrollada por APA Insular SL, utiliza cookies propias y de terceros con el fin de optimizar la experiencia del usuario. En concreto, empleamos las siguientes categorías de cookies:
            </p>

            <h3 className="text-lg font-semibold mt-2">Cookies esenciales:</h3>
            <p className="text-gray-700">
                Estas cookies son imprescindibles para el correcto funcionamiento del Sitio Web. Permiten, por ejemplo, la autenticación del usuario, la gestión de sesiones y el acceso a áreas seguras. Sin ellas, el Sitio Web no podría funcionar adecuadamente.
            </p>

            <h3 className="text-lg font-semibold mt-2">Cookies de rendimiento y análisis:</h3>
            <p className="text-gray-700">
                Estas cookies recopilan información anónima sobre cómo los usuarios interactúan con el Sitio Web. Nos permiten medir el rendimiento, detectar posibles problemas y optimizar la experiencia de navegación. Entre estas herramientas puede estar, por ejemplo, Google Analytics (o servicios similares).
            </p>

            <h3 className="text-lg font-semibold mt-2">Cookies de funcionalidad:</h3>
            <p className="text-gray-700">
                Estas cookies recuerdan las preferencias y elecciones que realiza el usuario en el Sitio Web, como el idioma o la personalización de ciertos contenidos, para ofrecer una experiencia más adaptada y personalizada.
            </p>

            <h3 className="text-lg font-semibold mt-2">Cookies de publicidad (si las hubiere):</h3>
            <p className="text-gray-700">
                En caso de utilizarse, estas cookies se emplean para mostrar anuncios relevantes y medir la efectividad de las campañas publicitarias. Generalmente, son instaladas por terceros y su uso está sujeto a sus propias políticas de privacidad.
            </p>

            <h2 className="text-xl font-semibold mt-4">3. Gestión y eliminación de cookies</h2>
            <p className="text-gray-700">
                Usted puede configurar su navegador para aceptar, rechazar o eliminar las cookies. La mayoría de los navegadores ofrecen opciones de configuración para gestionar las cookies; sin embargo, la desactivación de algunas de ellas podría afectar la funcionalidad y el rendimiento del Sitio Web.
            </p>
            <p className="text-gray-700">
                Para obtener información detallada sobre cómo gestionar o eliminar cookies, consulte las instrucciones que ofrece su navegador o visite <a href="https://www.allaboutcookies.org" className="text-blue-500 underline">www.allaboutcookies.org</a>.
            </p>

            <h2 className="text-xl font-semibold mt-4">4. Cambios en la Política de Cookies</h2>
            <p className="text-gray-700">
                Esta Política de Cookies podrá ser actualizada en función de cambios legislativos o de las prácticas de uso de cookies en el Sitio Web. Se recomienda a los usuarios revisar esta política periódicamente para estar informados sobre las actualizaciones.
            </p>

            <h2 className="text-xl font-semibold mt-4">5. Contacto</h2>
            <p className="text-gray-700">
                Si tiene alguna duda o desea obtener más información acerca del uso de cookies en Invited.es, por favor, póngase en contacto con nosotros a través del correo electrónico: <a href="mailto:contacto@invited.es" className="text-blue-500 underline">contacto@invited.es</a>.
            </p>
        </div>
    );
}

export default CookiesPolicy