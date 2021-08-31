import React from "react";
import "./style.css";

class NewTaskButton extends React.Component {
    render() {

        return (
                <button className="new-task-button" onClick={this.props.openTaskModal}>
                    <span>Новая задача</span>
                </button>
        )
    }
}

export default NewTaskButton;
