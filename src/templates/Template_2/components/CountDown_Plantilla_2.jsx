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
        <section className="py-5 text-center bg-countdown-template2 my-4 py-5">
            <h2 className="section-title-template2"><strong>Nos casamos en...</strong></h2>
            <div className="countdown-template2">
                <div className="countdown-item-template2">
                    <div className="flower-template2">
                        <span className="number-template2">{timeLeft.days}</span>
                    </div>
                    <span className="label">Días</span>
                </div>
                <div className="countdown-item-template2">
                    <div className="flower-template2" style={{ backgroundImage: "url('./images/flor_horas_y_segundos-removebg-preview.png')" }}>
                        <span className="number-template2">{timeLeft.hours}</span>
                    </div>
                    <span className="label">Horas</span>
                </div>
                <div className="countdown-item-template2">
                    <div className="flower-template2" style={{ backgroundImage: "url('./images/flor_dias_y_minutos-removebg-preview.png')" }}>
                        <span className="number-template2">{timeLeft.minutes}</span>
                    </div>
                    <span className="label">Minutos</span>
                </div>
                <div className="countdown-item-template2">
                    <div className="flower-template2" style={{ backgroundImage: "url('./images/flor_horas_y_segundos-removebg-preview.png')" }}>
                        <span className="number-template2">{timeLeft.seconds}</span>
                    </div>
                    <span className="label">Segundos</span>
                </div>
            </div>
        </section>
    );
};

export default CountDown_Plantilla_2;
