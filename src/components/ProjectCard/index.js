import React from "react";

import "./style.css";
import Participants from "../CommonElements/Participants";
import ProjectStatus from "../ProjectStatus";


class ProjectCard extends React.Component {

    render() {
        return (
            <div className="project-card" onClick={this.props.onClick}>
                <div className="project-card-title">{this.props.project.title}</div>
                <div className="project-card-item">
                    <div className="project-card-item-title">Описание</div>
                    <p className="project-card-item-value project-card-item-description">{this.props.project.description}</p>
                </div>
                <div className="project-card-item">
                    <div className="project-card-item-title">Участники</div>
                    <Participants participants={this.props.project.members}/>
                </div>
                <div className="project-card-item">
                    <div className="project-card-item-title">Статус</div>
                    <ProjectStatus isComplete={this.props.project.completed}/>
                </div>
            </div>
        )
    }
}

export default ProjectCard;
