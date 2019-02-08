import React, { useState, Fragment } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import CanvasMenu from './components/CanvasMenu';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  align-items: center;
  background-color: #333;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const App = () => {
  const [color, setColor] = useState(0);
  const [selectedCanvas, setSelectedCanvas] = useState([]);

  const loadCanvas = (canvas) => {
    setSelectedCanvas(canvas);
  };

  return (
    <AppContainer>
      <GlobalReset />
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
    </AppContainer>
  );
}

export default App;
