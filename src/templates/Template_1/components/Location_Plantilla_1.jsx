import React from 'react';

const Location_Plantilla_1 = () => (
    <section className="section-bg bg-itinerario">
        <h2 className="section-title">Ubicación</h2>
        <p className="section-subtitle">Nos vemos en la Finca El Jardín, Tenerife</p>
        <div style={{ padding: "1rem" }}>
            <iframe
                title="Ubicación Boda"
                src="https://www.google.com/maps/embed?pb=!1m18!..." // Reemplaza con el enlace real
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    </section>
);

export default Location_Plantilla_1;
