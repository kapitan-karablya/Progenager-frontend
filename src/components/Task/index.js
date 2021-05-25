import React from "react";
import "./style.css";
import {Draggable} from "react-beautiful-dnd";
import Performer from "../UserIcon/Performer";


class Task extends React.Component {
    render() {
        return (

            <Draggable key={this.props.id} draggableId={this.props.id} index={this.props.index}>
                {(provided) => (
                    <div className='task' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className='task-text'>
                            {this.props.text}
                        </div>
                        <div className='task-attributes'>
                            <div className="task-deadline">
                                {this.props.deadline}
                            </div>
                            <Performer performers={this.props.performers} color={this.props.color}/>
                        </div>
                    </div>
                )}
            </Draggable>

        )
    }
}

export default Task;

/*
*/