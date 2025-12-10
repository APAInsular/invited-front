import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SongLink.css";

const SongLink = ({ songUrl, songTitle, text }) => {
    const [player, setPlayer] = useState(null);
    const [playing, setPlaying] = useState(false);
    const videoId = songUrl.split("v=")[1]?.split("&")[0];
    const playerRef = useRef(null);

    useEffect(() => {
        if (window.YT && window.YT.Player && playerRef.current) {
            createPlayer();
        } else {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag?.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                createPlayer();
            };
        }

        function createPlayer() {
            if (!playerRef.current) return;
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
                    onReady: (event) => setPlayer(newPlayer)
                }
            });
        }
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

    console.log(text.title)

    return (
        <div className="container text-center my-4">
            <h2 className="mb-3 fontTitle"><strong>{text.title}</strong></h2>
            <div className="song-link">
                <p>{text.playingText}<strong>{songTitle}</strong></p>
                <button className="btn btn-cancion mt-2" onClick={togglePlay}>
                    {playing ? `${text.pauseButton}` : `${text.playButton}`}
                </button>
                <div
                    id="youtube-player"
                    ref={playerRef}
                    style={{ width: "1px", height: "1px", opacity: 0, position: "absolute", left: "-10000px" }}
                ></div>
            </div>
        </div>
    );
};

export default SongLink;
