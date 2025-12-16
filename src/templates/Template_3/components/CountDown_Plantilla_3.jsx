import React, { useState, useEffect } from 'react';

const CountDown_Plantilla_3 = ({ weddingDate }) => {
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

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('es-ES', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [weddingDate]);

    return (
        <section className="countdown-section-template3 mt-4 py-4">
            <h2 className="section-title-template3 mb-4">Cuenta atrás</h2>
            <div className="countdown-numbers-template3 mt-4 pt-1">
                <div className="countdown-item-template3">
                    <span className="number-template3">{timeLeft.days.toString().padStart(2, '0')}</span>
                    <span className="label-template3">Días</span>
                </div>
                <div className="countdown-item-template3">
                    <span className="number-template3">{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className="label-template3">Horas</span>
                </div>
                <div className="countdown-item-template3">
                    <span className="number-template3">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className="label-template3">Minutos</span>
                </div>
                <div className="countdown-item-template3">
                    <span className="number-template3">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className="label-template3">Segundos</span>
                </div>
            </div>
            <p className="invite-date-template3 mt-4">
                {formatDate(weddingDate)}
            </p>
        </section>
    );
};

export default CountDown_Plantilla_3;
