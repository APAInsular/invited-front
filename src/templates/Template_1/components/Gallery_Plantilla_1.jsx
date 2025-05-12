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
        <div class="container">
            <h2 class="section-title text-center mb-5">Conoce nuestra historia</h2>
            <div class="row g-4">
                <div
                    ref={sliderRef}
                    className="slider-track"
                    style={{ transform: `translateX(${offset}px)`, transition: "transform 0.1s linear" }}
                >
                    {[...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images].map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index}`} className="slider-image" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery_Plantilla_1;
