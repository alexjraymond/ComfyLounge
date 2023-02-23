import React from 'react';
import reactDOM from 'react-dom/client';
import YoutubePlayer from './components/YoutubePlayer';
import MusicWidget from './components/MusicWidget';

const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

root.render(
  <>
    <MusicWidget />
    <YoutubePlayer videoId="jfKfPfyJRdk" />
  </>
);
