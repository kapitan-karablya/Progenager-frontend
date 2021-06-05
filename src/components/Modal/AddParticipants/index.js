import React from "react";
import './style.css'
import Modal from "../index";
import ModalForm from "../Form";
import ModalTitle from "../Title";
import ModalDescription from "../Description";
import ModalParticipants from "../Participants";
import ModalMethodology from "../Methodology";
import ModalSaveButton from "../SaveButton";
import FixedTypeModal from "../FixedType";
import Performer from "../../UserIcon/Performer";

class AddParticipants extends React.Component {

    render() {
        return (
            <FixedTypeModal isOpen={this.props.isOpen} onClose={this.props.onClose}>
                <ModalForm>
                    <div className="add-participants-modal-title">Изменить участников проекта</div>
                    <div className="add-participants-wrapper">
                        <div className="current-participants">
                            <span className="current-participants-title">Участники</span>
                            <div className="current-participants-list">
                                {this.props.participants.map((participant) => {
                                    return (
                                        <Performer performers={participant.split()}/>
                                    )
                                })}
                            </div>
                        </div>
                        <input />
                    </div>
                </ModalForm>
            </FixedTypeModal>
        );
    }
}

export default AddParticipants;
