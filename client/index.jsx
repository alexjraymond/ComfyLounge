import React, { useState, useEffect } from 'react';
import reactDOM from 'react-dom/client';
import MusicWidget from './components/MusicWidget';
import StickyNotes from './components/StickyNotes';
import KittenWidget from './components/KittenWidget';
import NavBar from './components/NavBar';
import { v4 as uuidv4 } from 'uuid';

const container = document.querySelector('#root');
const root = reactDOM.createRoot(container);

function App() {
  const [isMusicWidgetVisible, setIsMusicWidgetVisible] = useState(false);
  const [stickyList, setStickyList] = useState(() => {
    const storedStickyList = JSON.parse(localStorage.getItem('stickyList'));
    return storedStickyList || [];
  });
  const [isStickyActive, setIsStickyActive] = useState(false);
  const [isKittenActive, setIsKittenActive] = useState(false);

  const hideKittenWidget = () => {
    setIsKittenActive(!isKittenActive);
    localStorage.setItem(`widgetVisible-${'KittenWidget'}`, JSON.stringify(!isKittenActive));

  };

  const hideMusicWidget = () => {
    setIsMusicWidgetVisible(!isMusicWidgetVisible);
    localStorage.setItem(`widgetVisible-${'MusicWidget'}`, JSON.stringify(!isMusicWidgetVisible));

  };

  function loadMusicWidget() {
    const visibility = JSON.parse(localStorage.getItem(`widgetVisible-${'MusicWidget'}`));
    if (visibility) {
      setIsMusicWidgetVisible(true);

    }
  }

  function loadKittenWidget() {
    const visibility = JSON.parse(localStorage.getItem(`widgetVisible-${'KittenWidget'}`));
    if (visibility) {
      setIsKittenActive(true);
    }
  }

  // loads the visibility state of music widget from localstorage on refresh, if it exists
  useEffect(() => {
    loadMusicWidget();
    loadKittenWidget();
  }, []);

  useEffect(() => {
    localStorage.setItem('stickyList', JSON.stringify(stickyList));
  }, [stickyList]);

  useEffect(() => {
    const storedStickyList = JSON.parse(localStorage.getItem('stickyList'));
    if (storedStickyList && storedStickyList.length > 0) {
      setStickyList(storedStickyList);
      setIsStickyActive(true);
    }

  }, []);

  const addStickyNote = () => {

    const noteId = uuidv4();
    const newStickyNote = { id: noteId, text: '' };
    setStickyList([...stickyList, newStickyNote]);
    // for button coloring
    setIsStickyActive(true);

  };

  const removeStickyNote = (id) => {

    const updatedStickyList = stickyList.filter((note) => note.id !== id);

    setStickyList(updatedStickyList);
    // for button color
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
        onKittenButtonClick={hideKittenWidget}
        isKittenActive={isKittenActive}
      />
      <main>

        {isMusicWidgetVisible ? <MusicWidget /> : null}

        {stickyList.map((note) => (<StickyNotes note={note} key={note.id} removeStickyNote={removeStickyNote} />))}
        {isKittenActive ? <KittenWidget /> : null}

      </main>
    </>
  );
}

root.render(
  <App />
);
