import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/WeddingWebsite.css'
import { Link } from "react-router-dom";

// const events = [
//     { id: 1, title: "Ceremonia", time: "17:00", location: "Iglesia San Pedro", icon: "bi-church" },
//     { id: 2, title: "Cóctel de Bienvenida", time: "18:30", location: "Jardines del Hotel", icon: "bi-cup" },
//     { id: 3, title: "Banquete", time: "20:00", location: "Salón Real", icon: "bi-egg-fried" },
//     { id: 4, title: "Fiesta y Baile", time: "22:30", location: "Salón de Eventos", icon: "bi-music-note-beamed" },
//     { id: 5, title: "Fin de la Celebración", time: "02:00", location: "Despedida", icon: "bi-stars" },
// ];

const Timeline = ({ events }) => {
    return (
        <div className="container">
            <h2 className="text-center my-4 fontTitle"><strong>💍 Itinerario de la boda 💍</strong></h2>
            <div className="timeline position-relative">
                <div className="timeline-line"></div>

                {events.map((event, index) => (
                    <div key={event.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                        <div className="card p-3">
                            <h5>
                                <i className={`bi ${event.icon} icon`}></i> {event.name}
                            </h5>
                            {event.location?.city && event.location?.country && (
                                <p>📍 {event.location.city} - {event.location.country}</p>
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
