import React, { useRef, useState } from 'react';
import YoutubeFunctionality from './YoutubePlay';

export default function MusicWidget(props) {
  const widgetRef = useRef(null);
  const [videoId, setVideoId] = useState('');

  function widgetMovement(e) {

    if (e.target === widgetRef.current) {
      e.preventDefault();
      widgetRef.current.style.position = 'absolute';
      const shiftX = e.clientX - widgetRef.current.getBoundingClientRect().left;
      const shiftY = e.clientY - widgetRef.current.getBoundingClientRect().top;

      const onMouseMove = (e) => {
        widgetRef.current.style.left = e.pageX - shiftX + 'px';
        widgetRef.current.style.top = e.pageY - shiftY + 'px';
      };

      document.addEventListener('mousemove', onMouseMove);

      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
      });
    }
  }

  function handleVideoChange(newVideo) {
    setVideoId(newVideo);
  }

  return (
    <div
      className="music-widget"
      ref={widgetRef}
      style={{ width: '440px', height: '200px', background: '#93B1A7' }}
      onMouseDown={widgetMovement}
    >
      <YoutubeForm videoId={videoId} onVideoChange={handleVideoChange} />

      <YoutubeFunctionality videoId={videoId} />
    </div>
  );
}

function YoutubeForm(props) {
  const { videoId, onVideoChange } = props;

  function inputVideoChange(e) {

    const newVideo = (e.target.value);
    onVideoChange(newVideo);
  }

  return (
    <div>
      <p className='radio-title text-lg'>Current Station ID: {videoId}</p>
      <div className='grid-cols-2 grid gap-2 m-auto'>
        <form className='radio-form'>
          <div className='col-span-1 flex'>
            <input type="radio" id="station1" name="radiostation" value="jfKfPfyJRdk" onChange={inputVideoChange} />
            <label htmlFor="station1">lofi Girl</label>
          </div>
          <div className='col-span-1 flex'>
            <input type="radio" id="station2" name="radiostation" value="8z1tLBynk7U" onChange={inputVideoChange} />
            <label htmlFor="station2">Lofi something else</label>
          </div>
          <div className='col-span-1 flex'>
            <input type="radio" id="station3" name="radiostation" value="36YnV9STBqc" onChange={inputVideoChange} />
            <label htmlFor="station3">Even More Lofi</label>
          </div>
          <div className='col-span-1 flex'>
            <input type="radio" id="station4" name="radiostation" value="9UMxZofMNbA" onChange={inputVideoChange} />
            <label htmlFor="station4">But Wait, more Lofi</label>
          </div>
        </form>
        <div className="audio-controls justify-end align-bottom" />
      </div>
    </div >
  );
}
