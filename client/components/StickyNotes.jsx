import React, { useRef, useState, useEffect } from 'react';
import logoBw from '../../server/public/img/logo_bw.png';
import { makeWidgetMovable } from '../functions/widgetMove';

// Sticky Note Component that has the HTML and handles the textarea content
const StickyNotes = ({ note, removeStickyNote }) => {
  // a sticky note is {id: string, text: string}
  const widgetRef = useRef();
  const widgetId = `widgetCoords-${note.id}`;

  const [text, setText] = useState(note.text);

  const handleWidgetMovement = makeWidgetMovable(widgetRef, widgetId);

  const handleNoteChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem(`widgetText-${widgetId}`, JSON.stringify(newText));
  };

  useEffect(() => {
    const storedText = JSON.parse(localStorage.getItem(`widgetText-${widgetId}`));
    if (storedText) {
      setText(storedText);
    }
  }, []);

  function loadWidgetPosition() {
    const coords = JSON.parse(localStorage.getItem(`widgetCoords-${widgetId}`));
    if (coords) {
      widgetRef.current.style.position = 'absolute';
      widgetRef.current.style.left = `${coords.x}px`;
      widgetRef.current.style.top = `${coords.y}px`;
    }
  }

  useEffect(() => {
    loadWidgetPosition();
  }, []);

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
