import React from "react";
import './style.css'

class Board extends React.Component {
    render() {
        return (
            <div className="board custom-scroll">
                {this.props.children}
            </div>
        );
    }
}

export default Board;
