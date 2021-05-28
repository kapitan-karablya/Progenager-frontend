import React from "react";
import "./style.css";



class ListLine extends React.Component {
    render() {
        return (
            <div className="list-line">
                {this.props.children}
            </div>
        )
    }
}

export default ListLine;
