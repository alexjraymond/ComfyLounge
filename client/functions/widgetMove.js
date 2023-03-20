// Function that returns a callback function for updating local storage
export function makeWidgetMovable(widgetId) {
  // Callback function to update local storage when dragging stops
  function updateLocalStorage(_, data) {
    const coords = { x: data.x, y: data.y };
    localStorage.setItem(`widgetCoords-${widgetId}`, JSON.stringify(coords));
    // console.log('update localstorage', coords);
  }

  // Return the callback function
  return updateLocalStorage;
}
