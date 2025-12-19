import React from 'react';

const ArmoniosoMaltaTimeLine = ({ events }) => {
    return (
        <div className="timeline-container">
            <h2 className="section-title-ArmoniosoMalta text-center mb-5">Itinerario</h2>
            <div >
                {events.map((event, index) => (
                    <div key={index} className="timeline-item">
                        <div>
                            <h5>{event.name}</h5>
                            <p>
                                {/* {event.location.country}<br /> */}
                                🕒 {event.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArmoniosoMaltaTimeLine;
