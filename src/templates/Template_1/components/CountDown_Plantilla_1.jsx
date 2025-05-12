import React from 'react';

const CountDown_Plantilla_1 = ({ dias, horas, minutos, segundos }) => (
    <section className="section-bg bg-countdown">
        <h2 className="section-title">¡Ya casi llega el gran día!</h2>
        <div className="countdown">
            {[
                { label: 'Días', valor: dias },
                { label: 'Horas', valor: horas },
                { label: 'Minutos', valor: minutos },
                { label: 'Segundos', valor: segundos },
            ].map((item, i) => (
                <div key={i} className="countdown-item">
                    <div
                        className="flower"
                        style={{ backgroundImage: 'url("../images/flor_dias_y_minutos-removebg-preview.png")' }}
                    >
                        <span className="number">{item.valor}</span>
                    </div>
                    <div className="label">{item.label}</div>
                </div>
            ))}
        </div>
    </section>
);

export default CountDown_Plantilla_1;
