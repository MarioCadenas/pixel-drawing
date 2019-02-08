import React from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';
import styled from 'styled-components';

const ColorPicker = styled.div`
  margin-right: 10px;
`;

export default ({ currentColor, setColor }) => {
  return (
    <ColorPicker>
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
    </ColorPicker>
  );
};
