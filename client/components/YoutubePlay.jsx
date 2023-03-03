import React, { useEffect, useState, useRef } from 'react';
import YouTube from 'react-youtube';

// Playing Youtube in the background for the Music Widget - Also adjusts volume and mute
export default function YoutubeFunctionality({ videoId }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const [volume, setVolume] = useState(30);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  function PlayPauseButton({ onClick, isPlaying }) {
    return (
      <div className='w-12 h-12 flex items-center justify-center bg-white rounded-full margin-bot-8'>
        <button onClick={onClick} >
          {isPlaying ? <i className="fa-solid fa-pause play-button" /> : <i className="fa-solid fa-play play-button" />}
        </button>
      </div>
    );
  }

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.playVideo();
        playerRef.current.setVolume(volume);

      } else {
        playerRef.current.pauseVideo();
      }

    }

  }, [volume, isPlaying]);

  const opts = {
    height: '0',
    width: '0',
    videoId,
    playerVars: {

      autoplay: 1
    }
  };

  return (
    <div className='flex justify-center align-center items-center flex-col'>
      <PlayPauseButton
        onClick={handleTogglePlay}
        isPlaying={isPlaying} >
        {isPlaying ? 'Pause' : 'Play'}
      </PlayPauseButton>
      <div className='flex flex-row'>
        <i className="fa-solid fa-volume-xmark" />
        <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} className="volume-slider" />
        <i className="fa-solid fa-volume-high" />
      </div>

      <YouTube
        opts={opts}
        videoId={videoId}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onReady={(event) => { playerRef.current = event.target; }}
      />
    </div>
  );
}
