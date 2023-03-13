import React, { useRef, useState } from 'react';
import { makeWidgetMovable } from '../functions/widgetMove';
import getCatData from '../../server/dynamo-get-item';

export default function KittenWidget() {
  const widgetRef = useRef(null);
  const widgetId = 'KittenWidget';
  const [catUrl, setCatUrl] = useState('');
  // const [isLoading, setIsLoading] = (false);

  async function fetchCatData() {
    try {
      const imgUrl = await getCatData();
      setCatUrl(imgUrl);
    } catch (error) {
      console.error(error);
    }
  }

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
              <span>Hold on...</span>
              )}
        </div>
        <div className='refresh-div'>
          <button
            className='flex'
            onClick={fetchCatData}
          >
            <i className="fa-solid fa-arrows-rotate" />
          </button>
        </div>
      </div>
    </article>

  );
}
