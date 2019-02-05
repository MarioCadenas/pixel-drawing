import React, { useState, useEffect } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import { CANVAS_PREFIX } from './constants';

const App = () => {
  const [color, setColor] = useState(0);
  const [canvasList, setCanvasList] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <div className="App">
      <ColorPicker
        currentColor={color}
        setColor={color => setColor(color)}
      />
      <Canvas currentColor={color} />
    </div>
  );
}

export default App;
