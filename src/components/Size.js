import React, { Component } from 'react';



class Size extends Component {

    changeSize(value){
        this.props.receiveSize(value);
    }

    render() {
        return (
                <div className="card">
                  <div className="card-header">
                      Size { this.props.size }px
                  </div>
                  <div className="card-body">
                        <button type="button" className="btn btn-danger" onClick={ () => this.changeSize(-2) }>Giảm</button>
                        <button type="button" className="btn btn-danger ml-2" onClick={ () => this.changeSize(2) }>Tăng</button>
                  </div>
                </div>
        );
    }
}

export default Size;