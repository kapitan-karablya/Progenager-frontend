import React from "react";
import './style.css'
import ModalForm from "./Form";
import Participants from "../Participants";
import ChangeButton from "./ChangeButton";
import ProjectModal from "./Project";
import AddParticipants from "./AddParticipants";

class ModalParticipants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isParticipantsModalOpen: false,
        };
    }

    openModal() {
        this.setState({ isParticipantsModalOpen: true })
    }

    closeModal() {
        this.setState({ isParticipantsModalOpen: false })
    }

    render() {
        return (
            <div className="modal-participants">
                <label className="modal-label">Участники</label>
                <div className="modal-participants-icons">
                    <Participants participants={this.props.participants}/>
                </div>
                <ChangeButton onClick={() => this.openModal()}  participants={this.props.participants}/>
            </div>
        );
    }
}

export default ModalParticipants;
