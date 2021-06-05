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

class AbsoluteTypeModal extends React.Component {
    clickSource;
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    openModal() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    closeModal() {
        this.props.changeModalState(false);
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && !this.props.clickSource.contains(event.target)) {
            this.closeModal();
        }
    }

    render() {
        if (!this.props.isOpen)
            return null;
        this.openModal();
        return (
            <div className="absolute-modal" ref={this.setWrapperRef}>
                <Modal onClose={() => this.closeModal()}>
                    {this.props.children}
                </Modal>
            </div>
        )
    }
}

export default AbsoluteTypeModal;
