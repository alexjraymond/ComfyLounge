import React from 'react';
import radioButton from '../../server/public/img/radbut1.png';
import notesButton from '../../server/public/img/notesbutton.png';

export default function NavBar(props) {
  const { hideMusicWidget, onNotesButtonClick } = props;

  return (
    <header>
      <nav
        className=" justify-between flex px-4 py-3">
        <ul
          className="flex">
          <RadioButton
            onClick={hideMusicWidget}
          />
          <NotesButton
            onClick={onNotesButtonClick}
          />
        </ul>
        <Logo />
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div className="logo-div">
      <img className="logo-img" src="./img/gifagain.gif" alt="logo" />
      <p className="logo-name">ComfyLounge</p>
    </div>
  );
}

function NavButton({ label, onClick, src, alt }) {
  return (
    <li>
      <button className="nav-button" onClick={onClick} label={label}>
        <img src={src} alt={alt} />
      </button>
    </li>
  );
}

function RadioButton({ onClick }) {
  return (
    <NavButton
      label='radio'
      onClick={onClick}
      src={radioButton}
      alt="radio-icon"
    />
  );
}

function NotesButton({ onClick }) {
  return (
    <NavButton
        label='notes'
        onClick={onClick}
        src={notesButton}
        alt="notes-icon"
    />
  );
}
