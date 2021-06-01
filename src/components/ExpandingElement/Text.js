import React from "react";
import "./style.css";

class Text extends React.Component {
    render() {
        return (
            <div className="line-text">{this.props.title}</div>
        )
    }
}

export default Text;