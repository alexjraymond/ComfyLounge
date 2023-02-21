// import React from 'react';
// import Home from './pages/home';

// export default class App extends React.Component {
//   render() {
//     return <Home />;
//   }
// }

// import React, { useRef } from 'react';
// import reactDOM from 'react-dom/client';

// const container = document.querySelector('#root');
// const root = reactDOM.createRoot(container);

// function TestWidget() {
//   return (
//     <h1>gm bb</h1>
//   );
// }

// function MusicWidget() {
//   const widgetRef = useRef(null);
//   return (
//     <div
//       ref={widgetRef}
//       style={{ width: '400px', height: '200px', background: 'red' }}
//       onMouseDown={e => {
//         e.preventDefault();
//         widgetRef.current.style.position = 'absolute';
//         const shiftX = e.clientX - widgetRef.current.getBoundingClientRect().left;
//         const shiftY = e.clientY - widgetRef.current.getBoundingClientRect().top;

//         const onMouseMove = e => {
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
//   <>
//     <TestWidget />
//     <MusicWidget />

//   </>
// );
