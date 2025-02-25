import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WeddingWebsite.css";

const SongLink = ({ songUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ", songTitle = "Canción especial" }) => {
    return (
        <div className="container text-center my-4">
            <h2 className="mb-3">🎶 Canción especial</h2>
            <div className="song-link">
                <p>Reproduciendo la canción: <strong>{songTitle}</strong></p>
                {/* Reproductor oculto de YouTube para escuchar la canción */}
                <iframe
                    width="0"
                    height="0"
                    src={`${songUrl.replace("watch?v=", "embed/")}?autoplay=1&mute=0&controls=1&loop=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={songTitle}
                    style={{ display: "none" }} // Ocultamos el iframe
                ></iframe>
            </div>
        </div>
    );
};

export default SongLink;
