import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WeddingWebsite.css"

const Gallery = ({ images, speed = 50 }) => {
    const sliderRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prevOffset) => prevOffset - 1);
        }, speed);

        return () => clearInterval(interval);
    }, [speed]);

    return (
        <div className="slider-container">
            <h2 className="text-center my-4 fontTitle"><strong>🎞️ Conoce nuestra historia 🎞️</strong></h2>

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
    );
};

export default Gallery;
