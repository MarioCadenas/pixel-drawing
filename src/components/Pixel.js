import React from 'react';
import styled from 'styled-components';

const PixelDiv = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  background-color: ${({ background }) => background};
  border: ${({ current }) => (current ? '4px solid yellow': '')};
`;

const Pixel = ({ background, current, onClick }) => (
  <PixelDiv background={background} current={current} onClick={onClick} />
);

export default Pixel;
