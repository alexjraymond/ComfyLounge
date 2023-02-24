import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

export default function Example({ videoId }) {

  useEffect(() => {

    return () => {

    };
  }, [videoId]);

  const opts = {
    height: '390',
    width: '640',
    videoId,
    playerVars: {

      autoplay: 1
    }
  };

  return <YouTube opts={opts} videoId={videoId} />;

}
