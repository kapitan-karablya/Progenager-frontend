import React from "react";
import "./style.css";

class Date extends React.Component {
    render() {
        return (
            <div className="task-date">{this.props.date}</div>
        )
    }
}

export default Date;