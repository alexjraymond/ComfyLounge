import React, { useRef, useState, useEffect } from 'react';
import logoBw from '../../server/public/img/logo_bw.png';
import { makeWidgetMovable } from '../functions/widgetMove';

const StickyNotes = ({ id, removeStickyNote }) => {
  const widgetRef = useRef();
  const localNotes = localStorage.getItem('notes');
  // eslint-disable-next-line no-unused-vars
  const [notes, setNotes] = useState(localNotes);
  const [text, setText] = useState(localStorage.getItem(`text-${id}`) || '');

  const handleWidgetMovement = makeWidgetMovable(widgetRef);

  const handleNoteChange = (e) => {
    const newText = e.target.value;
    localStorage.setItem(`text-${id}`, newText);
    setText(newText);
  };

  useEffect(() => {
    localStorage.setItem('notes', notes);
  }, [notes]);

  return (
    <article
      className="sticky-note"
      onMouseDown={handleWidgetMovement}
      ref={widgetRef}
      id={id}
    >
      <nav className='sticky-nav'>
        <img src={logoBw} className="sticky-logo" />
        <button

          onClick={() => removeStickyNote(id)}
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
