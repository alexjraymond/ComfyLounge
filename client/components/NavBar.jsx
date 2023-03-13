import React from 'react';
import radioButton from '../../server/public/img/radbut1.png';
import notesButton from '../../server/public/img/notesbutton.png';
import kittenButton from '../../server/public/img/kitten_centered_button.png';

// entire Navigation Bar functionality
export default function NavBar(props) {
  const {
    hideMusicWidget,
    onNotesButtonClick,
    stickyList,
    isStickyActive,
    isMusicWidgetVisible,
    onKittenButtonClick,
    isKittenActive
  } = props;

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
          <KittenButton
            onClick={onKittenButtonClick}
            isKittenActive={isKittenActive}
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

function NavButton({
  label,
  onClick,
  src,
  alt,
  isStickyActive,
  isMusicWidgetVisible,
  componentName,
  isKittenActive
}) {
  const conditionalClass = `nav-button${isStickyActive ? ' active-notes' : ''}${isMusicWidgetVisible ? ' active-radio' : ''} ${isKittenActive ? ' active-kitten' : ''} ${componentName}`;
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

function KittenButton({ onClick, isKittenActive }) {
  return (
    <NavButton
      label='kitten'
      onClick={onClick}
      src={kittenButton}
      alt="kitten-icon"
      isKittenActive={isKittenActive}
      componentName="kitten"
    />
  );
}
