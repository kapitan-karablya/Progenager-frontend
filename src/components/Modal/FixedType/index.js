import React from "react";
import './style.css'
import Modal from "../index";
import ModalForm from "../Form";
import ModalTitle from "../Title";
import ModalDescription from "../Description";
import ModalParticipants from "../Participants";
import ModalMethodology from "../Methodology";
import ModalSaveButton from "../SaveButton";
import ModalDate from "../Date";
import SimpleBar from 'simplebar-react';

class FixedTypeModal extends React.Component {

    render() {
        if (!this.props.isOpen)
            return null;

        return (
            <div className="fixed-modal-wrapper">
                <div className="fixed-modal">
                    <Modal onClose={this.props.onClose}>
                        {this.props.children}
                    </Modal>
                </div>
                <div className="modal-background" onClick={() => this.props.onClose()}/>
            </div>
        );
    }
}

export default FixedTypeModal;
