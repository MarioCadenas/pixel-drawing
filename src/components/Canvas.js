import React, { useState, useEffect } from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';

const Canvas = props => {
  const [matrix, setMatrix] = useState(Array(30).fill(Array(30).fill(0)));

  useEffect(() => {
    const canvas = localStorage.getItem('latestCanvas');

    if (typeof canvas === 'string') {
      setMatrix(JSON.parse(canvas));
    }
  }, []);

  const changeColor = (rowIndex, colIndex) => {
    const matrixCopy = JSON.parse(JSON.stringify(matrix));
    console.log(matrix);
    matrixCopy[rowIndex][colIndex] = props.currentColor;
    handleSave(matrixCopy);
    setMatrix(matrixCopy);
  };

  const handleSave = matrix => localStorage.setItem('latestCanvas', JSON.stringify(matrix));

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
