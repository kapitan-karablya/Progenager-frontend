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
import cookies from "../../../helpers/Coocies";


class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.project.id,
            title: this.props.project.title,
            description: this.props.project.description,
            members: this.props.project.members,
            completed: this.props.project.completed,
        };
    }

    ChangeProject() {
        let bodyParams = {
            Project:{
                Title: "proj"
            }
        };
        if (this.props.project === undefined) {
            fetch("https://localhost:44317/projects/create", {
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + cookies.get("access_token")["access_token"]
                },
                body: JSON.stringify(bodyParams)
            }).then(response => {
                response.ok ?
                    response.json().then(json => {
                        console.log(response);
                    }) : console.log(response)

            });
        }

        this.props.onClose();
        setTimeout(this.props.updateProjects, 1000);
    }

    render() {
        const project = this.props.project; /*=== undefined ?
            {
                id: undefined,
                title: undefined,
                description: undefined,
                members: [],
                completed: undefined,
            } : this.props.project;*/
        return (
            <FixedTypeModal isOpen={this.props.isOpen} onClose={this.props.onClose}>
                <ModalForm>
                    <ModalTitle placeholder={"Название проекта"} title={project.title}/>
                    <ModalDescription placeholder={"Введите описание проекта"} description={project.description}/>
                    <ModalParticipants participants={project.members}/>
                    <ModalMethodology/>
                    <ModalSaveButton onClick={() => this.ChangeProject()}/>
                </ModalForm>
            </FixedTypeModal>
        );
    }
}

ProjectModal.defaultProps = {
    project: {
        id: undefined,
        title: undefined,
        description: undefined,
        members: [],
        completed: undefined,
    }
};

export default ProjectModal;
