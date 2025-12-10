import React from "react";
import "./TimeLine.css";

const Timeline = ({ events, text }) => {
  return (
    <div className="container">
      <h2 className="text-center my-4 fontTitle">
        <strong>{text.title}</strong>
      </h2>
      <div className="timeline position-relative">
        <div className="timeline-line"></div>

        {events.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="card p-3">
              <h5>
                <i className={`bi ${event.icon} icon`}></i> {event.name}
              </h5>
              {event.location?.city && event.location?.country && (
                <p>
                  📍 {event.location.city} - {event.location.country}
                </p>
              )}
              <p>🕒 {event.time.slice(0, 5)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
