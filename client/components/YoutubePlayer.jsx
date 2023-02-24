import React, { useState, useEffect } from 'react';

const YouTubePlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Load the YouTube Player API script

    const newPlayer = new window.YT.Player('player', {
      height: '320',
      width: '640',
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        playsinline: 1
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });

    // newPlayer.playVideo();

    // Create a new YouTube.Player instance when the API script is loaded
    setPlayer(newPlayer);
    window.onYouTubeIframeAPIReady = () => {
      setPlayer(newPlayer);
    };

    // Clean up the player instance when the component unmounts
    return () => {
      // player.destroy();
      if (player && typeof player.destroy === 'function') {
        player.destroy();
      }
      setPlayer(null);
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const handlePlay = () => {
    if (player) {
      player.playVideo();
    }
  };

  const onPlayerStateChange = (event) => {
    // Handle changes in player state here
    onPlayerReady(event);
  };

  return (
    <div>
      <div id="player" />
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default YouTubePlayer;
