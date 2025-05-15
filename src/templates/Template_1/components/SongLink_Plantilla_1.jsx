import React, { useState, useEffect, useRef } from 'react';

const SongLink_Plantilla_1 = ({ songUrl, songTitle }) => {
    const [player, setPlayer] = useState(null);
    const [playing, setPlaying] = useState(false);
    const videoId = songUrl.split("v=")[1]?.split("&")[0];
    const playerRef = useRef(null);

    useEffect(() => {
        // Cargar la API de YouTube
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            const newPlayer = new window.YT.Player(playerRef.current, {
                height: "0",
                width: "0",
                videoId: videoId,
                playerVars: {
                    autoplay: 0,
                    mute: 0,
                    controls: 0,
                    loop: 1,
                    playlist: videoId,
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0
                },
                events: {
                    onReady: (event) => setPlayer(event.target)
                }
            });
        };
    }, [videoId]);

    const togglePlay = () => {
        if (player) {
            if (playing) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
            setPlaying(!playing);
        }
    };

    return (
        <section class="py-5 text-center">
            <div className="container text-center my-4">
                <h2 className="mb-3 fontTitle"><strong>🎶 Nuestra canción especial 🎶</strong></h2>
                <div className="song-link">
                    <p>Reproduciendo la canción: <strong>{songTitle}</strong></p>
                    <button className="btn btn-cancion mt-2" onClick={togglePlay}>
                        {playing ? "⏸️ Pausar Canción" : "▶️ Reproducir Canción"}
                    </button>
                    <div
                        ref={playerRef}
                        style={{ width: "1px", height: "1px", opacity: 0, position: "absolute", left: "-10000px" }}
                    ></div>
                </div>
            </div>
        </section >
    );
}

export default SongLink_Plantilla_1;
