import { useEffect, useRef, useState } from "react";

const useSong = (url) => {
    const [player, setPlayer] = useState(null);
    const [playing, setPlaying] = useState(false);

    const videoId = url.split("v=")[1]?.split("&")[0];

    const playerRef = useRef(null);

    useEffect(() => {
        if (!videoId) return;
        let created = false;

        function createPlayer() {
            if (!playerRef.current || created) return;
            created = true;

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
                    onReady: () => { setPlayer(newPlayer); setPlaying(false) }
                }
            });
        }

        //  && playerRef.current
        // ? Api loaded?
        if (window.YT && window.YT.Player) {
            createPlayer();
        } else {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(tag);

            window.onYouTubeIframeAPIReady = createPlayer;
        }

        // ? Cleanup
        return () => {
            if (player) {
                player.stopVideo();
                player.destroy();
            }
        };

    }, [videoId]);


    const togglePlay = () => {
        if (!player) return;

        if (playing) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
        setPlaying((p) => !p);
    };
    return {
        player,
        playing,
        togglePlay,
        playerRef
    };
}

export default useSong;
