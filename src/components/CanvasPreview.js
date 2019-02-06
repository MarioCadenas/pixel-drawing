import React from 'react';

const CanvasPreview = ({ canvasName, loadCanvas, removeCanvas }) => {
  return (
    <div className="canvas-preview">
      <p>{canvasName}</p>
      <button onClick={loadCanvas}>Load</button>
      <button onClick={() => removeCanvas(canvasName)}>remove</button>
    </div>
  );
};

export default CanvasPreview;
