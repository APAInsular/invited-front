import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WeddingWebsite.css";

const CountDown = ({ weddingDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date();
        const targetDate = new Date(weddingDate); // Convertir la cadena a fecha
        const difference = targetDate - now;

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
    }, [weddingDate]); // Dependencia añadida para recalcular si cambia

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
