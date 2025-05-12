import React, { useState, useEffect } from 'react';

const CountDown_Plantilla_1 = ({ weddingDate }) => {

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
    }, [calculateTimeLeft, weddingDate]);

    return (
        <section class="py-5 text-center">
            <h2 class="section-title"><strong>Nos casamos en...</strong></h2>
            <div class="countdown">
                <div class="countdown-item">
                    <div class="flower"
                        style={{ backgroundImage: "url('./images/flor_dias_y_minutos-removebg-preview.png');" }}>
                        <span class="number">{timeLeft.days}</span>
                    </div>
                    <span class="label">Días</span>
                </div>
                <div class="countdown-item">
                    <div class="flower"
                        style={{ backgroundImage: "url('./images/flor_horas_y_segundos-removebg-preview.png');" }}>
                        <span class="number">{timeLeft.hours}</span>
                    </div>
                    <span class="label">Horas</span>
                </div>
                <div class="countdown-item">
                    <div class="flower"
                        style={{ backgroundImage: "url('./images/flor_dias_y_minutos-removebg-preview.png');" }}>
                        <span class="number">{timeLeft.minutes}</span>
                    </div>
                    <span class="label">Minutos</span>
                </div>
                <div class="countdown-item">
                    <div class="flower"
                        style={{ backgroundImage: "url('./images/flor_horas_y_segundos-removebg-preview.png');" }}>
                        <span class="number">{timeLeft.seconds}</span>
                    </div>
                    <span class="label">Segundos</span>
                </div>
            </div>
        </section>
    );
}

export default CountDown_Plantilla_1;
