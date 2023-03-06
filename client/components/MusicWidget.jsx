import React, { useRef, useState, useEffect } from 'react';
import YoutubeFunctionality from './YoutubePlay';
import { makeWidgetMovable } from '../functions/widgetMove';

// Music Widget - holds the form and takes in YoutubePlay component
export default function MusicWidget() {
  const widgetRef = useRef(null);
  const [videoId, setVideoId] = useState('');
  const widgetId = 'MusicWidget';

  const handleWidgetMovement = makeWidgetMovable(widgetRef, widgetId);

  function handleVideoChange(newVideo) {
    setVideoId(newVideo);
  }

  function loadWidgetPosition() {
    const coords = JSON.parse(localStorage.getItem(`widgetCoords-${widgetId}`));
    if (coords) {
      widgetRef.current.style.position = 'absolute';
      widgetRef.current.style.left = `${coords.x}px`;
      widgetRef.current.style.top = `${coords.y}px`;
    }
  }

  useEffect(() => {
    loadWidgetPosition();
  }, []);

  return (
    <div
      className="music-widget"
      ref={widgetRef}
      style={{ width: '400px', height: '260px', background: '#93B1A7' }}
      onMouseDown={handleWidgetMovement}
    >

      <YoutubeForm videoId={videoId} onVideoChange={handleVideoChange} />

      <YoutubeFunctionality
        videoId={videoId}
      />

    </div>
  );
}

function YoutubeForm(props) {
  const { onVideoChange } = props;

  function inputVideoChange(e) {

    const newVideo = (e.target.value);
    onVideoChange(newVideo);
  }

  return (
    <div>
      <h2 className='radio-title text-lg flex justify-center mb-2'>Choose a Station</h2>
      <div className='gap-2 m-auto'>
        <form className='radio-form flex flex-wrap justify-center'>

          <input type="radio" id="station1" name="radiostation" value="jfKfPfyJRdk" onChange={inputVideoChange}
          />
          <label htmlFor="station1" className='option flex radio-button justify-center lofi-girl'
          />
          <input type="radio" id="station2" name="radiostation" value="5yx6BWlEVcY" onChange={inputVideoChange} />
          <label htmlFor="station2" className='option flex radio-button justify-center flex-wrap raccoon'
          />
          <input type="radio" id="station3" name="radiostation" value="tfBVp0Zi2iE" onChange={inputVideoChange} />
          <label htmlFor="station3"
            className=' option flex radio-button justify-center flex-wrap piano-guy'
          />
          <input type="radio" id="station4" name="radiostation" value="e3L1PIY1pN8" onChange={inputVideoChange} />
          <label htmlFor="station4"
            className='option flex radio-button justify-center flex-wrap coffee-shop'
        />
        </form>
        <div className="audio-controls justify-end align-bottom" />
      </div>
    </div >
  );
}
