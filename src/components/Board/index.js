import React from "react";
import './style.css'
import CurrentUser from "../UserIcon/CurrentUser";
import KanbanBoard from "./Kanban";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserModalOpen: false,
        };
    }

    openModal() {
        this.setState({isUserModalOpen: true})
    }

    closeModal() {
        this.setState({isUserModalOpen: false})
    }


    render() {
        return (
            <div  className="board-wrapper custom-scroll">
                <div className="board" onClick={() => this.closeModal()}>
                    {this.props.children}
                </div>
                <CurrentUser name={"Иван Красиков"} onClick={() => this.openModal()} onClose={() => this.closeModal()}
                             isUserModalOpen={this.state.isUserModalOpen}/>
            </div>
        );
    }

}

export default Board;
/* onClose={this.closeModal()}*/