import React from "react";
import './style.css'
import ModalForm from "./Form";
import Participants from "../Participants";
import ChangeButton from "./ChangeButton";

class ModalParticipants extends React.Component {

    render() {
        return (
            <div className="modal-participants">
                <label className="modal-label">Участники</label>
                <div className="modal-participants-icons">
                    <Participants participants={this.props.participants}/>
                </div>
                <ChangeButton/>
            </div>
        );
    }
}

export default ModalParticipants;
