import React, { useState, useEffect } from 'react';
import useCountdown from '../../logic/useCountdown';

const CountDown_Plantilla_1 = ({ weddingDate, text }) => {

    const timeLeft = useCountdown(weddingDate);

    return (
        <section class="py-5 text-center">
            <h2 class="section-title"><strong>{text.title}</strong></h2>
            <div class="countdown">
                <div class="countdown-item">
                    <div class="flower">
                        <span class="number">{timeLeft.days}</span>
                    </div>
                    <span class="label">{text.unit1}</span>
                </div>
                <div class="countdown-item">
                    <div class="flower"
                        style={{ backgroundImage: "url('./images/flor_horas_y_segundos-removebg-preview.png');" }}>
                        <span class="number">{timeLeft.hours}</span>
                    </div>
                    <span class="label">{text.unit2}</span>
                </div>
                <div class="countdown-item">
                    <div class="flower"
                        style={{ backgroundImage: "url('./images/flor_dias_y_minutos-removebg-preview.png');" }}>
                        <span class="number">{timeLeft.minutes}</span>
                    </div>
                    <span class="label">{text.unit3}</span>
                </div>
                <div class="countdown-item">
                    <div class="flower"
                        style={{ backgroundImage: "url('./images/flor_horas_y_segundos-removebg-preview.png');" }}>
                        <span class="number">{timeLeft.seconds}</span>
                    </div>
                    <span class="label">{text.unit4}</span>
                </div>
            </div>
        </section>
    );
}

export default CountDown_Plantilla_1;
