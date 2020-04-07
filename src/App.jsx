import React, { createRef } from 'react';
import CanvasDraw from "react-canvas-draw";
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { imgSrc: "", canvasWidth: "400px", canvasHeight: "400px" };
        this.canvas = createRef();
    }

    componentDidMount() {
        let img = new Image();
        img.src = "https://i.imgur.com/oKYIL7y.jpg";
        img.onload = () => {
            let width = window.innerWidth * .6;
            let height = (img.height / img.width) * width;
            this.setState({ imgSrc: img.src, canvasWidth: `${width}px`, canvasHeight: `${height}px` });
        };
    }

    componentDidUpdate() {
        this.canvas.current.drawImage();
    }

    render() {
        return (
            <div className="App">
                <Button>Annuler</Button>
                <Button>Effacer</Button>
                <Button>Sauvegarder</Button>
                <CanvasDraw className="canvas" ref={this.canvas} imgSrc={this.state.imgSrc} canvasWidth={this.state.canvasWidth} canvasHeight={this.state.canvasHeight}
                    hideGrid={true} />
            </div>
        )
    }
}

export default App