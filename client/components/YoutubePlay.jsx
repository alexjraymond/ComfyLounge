import React, { useEffect, useState, useRef } from 'react';
import YouTube from 'react-youtube';

export default function YoutubeFunctionality({ videoId }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const [volume, setVolume] = useState(30);
  const [preMute, setPreMute] = useState(volume);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  function PlayPauseButton({ onClick, isPlaying }) {
    return (
      <button onClick={onClick} className="play-pause">
        {isPlaying ? <box-icon name='pause-circle' /> : <box-icon name='play-circle' />}
      </button>
    );
  }

  function MuteButton({ onClick }) {
    if (volume === 0) {
      return (
        <button onClick={onClick} className="mute" >
          <box-icon name='volume-mute' />
        </button >
      );
    } else {
      return (
        <button onClick={onClick} className="mute" >
          <box-icon type='solid' name='volume-full' />
        </button>
      );
    }
  }

  const handleMute = () => {
    if (volume === 0) {
      setVolume(preMute);
    } else {
      setPreMute(volume);
      setVolume(0);
    }
  };

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
    <>
      <PlayPauseButton
        onClick={handleTogglePlay}
        isPlaying={isPlaying} >
        {isPlaying ? 'Pause' : 'Play'}
      </PlayPauseButton>
      <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} />
      <MuteButton
        onClick={handleMute}
        isPlaying={isPlaying} />

      <YouTube
        opts={opts}
        videoId={videoId}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onReady={(event) => { playerRef.current = event.target; }}
      />
    </>
  );
}
