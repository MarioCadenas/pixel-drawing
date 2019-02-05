import React from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';

export default props => {
  return (
    <div className="colorPicker">
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
    </div>
  );
};
