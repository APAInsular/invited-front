import React from 'react';

const CountDown_Plantilla_1 = ({ dias, horas, minutos, segundos }) => (
    <section class="py-5 text-center">
        <h2 class="section-title"><strong>Nos casamos en...</strong></h2>
        <div class="countdown">
            <div class="countdown-item">
                <div class="flower"
                    style={{ backgroundImage: "url('./images/flor_dias_y_minutos-removebg-preview.png');" }}>
                    <span class="number">{dias}</span>
                </div>
                <span class="label">Días</span>
            </div>
            <div class="countdown-item">
                <div class="flower"
                    style={{ backgroundImage: "url('./images/flor_horas_y_segundos-removebg-preview.png');" }}>
                    <span class="number">{horas}</span>
                </div>
                <span class="label">Horas</span>
            </div>
            <div class="countdown-item">
                <div class="flower"
                    style={{ backgroundImage: "url('./images/flor_dias_y_minutos-removebg-preview.png');" }}>
                    <span class="number">{minutos}</span>
                </div>
                <span class="label">Minutos</span>
            </div>
            <div class="countdown-item">
                <div class="flower"
                    style={{ backgroundImage: "url('./images/flor_horas_y_segundos-removebg-preview.png');" }}>
                    <span class="number">{segundos}</span>
                </div>
                <span class="label">Segundos</span>
            </div>
        </div>
    </section>
);

export default CountDown_Plantilla_1;
