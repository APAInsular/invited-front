import React, { useState, useEffect } from 'react';

const ArmoniosoMaltaCountDown = ({ weddingDate }) => {
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
        <section className="countdown-section-ArmoniosoMalta mt-4 py-4">
            <h2 className="section-title-ArmoniosoMalta mb-4">Cuenta atrás</h2>
            <div className="countdown-numbers-ArmoniosoMalta mt-4 pt-1">
                <div className="countdown-item-ArmoniosoMalta">
                    <span className="number-ArmoniosoMalta">{timeLeft.days.toString().padStart(2, '0')}</span>
                    <span className="label-ArmoniosoMalta">Días</span>
                </div>
                <div className="countdown-item-ArmoniosoMalta">
                    <span className="number-ArmoniosoMalta">{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className="label-ArmoniosoMalta">Horas</span>
                </div>
                <div className="countdown-item-ArmoniosoMalta">
                    <span className="number-ArmoniosoMalta">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className="label-ArmoniosoMalta">Minutos</span>
                </div>
                <div className="countdown-item-ArmoniosoMalta">
                    <span className="number-ArmoniosoMalta">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className="label-ArmoniosoMalta">Segundos</span>
                </div>
            </div>
        </section>
    );
};

export default ArmoniosoMaltaCountDown;
