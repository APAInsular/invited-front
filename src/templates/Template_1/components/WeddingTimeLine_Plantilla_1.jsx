import React from 'react';
import './WeddingTimeline.css'; // Asegúrate de importar el CSS

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

const WeddingTimeLine_Plantilla_1 = () => {
    return (
        <div className="timeline-container">
            <h2 className="section-title text-center mb-5">Itinerario de la boda</h2>
            <div className="timeline">
                {events.map((event, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h5>{event.title}</h5>
                            <p>
                                {event.location}<br />
                                {event.place && <>{event.place}<br /></>}
                                {event.date}<br />
                                {event.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeddingTimeLine_Plantilla_1;
