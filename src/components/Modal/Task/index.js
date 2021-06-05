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
import FixedTypeModal from "../FixedType";

class TaskModal extends React.Component {

    render() {
        const task = this.props.task === undefined ?
            {
                id: undefined,
                title: undefined,
                description:  undefined,
                participants: undefined,
            } : this.props.task;
        return (
            <FixedTypeModal isOpen={this.props.isOpen} onClose={this.props.onClose} isCentral={true}>
                <ModalForm>
                    <ModalTitle placeholder={"Текст задачи"} title={task.title}/>

                    <ModalDescription placeholder={"Введите описание задачи"} description={task.description}/>
                    <ModalParticipants participants={task.performers}/>
                    <ModalDate/>
                    <ModalSaveButton/>
                </ModalForm>
            </FixedTypeModal>
        );
    }
}

export default TaskModal;
