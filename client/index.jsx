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

    const noteId = uuidv4();
    const newStickyNote = { id: noteId, text: '' };
    setStickyList([...stickyList, newStickyNote]);
    // for button coloring
    setIsStickyActive(true);
    // localStorage.setItem('stickyNotes', JSON.stringify([...stickyList, newId]));
  };

  const removeStickyNote = (id) => {

    const updatedStickyList = stickyList.filter((note) => note.id !== id);

    setStickyList(updatedStickyList);
    // for button color
    if (updatedStickyList.length === 0) {
      setIsStickyActive(false);
    }
    // localStorage.setItem(updatedStickyList);
    // localStorage.removeItem(`text-${id}`);
  };

  // useEffect(() => {
  //   const storedNotes = JSON.parse(localStorage.getItem('stickyNotes'));
  //   if (storedNotes) {
  //     setStickyList(storedNotes);
  //   }
  // }, []);

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
        {stickyList.map((note) => (<StickyNotes note={note} key={note.id} removeStickyNote={removeStickyNote} />))}
      </main>
    </>
  );
}

root.render(
  <App />
);
