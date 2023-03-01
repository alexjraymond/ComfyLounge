import React from 'react';
import radioButton from '../../server/public/img/radbut1.png';
import notesButton from '../../server/public/img/notesbutton.png';

// entire Navigation Bar functionality
export default function NavBar(props) {
  const { hideMusicWidget, onNotesButtonClick, stickyList, isStickyActive, isMusicWidgetVisible } = props;

  return (
    <header>
      <nav
        className=" justify-between flex px-4 py-3">
        <ul
          className="flex">
          <RadioButton
            onClick={hideMusicWidget}
            isMusicWidgetVisible={isMusicWidgetVisible}
          />
          <NotesButton
            onClick={onNotesButtonClick}
            stickyList={stickyList}
            isStickyActive={isStickyActive}
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

function NavButton({ label, onClick, src, alt, isStickyActive, isMusicWidgetVisible, componentName }) {
  const conditionalClass = `nav-button${isStickyActive ? ' active-notes' : ''}${isMusicWidgetVisible ? ' active-radio' : ''} ${componentName}`;
  return (
    <li>
      <button
        className={conditionalClass}
        onClick={onClick}
        label={label} >
        <img
          src={src}
          alt={alt} />
      </button>
    </li>
  );
}

function RadioButton({ onClick, isMusicWidgetVisible }) {
  return (
    <NavButton
      label='radio'
      onClick={onClick}
      src={radioButton}
      alt="radio-icon"
      isMusicWidgetVisible={isMusicWidgetVisible}
      componentName="radio"
    />
  );
}

function NotesButton({ onClick, stickyList, isStickyActive }) {
  return (
    <>
      <NavButton
        label='notes'
        onClick={onClick}
        src={notesButton}
        alt="notes-icon"
        isStickyActive={isStickyActive}
        componentName="notes"
      />
      {stickyList.length > 0 && (<div className='sticky-count'>{stickyList.length}</div>)}

    </>
  );
}
