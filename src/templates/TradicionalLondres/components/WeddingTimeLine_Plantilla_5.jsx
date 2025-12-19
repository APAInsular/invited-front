import React from 'react';

const WeddingTimeLine_Plantilla_5 = ({ events }) => {
    return (
        <div className="timeline-container ">
            <h2 className="section-title-template5 text-center mt-5 ">Itinerario</h2>
            <div className="timeline-frame-template5">
                <div className='timeline-wrapper-template' >
                    <div className="timeline-goldenLine-template5"></div>
                    <div className="timeline-items-template5">
                        {events.map((event, index) => (
                            <div key={index} className="timeline-item-template5 mt-5 ">
                                <div>
                                    <p>
                                        {event.name}<br />
                                        {event.time} {event.location.country}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingTimeLine_Plantilla_5;
