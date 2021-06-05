import React from "react";
import './style.css'
import Participants from "../Participants";

class ChangeButton extends React.Component {

    render() {
        return (
            <div className="modal-button change-button" onClick={this.props.onClick}  participants={this.props.participants}>Изменить</div>
        );
    }
}

export default ChangeButton;
