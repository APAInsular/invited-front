import React from 'react';

const WeddingTimeLine_Plantilla_5 = ({ events }) => {
    return (
        <div className="timeline-container ">
            <h2 className="section-title-template5 text-center mt-5 mb-5">Itinerario</h2>
            <div >
                {events.map((event, index) => (
                    <div key={index} className="timeline-item-template5 mt-5 mb-4">
                        <div>
                            <p>
                                {event.location.country}<br />
                                {event.time} {event.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="timeline-cake-template5 "></div>
        </div>
    );
};

export default WeddingTimeLine_Plantilla_5;
