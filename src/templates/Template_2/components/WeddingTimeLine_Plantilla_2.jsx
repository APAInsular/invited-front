import React from 'react';

const WeddingTimeLine_Plantilla_2 = ({ events }) => {
    return (
        <div className="timeline-container">
            <h2 className="section-title-template2 text-center mb-5">Itinerario de la boda</h2>
            <div className="timeline-template2">
                {events.map((event, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot-template2"></div>
                        <div className="timeline-content-template2">
                            <h5>{event.name}</h5>
                            <p>
                                {event.location.city}<br />
                                {event.location.country}<br />
                                🕒 {event.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeddingTimeLine_Plantilla_2;
