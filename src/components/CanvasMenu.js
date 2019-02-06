import React, { useState, useEffect } from 'react';
import CanvasPreview from './CanvasPreview';
import { CANVAS_PREFIX } from '../constants';

const CanvasMenu = ({ loadCanvas }) => {
  const [canvasList, setCanvasList] = useState([]);
  const [canvasName, setCanvasName] = useState('');

  useEffect(() => {
    const savedCanvas = Object
      .keys(localStorage)
      .map((key) => {
        if (key.startsWith(CANVAS_PREFIX)) {
          const [, canvasName] = key.split(CANVAS_PREFIX);
          return { [canvasName]: localStorage[key] };
        }
        return null;
      })
      .filter(element => element !== null);
      console.log('passing');
    setCanvasList(savedCanvas);
  }, []);

  const parseCanvas = canvas => JSON.parse(canvas);
  const prepareCanvas = canvas => loadCanvas({
    canvasName: Object.keys(canvas)[0],
    canvasData: parseCanvas(Object.values(canvas)[0])
  });
  const createNewCanvas = () => {
    if (canvasName.trim()) {
      loadCanvas({ canvasName });
    }
  };
  const changeCanvasName = ({ target: { value } }) => {
    setCanvasName(value);
  };
  const removeCanvas = (canvasName) => {
    const updatedList = canvasList.filter((canvas) => Object.keys(canvas)[0] !== canvasName);
    setCanvasList(updatedList);
    localStorage.removeItem(`${CANVAS_PREFIX}${canvasName}`);
  };

  return (
    <div>
      {
        canvasList.map(
          (canvas, index) => (
            <CanvasPreview
              key={index}
              canvasName={Object.keys(canvas)[0]}
              loadCanvas={() => prepareCanvas(canvas)}
              removeCanvas={removeCanvas}
            />
          )
        )
      }
      <input
        name="canvasName"
        placeholder="Your favorite canvas name"
        value={canvasName}
        onChange={changeCanvasName}
      />
      <button onClick={createNewCanvas}>Create new canvas</button>
    </div>
  );
};

export default CanvasMenu;
