import React from 'react';

const WeddingTimeLine_Plantilla_3 = ({ events }) => {
    return (
        <div className="timeline-container">
            <h2 className="section-title-template3 text-center mb-5">Itinerario</h2>
            <div >
                {events.map((event, index) => (
                    <div key={index} className="timeline-item">
                        <div>
                            <h5>{event.name}</h5>
                            <p>
                                {/* {event.location.country}<br /> */}
                                 {event.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeddingTimeLine_Plantilla_3;
