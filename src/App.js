import React, { Component } from 'react';
import ToolBar from './ToolBar'
import SwatchPalette from './SwatchPalette'
import DrawCanvas from './DrawCanvas'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="root">
        <ToolBar/>
        <div className="content">
          <SwatchPalette/>
          <DrawCanvas/>
        </div>
      </div>
    );
  }
}

export default App;
