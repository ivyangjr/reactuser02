import React, { Component } from 'react';

import './App.css';
import ColorPicker from './components/ColorPicker';
import Size from './components/Size';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            color : 'red',
            size : 14
        };
    }

    setColor = (param) => {
        this.setState({
            color : param
        });
        console.log(this.state.color);
    }

    setSize = (value) => {
        this.setState({
            size : (this.state.size + value >=8 && this.state.size + value <=36) ? this.state.size + value : this.state.size
        });
    }

    setReset = (value) => {
        this.setState({
            color : 'red',
            size : 14
        });
    }

    render() {
        return (
            <div className="container mt-5">
                    <div className="row">
                          <div className="col-sm-6">
                              <ColorPicker color={ this.state.color } receiveColor={ this.setColor }/>
                          </div>
                          <div className="col-sm-6">
                              <Size size={ this.state.size } receiveSize={ this.setSize }/>
                          </div>
                          <div className="col-sm-12 mt-4">
                              <Result color={ this.state.color } size={ this.state.size }/>
                          </div>
                          <div className="col-sm-12 mt-4">
                            <Reset receiveReset={ this.setReset }/>
                          </div>
                    </div>
              </div>
        );
    }
}

export default App;
