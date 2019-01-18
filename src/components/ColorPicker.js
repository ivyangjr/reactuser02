import React, { Component } from 'react';



class ColorPicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            color : ['red','green','black','blue']
        };
    }

    setBackground = (color) => {
        return {
            backgroundColor : color
        };
    }

    setActiveColor(color){
        this.props.receiveColor(color);
    }

    render() {

        let elements = this.state.color.map((color,index) => {
            return  <span 
                        key={ index } 
                        style={ this.setBackground(color) }
                        className={ color === this.props.color ? 'active' : '' }
                        onClick={ () => this.setActiveColor(color) }
                    ></span>
        });

        return (
            <div className="card">
                <div className="card-header">
                    Color picker
                </div>
                <div className="card-body">
                    { elements }
                </div>
            </div>
        );
    }
}

export default ColorPicker;
