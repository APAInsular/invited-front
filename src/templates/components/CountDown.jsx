import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WeddingWebsite.css"

const weddingDate = new Date("2025-06-15T00:00:00"); // Ajusta la fecha de la boda

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date();
        const difference = weddingDate - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="container text-center my-4">
            <h2 className="mb-3 fontTitle"><strong>⏳ ¡¡¡Nos casamos en...!!! ⏳</strong></h2>
            <div className="countdown-box">
                <div className="time">{timeLeft.days} <span>días</span></div>
                <div className="time">{timeLeft.hours} <span>horas</span></div>
                <div className="time">{timeLeft.minutes} <span>minutos</span></div>
                <div className="time">{timeLeft.seconds} <span>segundos</span></div>
            </div>
        </div>
    );
};

export default CountDown;
