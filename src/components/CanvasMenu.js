import React, { useState, useEffect } from 'react';
import CanvasPreview from './CanvasPreview';
import Form from './Form';
import { CANVAS_PREFIX } from '../constants';
import styled from 'styled-components';


const Container = styled.div`

`;

const Cards = styled.div`

`;

const FormContainer = styled.div`

`;

const CanvasMenu = ({ loadCanvas }) => {
  const [canvasList, setCanvasList] = useState([]);
  const [canvasName, setCanvasName] = useState('');
  const loadExistingCanvas = () => {
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
    setCanvasList(savedCanvas);
  };

  useEffect(loadExistingCanvas, []);

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
  const changeCanvasName = ({ target: { value } }) => setCanvasName(value);
  const removeCanvas = (canvasName) => {
    const updatedList = canvasList.filter((canvas) => Object.keys(canvas)[0] !== canvasName);
    setCanvasList(updatedList);
    localStorage.removeItem(`${CANVAS_PREFIX}${canvasName}`);
  };

  return (
    <Container>
      <Cards>
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
      </Cards>
      <FormContainer>
        <Form
          canvasName={canvasName}
          changeCanvasName={changeCanvasName}
          createNewCanvas={createNewCanvas}
        />
      </FormContainer>
    </Container>
  );
};

export default CanvasMenu;
