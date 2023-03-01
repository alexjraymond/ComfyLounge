import React, { useState } from 'react';
import reactDOM from 'react-dom/client';
import MusicWidget from './components/MusicWidget';
import StickyNotes from './components/StickyNotes';
import NavBar from './components/NavBar';
import { v4 as uuidv4 } from 'uuid';

const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

function App() {
  const [isMusicWidgetVisible, setIsMusicWidgetVisible] = useState(false);
  // const [nextId, setNextId] = useState(0);
  const [stickyList, setStickyList] = useState([]);
  const [isStickyActive, setIsStickyActive] = useState(false);

  const hideMusicWidget = () => {
    setIsMusicWidgetVisible(!isMusicWidgetVisible);
  };

  const addStickyNote = () => {
    const newStickyNote = <StickyNotes id={uuidv4()} key={uuidv4()} removeStickyNote={removeStickyNote} />;
    setStickyList([...stickyList, newStickyNote]);
    setIsStickyActive(true);
  };

  const removeStickyNote = (id) => {
    const updatedStickyList = stickyList.filter((note) => note.props.id !== id);
    setStickyList(updatedStickyList);
    if (updatedStickyList.length === 0) {
      setIsStickyActive(false);
    }
  };

  return (
    <>
      <NavBar
        hideMusicWidget={hideMusicWidget}
        onNotesButtonClick={addStickyNote}
        stickyList={stickyList}
        isStickyActive={isStickyActive}
        isMusicWidgetVisible={isMusicWidgetVisible}
      />
      <main>
        {isMusicWidgetVisible ? <MusicWidget /> : null }
        {stickyList}
      </main>
    </>
  );
}

root.render(
  <App />
);
