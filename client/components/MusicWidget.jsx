import React, { useRef, useState, useEffect } from 'react';
import YoutubeFunctionality from './YoutubePlay';
import Draggable from 'react-draggable';

// Music Widget - holds the form and takes in YoutubePlay component
export default function MusicWidget(draggableHandleClassName) {
  const widgetRef = useRef(null);
  const [videoId, setVideoId] = useState('');
  const [isPositionLoaded, setIsPositionLoaded] = useState(false);

  function handleVideoChange(newVideo) {
    setVideoId(newVideo);
  }

  const [positions, setPositions] = useState({});

  useEffect(() => {
    const existingDivPositions = JSON.parse(
      localStorage.getItem('music-container')
    );
    setPositions(existingDivPositions);
    setIsPositionLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('music-container', JSON.stringify(positions));

  }, [positions]);

  function handleStop(e, data) {
    const dummyPositions = { ...positions };
    const itemId = 'music-container';
    dummyPositions[itemId] = {};
    dummyPositions[itemId].x = data.x;
    dummyPositions[itemId].y = data.y;
    setPositions(dummyPositions);
  }

  return (

    isPositionLoaded && (

    <Draggable
      handle=".music"
      bounds="body"
      defaultPosition={
        positions === null
          ? { x: 0, y: 0 }
          : !positions
              ? { x: 0, y: 0 }
              : positions['music-container']
                ? { x: positions['music-container'].x, y: positions['music-container'].y }
                : { x: 0, y: 0 }
      }
      position={null}
      nodeRef={widgetRef}
      onStop={handleStop}
    >
      <div
      className="music-widget absolute"
      ref={widgetRef}
      style={{ width: '400px', height: '260px', background: '#93B1A7' }}
      id='music-container'
        >
        <i
        className={`fa-solid fa-grip-lines music-anchor music drag-color ${draggableHandleClassName.draggableHandleClassName}`}
        id='music-container'
          />

        <YoutubeForm videoId={videoId} onVideoChange={handleVideoChange} />

        <YoutubeFunctionality
        videoId={videoId}
      />

      </div>
      </Draggable>
    )
  )
  ;
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
