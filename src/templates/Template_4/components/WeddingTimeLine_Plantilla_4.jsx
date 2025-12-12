import React from 'react';

const WeddingTimeLine_Plantilla_3 = ({ events }) => {
    return (
        <div className="timeline-container">
            <h2 className="section-title-template3 text-center mb-5">Itinerario</h2>
            <div >
                {events.map((event, index) => (
                    <div key={index} className="timeline-item">
                        <div>
                            <p>
                                {/* {event.location.country}<br /> */}
                                 {event.time} {event.name}
                            </p>
                            

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeddingTimeLine_Plantilla_3;
