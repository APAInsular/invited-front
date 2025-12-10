import { useState, useEffect, useRef } from "react";
import "./Gallery.css"

const Gallery = ({ images, speed = 50, text }) => {
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
            <h2 className="text-center my-4 fontTitle"><strong>{text.title}</strong></h2>

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
