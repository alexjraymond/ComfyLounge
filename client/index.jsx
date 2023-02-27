import React from 'react';
import reactDOM from 'react-dom/client';
import MusicWidget from './components/MusicWidget';
import StickyNotes from './components/StickyNotes';

const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

root.render(
  <>
    <MusicWidget />
    <StickyNotes />
  </>
);
