import React, { Component } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorPicker />
        <Canvas />
      </div>
    );
  }
}

export default App;
