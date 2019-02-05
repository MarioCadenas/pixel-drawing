import React, { useState, useEffect } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

const App = () => {
  const [color, setColor] = useState(0);

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
