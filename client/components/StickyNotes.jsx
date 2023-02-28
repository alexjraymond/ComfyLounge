import React, { useRef, useState } from 'react';
import logoBw from '../../server/public/img/logo_bw.png';
import { makeWidgetMovable } from '../functions/widgetMove';

const StickyNotes = () => {
  const widgetRef = useRef();
  const localNotes = localStorage.getItem('notes');
  const [notes, setNotes] = useState(localNotes);

  const handleWidgetMovement = makeWidgetMovable(widgetRef);

  const handleNoteChange = (e) => {
    localStorage.setItem('notes', e.target.value);
    setNotes(e.target.value);
  };

  return (
    <article
      className="sticky-note"
      onMouseDown={handleWidgetMovement}
      ref={widgetRef}
    >
      <nav className='sticky-nav'>
        <img src={logoBw} className="sticky-logo" />
        <box-icon name='x' className="sticky-x" color='#f93943' />
      </nav>
      <article className="notes-article">
        <textarea
          placeholder="write note here..."
          value={notes}
          onChange={handleNoteChange}
        />
      </article>
    </article>
  );
};

export default StickyNotes;
