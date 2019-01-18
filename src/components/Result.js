import React, { Component } from 'react';



class Result extends Component {

    setColor(){
        return {
            fontSize : this.props.size,
            color : this.props.color,
            borderColor : this.props.color
        };
    }

    render() {
        return (
             <div className="card">
                  <div className="card-header">
                      Color: { this.props.color } -   Size: { this.props.size }px
                  </div>
                  <div className="card-body">
                      <div id="result" style={ this.setColor() }>
                        Nội dung text đây nè !!!!
                      </div>
                  </div>
              </div>
        );
    }
}

export default Result;
