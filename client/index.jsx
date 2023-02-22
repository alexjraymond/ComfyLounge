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
      style={{ width: '440px', height: '200px', background: '#93B1A7' }}
      onMouseDown={e => {
        if (e.target === widgetRef.current) {
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
        }
      }}
    >
      <p className='radio-title text-lg'>Selected Station Name Here</p>
      <div className='grid-cols-2 grid gap-2 m-auto'>
        <form className='radio-form'>
          <div className='col-span-1 flex'>
            <input type="radio" id="station1" name="radiostation" />
            <label htmlFor="station1">lofi Girl</label>
          </div>
          <div className='col-span-1 flex'>
            <input type="radio" id="station2" name="radiostation" />
            <label htmlFor="station2">Lofi something else</label>
          </div>
          <div className='col-span-1 flex'>
            <input type="radio" id="station3" name="radiostation" />
            <label htmlFor="station3">Even More Lofi</label>
          </div>
          <div className='col-span-1 flex'>
            <input type="radio" id="station4" name="radiostation" />
            <label htmlFor="station4">But Wait, more Lofi</label>
          </div>
        </form>
        <div className="audio-controls justify-end align-bottom">
          <box-icon name='play-circle' />
          <box-icon type='solid' name='volume-mute' />
          <input type="range" id="volume" name="volume"
          min="0" max="11" className='volume' />
          <label htmlFor="volume" />
        </div>
      </div>
    </div>
  );
}

root.render(
  <MusicWidget />
);
