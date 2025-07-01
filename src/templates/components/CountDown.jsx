import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WeddingWebsite.css";

const CountDown = ({ weddingDate, text }) => {

    const calculateTimeLeft = () => {
        const now = new Date();
        const targetDate = new Date(weddingDate);
        const difference = targetDate - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


    function formatDateToString(dateString) {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [weddingDate]);

    return (
        <div className="container text-center my-4">
            <h2 className="mb-3 fontTitle"><strong>{text.title}</strong></h2>
            <div className="countdown-box">
                <div className="time">{timeLeft.days} <span>{text.unit1}</span></div>
                <div className="time">{timeLeft.hours} <span>{text.unit2}</span></div>
                <div className="time">{timeLeft.minutes} <span>{text.unit3}</span></div>
                <div className="time">{timeLeft.seconds} <span>{text.unit4}</span></div>
            </div>
            <br />
            <h4>{formatDateToString(weddingDate)}</h4>
        </div>
    );
};

export default CountDown;
