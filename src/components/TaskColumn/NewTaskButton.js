import React from "react";
import "./style.css";

class NewTaskButton extends React.Component {
    render() {

        return (
                <button className="new-task-button">
                    <span>Новая задача</span>
                </button>
        )
    }
}

export default NewTaskButton;
