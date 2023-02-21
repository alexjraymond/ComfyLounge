import React, { useRef } from 'react';
import reactDOM from 'react-dom/client';

const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

function MusicWidget() {
  const widgetRef = useRef(null);
  return (
    <div
      className="music-widget"
      ref={widgetRef}
      style={{ width: '400px', height: '200px', background: '#93B1A7' }}
      onMouseDown={e => {
        e.preventDefault();
        widgetRef.current.style.position = 'absolute';
        const shiftX = e.clientX - widgetRef.current.getBoundingClientRect().left;
        const shiftY = e.clientY - widgetRef.current.getBoundingClientRect().top;

        const onMouseMove = e => {
          widgetRef.current.style.left = e.pageX - shiftX + 'px';
          widgetRef.current.style.top = e.pageY - shiftY + 'px';
        };

        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', onMouseMove);
        });
      }}
    >
      <p className='radio-title text-lg'>Selected Station Name Here</p>
      <div className="form-div grid grid-rows-2 grid-cols-2">
        <form className='radio-form'>
          <input type="radio" id="station1" name="radiostation" />
          <label htmlFor="station1">Station 1</label>
          <input type="radio" id="station2" name="radiostation" />
          <label htmlFor="station2">Station 2</label>
          <input type="radio" id="station3" name="radiostation" />
          <label htmlFor="station3">Station 3</label>
          <input type="radio" id="station4" name="radiostation" />
          <label htmlFor="station4">Station 4</label>
        </form>
      </div>
    </div>
  );
}

root.render(
  <MusicWidget />
);
