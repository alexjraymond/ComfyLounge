import React, { useRef, useState, useEffect } from 'react';
import logoBw from '../../server/public/img/logo_bw.png';
import Draggable from 'react-draggable';

// Sticky Note Component that has the HTML and handles the textarea content
const StickyNotes = ({ note, removeStickyNote }) => {
  // a sticky note is {id: string, text: string}
  const widgetRef = useRef();
  const widgetId = note.id;

  const [text, setText] = useState(note.text);

  const [isPositionLoaded, setIsPositionLoaded] = useState(false);

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

  const [positions, setPositions] = useState({});

  useEffect(() => {
    const existingDivPositions = JSON.parse(
      localStorage.getItem(`widgetCoords-${widgetId}`)
    );
    setPositions(existingDivPositions);
    setIsPositionLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem(`widgetCoords-${widgetId}`, JSON.stringify(positions));
  }, [positions]);

  function handleStop(e, data) {
    const newPosition = { x: data.x, y: data.y };
    localStorage.setItem(`widgetCoords-${widgetId}`, JSON.stringify(newPosition));
  }

  return (
    isPositionLoaded && (
    <Draggable
      handle=".sticky"
      bounds="body"
        defaultPosition={
          positions && positions.x && positions.y
            ? { x: positions.x, y: positions.y }
            : { x: 0, y: 0 }
        }
      position={null}
      nodeRef={widgetRef}
      onStop={handleStop}
    >
      <article
      className="sticky-note"

      ref={widgetRef}
      id={note.id}
    >
        <nav className='sticky-nav'>
          <img src={logoBw} className="sticky-logo" />
          <i
              className="fa-solid fa-grip-lines sticky-anchor sticky sticky-drag"
              id={widgetId}
            />

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

      </Draggable>
    )
  );
};

export default StickyNotes;
