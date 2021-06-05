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

class ProjectModal extends React.Component {

    render() {
        const project = this.props.project === undefined ?
            {
                id: undefined,
                title: undefined,
                description:  undefined,
                participants: undefined,
                completed: undefined,
            } : this.props.project;
        return (
            <FixedTypeModal isOpen={this.props.isOpen} onClose={this.props.onClose}>
                <ModalForm>
                    <ModalTitle placeholder={"Название проекта"} title={project.title}/>
                    <ModalDescription placeholder={"Введите описание проекта"} description={project.description}/>
                    <ModalParticipants participants={project.participants}/>
                    <ModalMethodology/>
                    <ModalSaveButton/>
                </ModalForm>
            </FixedTypeModal>
        );
    }
}

export default ProjectModal;
