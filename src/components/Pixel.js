import React from 'react';
import styled from 'styled-components';

const Pixel = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  background-color: ${({ background }) => background};
  border: ${({ current }) => (current ? '4px solid yellow': '')};
`;

export default props => (
  <Pixel background={props.background} current={props.current} onClick={props.onClick} />
);
