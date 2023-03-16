import React, { useRef, useState } from 'react';
import { makeWidgetMovable } from '../functions/widgetMove';

export default function KittenWidget() {

  const handleCats = () => {
    fetch('/api/cats')
      .then((res) => res.json())
      .then((imgurl) => { setCatUrl(imgurl.imgUrl); })
      .catch((error) => console.error(error));
  };

  const widgetRef = useRef(null);
  const widgetId = 'KittenWidget';
  const [catUrl, setCatUrl] = useState('');

  // const [isLoading, setIsLoading] = (false);

  const handleWidgetMovement = makeWidgetMovable(widgetRef, widgetId);

  return (

    <article
      onMouseDown={handleWidgetMovement}
      className='kitten-widget'
      // onMouseDown={handleWidgetMovement}
      ref={widgetRef}
    >
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

  );
}
