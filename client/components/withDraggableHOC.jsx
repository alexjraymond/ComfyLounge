import React, { useRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';

export default function withDraggable(WrappedComponent) {
  return function DraggableComponent({ draggableHandleId, ...props }) {

    const zIndexRef = useRef(0);
    const lastDraggedRef = useRef(null);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [positions, setPositions] = useState({});
    const widgetRef = useRef(null);

    useEffect(() => {
      const existingDivPositions = JSON.parse(
        localStorage.getItem(draggableHandleId)
      );
      setPositions(existingDivPositions);
      setHasLoaded(true);

    }, []);

    useEffect(() => {
      localStorage.setItem(draggableHandleId, JSON.stringify(positions));

    }, [positions, draggableHandleId]);

    function handleStop(e, data) {
      const dummyPositions = { ...positions };
      const itemId = e.target.id;
      dummyPositions[itemId] = {};
      dummyPositions[itemId].x = data.x;
      dummyPositions[itemId].y = data.y;
      setPositions(dummyPositions);
    }

    return hasLoaded
      ? (
        <Draggable
        onStart={(e) => {
          let draggable = e.target;
          while (!draggable.classList.contains('react-draggable')) {
            draggable = draggable.parentNode;
          }

          if (lastDraggedRef.current === draggable) return;

          lastDraggedRef.current = draggable;
          draggable.style.zIndex = ++zIndexRef.current;
        }}
          handle={`#${draggableHandleId.id}`}
        bounds="body"
        defaultPosition={
          positions === null
            ? { x: 0, y: 0 }
            : !positions
                ? { x: 0, y: 0 }
                : { x: positions[draggableHandleId].x, y: positions[draggableHandleId].y }
        }
        position={null}
        nodeRef={widgetRef}
        onStop={handleStop}

      >

          <WrappedComponent
            draggableHandleClassName={draggableHandleId.draggableHandleId}
            {...props} />

        </Draggable>
        )
      : null;
  };
}
