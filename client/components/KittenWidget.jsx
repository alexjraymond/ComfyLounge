import React, { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';

export default function KittenWidget({ draggableHandleId }) {

  draggableHandleId = 'kitten-container';

  const handleCats = () => {
    fetch('/api/cats')
      .then((res) => res.json())
      .then((imgurl) => { setCatUrl(imgurl.imgUrl); })
      .catch((error) => console.error(error));
  };

  const widgetRef = useRef(null);
  const [catUrl, setCatUrl] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);
  const [positions, setPositions] = useState({});

  useEffect(() => {
    const existingDivPositions = JSON.parse(
      localStorage.getItem('kitten-container')
    );
    setPositions(existingDivPositions);
    setHasLoaded(true);

  }, []);

  useEffect(() => {
    localStorage.setItem('kitten-container', JSON.stringify(positions));

  }, [positions]);

  function handleStop(e, data) {
    const dummyPositions = { ...positions };
    const itemId = e.target.id;
    dummyPositions[itemId] = {};
    dummyPositions[itemId].x = data.x;
    dummyPositions[itemId].y = data.y;
    setPositions(dummyPositions);
  }

  return hasLoaded
    ? (
      <Draggable
      handle=".kitten"
        bounds="body"
          defaultPosition={
            positions === null
              ? { x: 0, y: 0 }
              : !positions
                  ? { x: 0, y: 0 }
                  : { x: positions['kitten-container'].x, y: positions['kitten-container'].y }
          }
          position={null}
          nodeRef={widgetRef}
        onStop={handleStop}
        draggableHandleId='kitten-container'
    >
        <article
          className='kitten-widget absolute'
            ref={widgetRef}
      >
          <i
              className="fa-solid fa-grip-lines kitten drag-color"
            id={draggableHandleId}

        />
          <div>
            <div className='cat-container'>
              {catUrl
                ? (
                  <img
              src={catUrl}
              className='cat-img'
            />
                  )
                : (
                  <span className='click-button'>Click the Button!</span>
                  )}
            </div>
            <div className='refresh-div'>
              <button
            className='flex'
            onClick={handleCats}
          >
                <i className="fa-solid fa-arrows-rotate" />
              </button>
            </div>
          </div>
        </article>
      </Draggable >
      )
    : null;
}
