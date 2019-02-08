import React, { useState } from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';
import { CANVAS_PREFIX } from '../constants';
import styled from 'styled-components';

const CanvasBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
`;

const Canvas = ({ currentColor, canvas: { canvasName =  '', canvasData = Array(30).fill(Array(30).fill(0)) } }) => {
  const [name] = useState(canvasName);
  const [matrix, setMatrix] = useState(canvasData);

  const changeColor = (rowIndex, colIndex) => {
    const matrixCopy = JSON.parse(JSON.stringify(matrix));

    matrixCopy[rowIndex][colIndex] = currentColor;
    handleSave(name, matrixCopy);
    setMatrix(matrixCopy);
  };

  const handleSave = (name, matrix) => localStorage.setItem(`${CANVAS_PREFIX}${name}`, JSON.stringify(matrix));

  return (
    <CanvasBox>
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
    </CanvasBox>
  );
};

export default Canvas;
