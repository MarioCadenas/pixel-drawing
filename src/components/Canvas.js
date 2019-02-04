import React, { useState } from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';

const Canvas = () => {
  const [matrix, setMatrix] = useState(Array(30).fill(Array(30).fill(0)));

  return (
    <div className="canvas">
      {
        matrix.map(
          (row, rowIndex) => row.map(
            (col, colIndex) => (
              <Pixel key={`${rowIndex}-${colIndex}`} background={Colors[matrix[rowIndex][colIndex]]} />
            )
          )
        )
      }
    </div>
  );
};

export default Canvas;
