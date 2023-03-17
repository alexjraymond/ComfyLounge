import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';

export default function KittenWidget() {

  const handleCats = () => {
    fetch('/api/cats')
      .then((res) => res.json())
      .then((imgurl) => { setCatUrl(imgurl.imgUrl); })
      .catch((error) => console.error(error));
  };

  const widgetRef = useRef(null);
  const [catUrl, setCatUrl] = useState('');

  return (
    <Draggable
      handle=".kitten"
      bounds="body"
    >
      <article
        className='kitten-widget'
      ref={widgetRef}
      >
        <i className="fa-solid fa-grip-lines kitten drag-color" />
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
                <span>Click the Button!</span>
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
    </Draggable>
  );
}
