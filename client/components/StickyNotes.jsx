import React, { useRef, useState } from 'react';
import logoBw from '../../server/public/img/logo_bw.png';
import { makeWidgetMovable } from '../functions/widgetMove';

// Sticky Note Component that has the HTML and handles the textarea content
const StickyNotes = ({ note, removeStickyNote }) => {
  // a sticky note is {id: string, text: string}
  const widgetRef = useRef();
  // const localNotes = localStorage.getItem('notes');
  // const [text, setText] = useState(localStorage.getItem(`text-${id}`) || '');
  // const [notes, setNotes] = useState(localNotes);
  const [text, setText] = useState(note.text);

  const handleWidgetMovement = makeWidgetMovable(widgetRef);

  const handleNoteChange = (e) => {
    const newText = e.target.value;
    // localStorage.setItem(`text-${id}`, newText);
    setText(newText);
  };

  // useEffect(() => {
  //   localStorage.setItem('notes', notes);
  // }, [notes]);

  return (
    <article
      className="sticky-note"
      onMouseDown={handleWidgetMovement}
      ref={widgetRef}
      id={note.id}
    >
      <nav className='sticky-nav'>
        <img src={logoBw} className="sticky-logo" />
        <button
          onClick={() => removeStickyNote(note.id)}
        >
          <box-icon name='x' className="sticky-x" color='#f93943'
             />
        </button>
      </nav>
      <article className="notes-article">
        <textarea
          placeholder="write note here..."
          value={text}
          onChange={handleNoteChange}
        />
      </article>
    </article>
  );
};

export default StickyNotes;
