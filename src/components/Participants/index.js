import React from "react";
import {withResizeDetector} from 'react-resize-detector';

import "./style.css";
import Performer from "../UserIcon/Performer";


class Participants extends React.Component {


    render() {
        const {width, participants} = this.props;

        if (participants === undefined || participants.length === 0)
            return (
                <div className="participants">
                    <span className="no-participants">Добавьте участников</span>
                </div>
            );

        const displayedParticipantsCount = Math.floor(width / 40);
        const isAllParticipantsDisplayed = participants.length <= displayedParticipantsCount;

        return (
            <div className="participants">
                {participants.slice(0, (isAllParticipantsDisplayed ? participants.length : displayedParticipantsCount - 1)).map((participant) => {
                    return (
                        <Performer performers={participant.split()}/>
                    )
                })}
                {!isAllParticipantsDisplayed ?
                    <Performer
                        performers={participants.slice(displayedParticipantsCount - 1, participants.length)}/> : null}
            </div>
        )
    }
}

export default withResizeDetector(Participants);
