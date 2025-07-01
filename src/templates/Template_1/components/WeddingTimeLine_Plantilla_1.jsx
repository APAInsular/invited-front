import React from 'react';

const WeddingTimeLine_Plantilla_1 = ({ events, text }) => {
    return (
        <div className="timeline-container">
            <h2 className="section-title text-center mb-5">{text.title}</h2>
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
