import React from 'react';

const timelineEvents = [
    {
        title: 'Cena de ensayo',
        location: 'Hotel Meliá Villaverde',
        date: 'Viernes 4 de octubre',
        time: '21:00h'
    },
    {
        title: 'Boda',
        location: 'Pazo de Santa Catalina - Salón de Actos',
        date: 'Sábado 5 de octubre',
        time: '14:30h'
    },
    {
        title: 'Cóctel',
        location: 'Pazo de Santa Catalina - Terraza del Conde',
        time: '18:30h'
    },
    {
        title: 'Cena y Baile',
        location: 'Pazo de Santa Catalina - Jardín Buena Vista',
        time: '21:00h'
    }
];

const WeddingTimeLine_Plantilla_1 = () => (
    <section className="py-5 mt-4 section-bg bg-itinerario">
        <div className="container">
            <h2 className="section-title text-center mb-5">Itinerario de la boda:</h2>
            <div className="timeline">
                {timelineEvents.map((event, i) => (
                    <div key={i} className="timeline-item">
                        <div className="timeline-content">
                            <h5>{event.title}</h5>
                            <p>
                                {event.location}<br />
                                {event.date && <>{event.date}<br /></>}
                                {event.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default WeddingTimeLine_Plantilla_1;
