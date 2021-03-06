import React from "react";

import "./style.css";
import Participants from "../CommonElements/Participants";
import ProjectStatus from "../ProjectStatus";
import EditButton from "../CommonElements/EditButton";


class ProjectCard extends React.Component {

    render() {
        return (
            <div className="project-card" tabIndex="0">
                <div className="project-card-title">{this.props.project.title}</div>
                <div className="project-card-item">
                    <div className="project-card-item-title">Описание</div>
                    <p className="project-card-item-value project-card-item-description">
                        {this.props.project.description ? this.props.project.description : "Без описания"}
                    </p>
                </div>
                <div className="project-card-item">
                    <div className="project-card-item-title">Участники</div>
                    <Participants participants={this.props.project.members}/>
                </div>
                <div className="project-card-item">
                    <div className="project-card-item-title">Статус</div>
                    <ProjectStatus isComplete={this.props.project.state}/>
                </div>
                <div className="project-edit" onClick={this.props.onClick}>
                <EditButton/>
                </div>
            </div>
        )
    }
}

export default ProjectCard;
