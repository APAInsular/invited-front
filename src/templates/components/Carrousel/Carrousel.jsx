import { useState, useEffect, useRef } from "react";
import CarrouselCard from "./CarrouselCard/CarrouselCard";

const Carrousel = ({ images, speed = 100, height = "500px" }) => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 2;
      setTrackWidth(width);
    }
  }, [images]);

  useEffect(() => {
    if (trackWidth === 0) return;

    let lastTime = performance.now();

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      setOffset((prev) => {
        const newOffset = prev - speed * (deltaTime / 1000); // velocidad px/seg
        return newOffset <= -trackWidth ? 0 : newOffset;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [speed, trackWidth]);

  return (
    <div className="overflow-hidden" style={{ width: "100%" }}>
      <div
        ref={trackRef}
        className="d-flex"
        style={{
          transform: `translate3d(${offset}px, 0, 0)`,
          willChange: "transform",
        }}
      >
        {[...images, ...images].map((src, idx) => (
          <div key={idx} className="flex-shrink-0 me-3">
            <CarrouselCard src={src} height={height} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
