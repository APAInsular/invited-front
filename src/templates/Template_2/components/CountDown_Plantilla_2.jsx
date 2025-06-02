import React, { useState, useEffect } from 'react';

const CountDown_Plantilla_2 = ({ weddingDate }) => {
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

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [weddingDate]);

    return (
        <section className="countdown-section-template2 mt-4 py-5">
            <h2 className="countdown-title-template2 mb-4">Solo faltan....</h2>
            <div className="countdown-numbers-template2 mt-4 pt-5">
                <div className="countdown-item-template2">
                    <span className="number-template2">{timeLeft.days.toString().padStart(2, '0')}</span>
                    <span className="label-template2">Días</span>
                </div>
                <div className="countdown-item-template2">
                    <span className="number-template2">{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className="label-template2">Horas</span>
                </div>
                <div className="countdown-item-template2">
                    <span className="number-template2">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className="label-template2">Minutos</span>
                </div>
                <div className="countdown-item-template2">
                    <span className="number-template2">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className="label-template2">Segundos</span>
                </div>
            </div>
        </section>
    );
};

export default CountDown_Plantilla_2;
