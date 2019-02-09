import React from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';
import styled from 'styled-components';

const ColorPickerDiv = styled.div`
  margin-right: 10px;
`;

const ColorPicker = ({ currentColor, setColor }) => {
  return (
    <ColorPickerDiv>
    {
      Colors.map(
        (color, index) => (
          <Pixel
            key={index}
            background={color}
            current={Colors[currentColor] === color}
            onClick={e => setColor(index)}
          />
        )
      )
    }
    </ColorPickerDiv>
  );
};

export default ColorPicker;
