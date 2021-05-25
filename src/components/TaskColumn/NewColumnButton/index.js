import React from "react";
import "./style.css";

class NewColumnButton extends React.Component {
    render() {

        return (
            <div className='task-column'>
                <button className="column-title new-column-button">
                    Добавить колонку
                </button>
            </div>

        )
    }
}

export default NewColumnButton;
