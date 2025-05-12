import React from 'react';

const Gallery_Plantilla_1 = () => (
    <section className="py-5 mt-4 section-bg bg-gallery">
        <div className="container">
            <h2 className="section-title text-center mb-5">Conoce nuestra historia</h2>
            <div className="row g-4">
                {['photo1.jpg', 'photo2.jpg', 'photo3.jpg'].map((src, i) => (
                    <div className="col-md-4" key={i}>
                        <img src={`images/${src}`} className="img-fluid rounded" alt={`Historia ${i + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Gallery_Plantilla_1;
