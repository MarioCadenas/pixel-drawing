import React, { useState, useEffect } from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';
import { CANVAS_PREFIX } from '../constants';

const Canvas = props => {

  const [canvasName, setCanvasName] = useState('');
  const [matrix, setMatrix] = useState(Array(30).fill(Array(30).fill(0)));

  useEffect(() => {
    setCanvasName(props.canvasName);

    const canvas = localStorage.getItem(`${CANVAS_PREFIX}${canvasName}`);

    if (typeof canvas === 'string') {
      setMatrix(JSON.parse(canvas));
    }
  }, []);

  const changeColor = (rowIndex, colIndex) => {
    const matrixCopy = JSON.parse(JSON.stringify(matrix));

    matrixCopy[rowIndex][colIndex] = props.currentColor;
    handleSave('latestCanvas', matrixCopy);
    setMatrix(matrixCopy);
  };

  const handleSave = (canvasName, matrix) => localStorage.setItem(`${CANVAS_PREFIX}${canvasName}`, JSON.stringify(matrix));

  return (
    <div className="canvas">
      {
        matrix.map(
          (row, rowIndex) => row.map(
            (col, colIndex) => (
              <Pixel
                key={`${rowIndex}-${colIndex}`} background={Colors[matrix[rowIndex][colIndex]]}
                onClick={e => changeColor(rowIndex, colIndex)}
              />
            )
          )
        )
      }
    </div>
  );
};

export default Canvas;
