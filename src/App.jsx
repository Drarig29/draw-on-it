import React, { createRef } from 'react';
import CanvasDraw from "react-canvas-draw";
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { imgSrc: "", canvasHeight: "400px" };
        this.canvas = createRef();
    }

    componentDidMount() {
        let img = new Image();
        img.src = "https://i.imgur.com/oKYIL7y.jpg";
        img.onload = () => {
            const currentWidth = this.canvas.current.canvasContainer.clientWidth;
            let height = (img.height / img.width) * currentWidth;
            this.setState({ imgSrc: img.src, canvasHeight: `${height}px` });
        };
    }

    componentDidUpdate() {
        this.canvas.current.drawImage();
    }

    render() {
        return (
            <div className="App">
                <Button>Hello</Button>
                <CanvasDraw className="canvas" ref={this.canvas} imgSrc={this.state.imgSrc} canvasWidth="70%" canvasHeight={this.state.canvasHeight}
                    hideGrid={true} />
            </div>
        )
    }
}

export default App