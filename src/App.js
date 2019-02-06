import React, { useState, Fragment } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import CanvasMenu from './components/CanvasMenu';

const App = () => {
  const [color, setColor] = useState(0);
  const [selectedCanvas, setSelectedCanvas] = useState([]);

  const loadCanvas = (canvas) => {
    setSelectedCanvas(canvas);
  };

  return (
    <div className="App">
      {
        Object.keys(selectedCanvas).length
          ? (
            <Fragment>
              <ColorPicker
                currentColor={color}
                setColor={color => setColor(color)}
              />
              <Canvas canvas={selectedCanvas} currentColor={color} />
            </Fragment>
          ) : (
            <CanvasMenu loadCanvas={loadCanvas} />
          )
      }
    </div>
  );
}

export default App;
