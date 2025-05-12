import React from 'react';

const CountDown_Plantilla_1 = () => (
    <section className="py-5 text-center section-bg bg-countdown">
        <h2 className="section-title"><strong>Nos casamos en...</strong></h2>
        <div className="countdown">
            {[
                { label: 'Días', number: '12', flower: 'flor_dias_y_minutos-removebg-preview.png' },
                { label: 'Horas', number: '08', flower: 'flor_horas_y_segundos-removebg-preview.png' },
                { label: 'Minutos', number: '45', flower: 'flor_dias_y_minutos-removebg-preview.png' },
                { label: 'Segundos', number: '30', flower: 'flor_horas_y_segundos-removebg-preview.png' },
            ].map(({ label, number, flower }, i) => (
                <div key={i} className="countdown-item">
                    <div className="flower" style={{ backgroundImage: `url('./images/${flower}')` }}>
                        <span className="number">{number}</span>
                    </div>
                    <span className="label">{label}</span>
                </div>
            ))}
        </div>
    </section>
);

export default CountDown_Plantilla_1;
