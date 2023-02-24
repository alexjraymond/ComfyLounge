import React, { useRef, useState } from 'react';
// import YouTubePlayer from './YoutubePlayer';
import Example from './YoutubePlay';

export default function MusicWidget() {
  const widgetRef = useRef(null);
  const [videoId, setVideoId] = useState('jfKfPfyJRdk');
  // pass this into form and video and stuff as prop

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
      {/* <YouTubePlayer videoId={videoId} /> */}
      <Example videoId={videoId} />
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
        <div className="audio-controls justify-end align-bottom">
          <box-icon name='play-circle' />
          <box-icon type='solid' name='volume-mute' />
          <input type="range" id="volume" name="volume"
          min="0" max="11" className='volume' />
          <label htmlFor="volume" />
        </div>
      </div>
    </div >
  );
}

// youtubeform job is to put controls up and to tell youtubeplayer/parent what new id is
// youtube form needs to tell someone stuff
// pass in videoId, setVideoId
// pass in function toYT form that changes the video we want, like onclick etc
// this should pass the video id to youtubeplayer
// on volume change, same, etc
