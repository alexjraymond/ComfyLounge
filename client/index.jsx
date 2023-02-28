import React, { useState } from 'react';
import reactDOM from 'react-dom/client';
import MusicWidget from './components/MusicWidget';
import StickyNotes from './components/StickyNotes';
import NavBar from './components/NavBar';

const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

function App() {
  const [isMusicWidgetVisible, setIsMusicWidgetVisible] = useState(true);
  const [numStickyNotes, setNumStickyNotes] = useState(0);

  const hideMusicWidget = () => {
    setIsMusicWidgetVisible(!isMusicWidgetVisible);
  };

  const addStickyNote = () => {
    setNumStickyNotes(numStickyNotes + 1);
  };

  // const removeStickyNote = () => {
  //   setNumStickyNotes(numStickyNotes - 1);
  // };

  const stickyNotes = [];

  for (let i = 0; i < numStickyNotes; i++) {
    stickyNotes.push(<StickyNotes key={i} />);
  }

  return (
    <>
      <NavBar
        hideMusicWidget={hideMusicWidget}
        onNotesButtonClick={addStickyNote}
      />
      <main>
        {isMusicWidgetVisible ? <MusicWidget /> : null }
        {stickyNotes}
      </main>
    </>
  );
}

root.render(
  <App />
);

// dont want boolean, we want an object whose key is the widget that should show/hide
// ... based on what's clicked.  Value is whether visible or not
// or have separate boolean for each button
// and nav bar onclick passes a string to check which was clicked

// navbar onclick handlers
// passes back which button was clicked
// pass into widgets "isvisible"
