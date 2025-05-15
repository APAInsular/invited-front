import React, { useState, useEffect, useRef } from 'react';

const Gallery_Plantilla_1 = ({ images, speed }) => {
    const sliderRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prevOffset) => prevOffset - 1);
        }, speed);

        return () => clearInterval(interval);
    }, [speed]);

    return (
        <div className="container">
            <h2 className="section-title text-center mb-5">Conoce nuestra historia</h2>
            <div className="row g-4" style={{ overflow: 'hidden' }}>
                <div
                    ref={sliderRef}
                    className="slider-track"
                    style={{
                        width: '200px',         // Ancho fijo
                        height: '400px',        // Alto fijo
                        display: 'flex',
                        transform: `translateX(${offset}px)`,
                        transition: 'transform 0.1s linear',
                        whiteSpace: 'nowrap',
                        borderRadius: '12px'    // Opcional: bordes redondeados
                    }}
                >
                    {[...images, ...images, ...images, ...images, ...images].map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className="slider-image"
                            style={{ height: '200px', marginRight: '16px', objectFit: 'cover' }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery_Plantilla_1;
