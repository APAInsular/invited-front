import React from 'react';

const events = [
    {
        title: "Cena de ensayo",
        location: "Hotel Meliá Villaverde",
        place: "",
        date: "Viernes 4 de octubre",
        time: "21:00h",
    },
    {
        title: "Boda",
        location: "Pazo de Santa Catalina",
        place: "Salón de Actos",
        date: "Sábado 5 de octubre",
        time: "14:30h",
    },
    {
        title: "Cóctel",
        location: "Pazo de Santa Catalina",
        place: "Terraza del Conde",
        date: "Sábado 5 de octubre",
        time: "18:30h",
    },
    {
        title: "Cena y Baile",
        location: "Pazo de Santa Catalina",
        place: "Jardín Buena Vista",
        date: "Sábado 5 de octubre",
        time: "21:00h",
    }
];

const WeddingTimeLine_Plantilla_1 = ({ events }) => {
    return (
        <div className="timeline-container">
            <h2 className="section-title text-center mb-5">Itinerario de la boda</h2>
            <div className="timeline">
                {events.map((event, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h5>{event.name}</h5>
                            <p>
                                {event.location.city}<br />
                                {event.location.country}<br />
                                🕒 {event.time.slice(0, 5)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeddingTimeLine_Plantilla_1;
