import React from "react";
import {withResizeDetector} from 'react-resize-detector';

import "./style.css";
import complete from '../../icons/complete.svg';
import in_progress from '../../icons/in_progress.svg';



class ProjectStatus extends React.Component {


    render() {
        const {width} = this.props;

        return (
            <div className="project-status">
                <img className="status-icon" src={this.props.projectIsComplete ? complete : in_progress}/>
                {width > 140 ? (this.props.projectIsComplete
                    ? <span className="status-text complete-text">Завершен</span>
                    : <span className="status-text in-progress-text">В процессе</span>) : null}
            </div>
        )
    }
}

export default withResizeDetector(ProjectStatus);
