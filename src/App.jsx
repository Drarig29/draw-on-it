import React from 'react';
import CanvasDraw from "react-canvas-draw";
import './App.css';

function App() {
    return (
        <div className="App">
            <CanvasDraw className="canvas" canvasWidth="60%" hideGrid="true" />
        </div>
    );
}

export default App;
