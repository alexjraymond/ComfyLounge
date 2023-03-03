import React, { useRef, useState } from 'react';
import logoBw from '../../server/public/img/logo_bw.png';
import { makeWidgetMovable } from '../functions/widgetMove';

// Sticky Note Component that has the HTML and handles the textarea content
const StickyNotes = ({ note, removeStickyNote }) => {
  // a sticky note is {id: string, text: string}
  const widgetRef = useRef();

  const [text, setText] = useState(note.text);

  const handleWidgetMovement = makeWidgetMovable(widgetRef);

  const handleNoteChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  // useEffect(() => {
  //   // read existing data from data.json
  //   const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

  //   // update the data for the current note
  //   const updatedData = {
  //     ...jsonData,
  //     [note.id]: {
  //       id: note.id,
  //       text
  //     }
  //   };

  //   // write the updated data to data.json
  //   fs.writeFileSync('data.json', JSON.stringify(updatedData));

  //   // save the updated data to localStorage
  //   localStorage.setItem('note', JSON.stringify(text));
  // }, [text, note.id]);

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
