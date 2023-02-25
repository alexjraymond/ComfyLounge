import React, { useEffect, useState, useRef } from 'react';
import YouTube from 'react-youtube';

export default function YoutubeFunctionality({ videoId, volume }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  function PlayPauseButton({ onClick, isPlaying }) {
    return (
      <button onClick={onClick} className="play-pause">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    );
  }

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    }

  }, [isPlaying]);

  const opts = {
    height: '0',
    width: '0',
    videoId,
    volume,
    playerVars: {

      autoplay: 1
    }
  };

  return (
    <>
      <PlayPauseButton
        onClick={handleTogglePlay}
        isPlaying={isPlaying} >
        {isPlaying ? 'Pause' : 'Play'}
      </PlayPauseButton>
      <YouTube
        opts={opts}
        videoId={videoId}
        volume={volume}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onReady={(event) => { playerRef.current = event.target; }}
      />
    </>
  );
}
