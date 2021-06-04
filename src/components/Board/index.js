import React from "react";
import './style.css'
import CurrentUser from "../UserIcon/CurrentUser";
import KanbanBoard from "./Kanban";

class Board extends React.Component {

    render() {
        return (
            <div  className="board-wrapper custom-scroll">
                <div className="board">
                    {this.props.children}
                </div>
                <CurrentUser name={"Иван Красиков"}/>
            </div>
        );
    }

}

export default Board;
