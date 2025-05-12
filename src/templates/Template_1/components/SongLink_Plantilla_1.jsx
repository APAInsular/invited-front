import React from 'react';

const SongLink_Plantilla_1 = () => (
    <section className="section-bg bg-portada">
        <h2 className="section-title">Nuestra canción</h2>
        <div style={{ padding: '1rem' }}>
            <iframe
                title="Canción especial"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/3dYD57lRAUcMHufyqn9GcI?utm_source=generator" // Sustituye por tu canción
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    </section>
);

export default SongLink_Plantilla_1;
