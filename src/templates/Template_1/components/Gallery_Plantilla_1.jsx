import React, { useState, useEffect, useRef } from 'react';

const Gallery_Plantilla_1 = ({ images, speed = 20 }) => {
    const sliderRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const slider = sliderRef.current;
        const totalWidth = slider.scrollWidth / 2;

        const interval = setInterval(() => {
            setOffset((prevOffset) => {
                const nextOffset = prevOffset - 1;
                return Math.abs(nextOffset) >= totalWidth ? 0 : nextOffset;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [speed]);

    return (
        <div className="container">
            <h2 className="section-title text-center mb-5">Conoce nuestra historia</h2>
            <div className="slider-wrapper">
                <div
                    ref={sliderRef}
                    className="slider-track"
                    style={{ transform: `translateX(${offset}px)`, transition: "transform 0.1s linear" }}
                >
                    {[...images, ...images, ...images, ...images].map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index}`} className="slider-image" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery_Plantilla_1;
