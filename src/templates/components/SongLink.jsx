import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WeddingWebsite.css";

const SongLink = ({ songUrl, songTitle }) => {
    const [play, setPlay] = useState(false);
    const videoId = songUrl.split("v=")[1]?.split("&")[0];

    return (
        <div className="container text-center my-4">
            <h2 className="mb-3 fontTitle"><strong>🎶 Nuestra canción especial 🎶</strong></h2>
            <div className="song-link">
                <p>Reproduciendo la canción: <strong>{songTitle}</strong></p>
                {/* Botón para iniciar la reproducción */}
                <button className="btn btn-cancion mt-2" onClick={() => setPlay(true)}>
                    ▶️ Reproducir Canción
                </button>

                {/* Iframe solo se muestra cuando se presiona el botón */}
                {play && (
                    <iframe
                        width="0"
                        height="0"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&loop=1&playlist=${videoId}`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={songTitle}
                        style={{ display: "none" }} // Ocultamos el iframe
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default SongLink;
