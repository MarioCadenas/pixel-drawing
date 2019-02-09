import React, { Fragment } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  height: 30px;
  margin: 10px;
  padding: 10px;
  text-align: center;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  height: 50px;
  margin: 10px;
  padding: 10px;
  width: 200px;
`;

const Form = ({ canvasName, changeCanvasName, createNewCanvas }) => (
  <Fragment>
    <Input
      name="canvasName"
      placeholder="Your favorite canvas name"
      value={canvasName}
      onChange={changeCanvasName}
    />
    <Button onClick={createNewCanvas}>Create new canvas</Button>
  </Fragment>
);

export default Form;
