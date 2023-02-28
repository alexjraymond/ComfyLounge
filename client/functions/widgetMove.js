export function makeWidgetMovable(widgetRef) {
  function widgetMovement(e) {
    if (e.target === widgetRef.current) {
      e.preventDefault();
      widgetRef.current.style.position = 'absolute';
      const shiftX = e.clientX - widgetRef.current.getBoundingClientRect().left;
      const shiftY = e.clientY - widgetRef.current.getBoundingClientRect().top;

      const onMouseMove = (e) => {
        widgetRef.current.style.left = e.pageX - shiftX + 'px';
        widgetRef.current.style.top = e.pageY - shiftY + 'px';
      };

      document.addEventListener('mousemove', onMouseMove);

      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
      });
    }
  }

  return widgetMovement;
}
