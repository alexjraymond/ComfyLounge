// import React, { useEffect, useRef } from 'react';
// import reactDOM from 'react-dom/client';
// import Draggable from 'react-draggable';
// const container = document.querySelector('#root');
// const root = reactDOM.createRoot(container);


// function CustomButton() {
//   return (
//     <button>Click Me!</button>
//   );
// }

// function MusicWidget() {
//   const widgetRef = useRef(null);
//   return (
//     <div
//       ref={widgetRef}
//       style={{ width: '400px', height: '200px', background: 'red' }}
//       onMouseDown={(e) => {
//         e.preventDefault();
//         widgetRef.current.style.position = 'absolute';
//         let shiftX = e.clientX - widgetRef.current.getBoundingClientRect().left;
//         let shiftY = e.clientY - widgetRef.current.getBoundingClientRect().top;

//         const onMouseMove = (e) => {
//           widgetRef.current.style.left = e.pageX - shiftX + 'px';
//           widgetRef.current.style.top = e.pageY - shiftY + 'px';
//         };

//         document.addEventListener('mousemove', onMouseMove);

//         document.addEventListener('mouseup', () => {
//           document.removeEventListener('mousemove', onMouseMove);
//         });
//       }}
//     >
//       Widget content goes here
//     </div>
//   );
// }


// root.render(
//   <MusicWidget />
// );
