import React from "react";
import {withResizeDetector} from 'react-resize-detector';

import "../ExpandingElement/style.css";
import complete from '../../icons/complete.svg';
import in_progress from '../../icons/in_progress.svg';
import ProjectStatus from "../ProjectStatus";



class ProjectStatusLine extends React.Component {


    render() {
        return (
            <div className="project-status-line">
                <ProjectStatus isComplete={this.props.isComplete}/>
            </div>
        )
    }
}

export default ProjectStatusLine;
