// function to move every widget, and store x/y to localstorage

// Function that returns an event handler function for making a widget movable
export function makeWidgetMovable(widgetRef, widgetId) {

  // Event handler function that handles mouse events on the widget
  function widgetMovement(e) {
    // Check if the event target is the widget
    if (e.target === widgetRef.current) {
      e.preventDefault();
      // Set the position of the widget to absolute
      widgetRef.current.style.position = 'absolute';
      // Calculate the distance between the mouse cursor and the top-left corner of the widget
      const shiftX = e.clientX - widgetRef.current.getBoundingClientRect().left;
      const shiftY = e.clientY - widgetRef.current.getBoundingClientRect().top;

      // Function that updates the position of the widget as the mouse is moved
      const onMouseMove = (e) => {
        // Set the new position of the widget based on the mouse cursor position and the shift values
        widgetRef.current.style.left = e.pageX - shiftX + 'px';
        widgetRef.current.style.top = e.pageY - shiftY + 'px';
        // Save the new position of the widget in local storage
        const coords = { x: e.pageX - shiftX, y: e.pageY - shiftY };
        localStorage.setItem(`widgetCoords-${widgetId}`, JSON.stringify(coords));
      };

      // Add the onMouseMove function as an event listener for the mousemove event on the document object
      document.addEventListener('mousemove', onMouseMove);

      // Add an event listener for the mouseup event on the document object that removes the onMouseMove function
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
      });
    }
  }

  // Return the event handler function
  return widgetMovement;
}
