import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 1px solid white;
  color: white;
  height: auto;
  margin: 20px;
  text-align: center;
  width: 250px;
`;

const CardName = styled.div`
  border-bottom: 1px solid white;
  height: 50px;
  vertical-align: middle;
  line-height: 50px;
  width: 100%;
`;

const CardButtons = styled.div`
  height: auto;
  width: 100%;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  height: 50px;
  margin: 10px;
  padding: 20px;
  width: 100px;
`;


const CanvasPreview = ({ canvasName, loadCanvas, removeCanvas }) => {
  return (
    <Div>
      <CardName>{canvasName}</CardName>
      <CardButtons>
        <Button onClick={loadCanvas}>Load</Button>
        <Button onClick={() => removeCanvas(canvasName)}>remove</Button>
      </CardButtons>
    </Div>
  );
};

export default CanvasPreview;
