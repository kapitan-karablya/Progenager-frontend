import React from "react";
import './style.css'
import KanbanBoard from "./Kanban";
import UserAccountModal from "../Modal/UserAccount";
import CurrentUser from "../CurentUser";

class Board extends React.Component {

    render() {
        return (
            <div className="board-wrapper">
                <div className="board custom-scroll">
                    {this.props.children}
                </div>
                    <CurrentUser name={"Иван Красиков"}/>
            </div>
        );
    }

}

export default Board;
