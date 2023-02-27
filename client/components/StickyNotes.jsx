import React, { useRef } from 'react';
import logoBw from '../../server/public/img/logo_bw.png';
import { makeWidgetMovable } from '../functions/widgetMove';

const StickyNotes = () => {
  const widgetRef = useRef();

  const handleWidgetMovement = makeWidgetMovable(widgetRef);

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
        <textarea placeholder="write note here..." />
      </article>
    </article>
  );
};

export default StickyNotes;
