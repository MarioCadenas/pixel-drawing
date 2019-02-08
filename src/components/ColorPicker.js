import React from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';
import styled from 'styled-components';

const ColorPicker = styled.div`
  margin-right: 10px;
`;

export default props => {
  return (
    <ColorPicker>
    {
      Colors.map(
        (color, index) => (
          <Pixel
            key={index}
            background={color}
            current={Colors[props.currentColor] === color}
            onClick={e => props.setColor(index)}
          />
        )
      )
    }
    </ColorPicker>
  );
};
