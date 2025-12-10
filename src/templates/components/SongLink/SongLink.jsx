import React from "react";
import "./SongLink.css";
import useSong from "../../logic/useSong";

const SongLink = ({ songUrl, songTitle, text }) => {
  const { togglePlay, playing, playerRef } = useSong(songUrl);

  return (
    <div className="container text-center my-4">
      <p className="fw-semibold fs-5 mb-2">
        <strong>{songTitle}</strong>
      </p>

      <button
        className="px-3 py-2 fw-medium"
        onClick={togglePlay}
        aria-pressed={playing}
      >
        {playing ? text.pauseButton : text.playButton}
      </button>

      <div ref={playerRef} aria-hidden="true" className="yt-player" />
    </div>
  );
};

export default SongLink;
