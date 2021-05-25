import React from "react";
import "./style.css";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

class TaskColumn extends React.Component {
    render() {

        return (
            <Draggable type={'column'} key={this.props.id} draggableId={this.props.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <div className='task-column'
                         ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                        <div className="column-title">
                            {this.props.title}
                        </div>
                        <Droppable type={'task'} droppableId={this.props.id}>
                            {(provided) => (
                                <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.props.children}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </div>
                )}
            </Draggable>
        )
    }
}

export default TaskColumn;


/*                        <Droppable droppableId={this.props.id}>
                            {(provided) => (
                                <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef}>

                                    {this.props.children}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>

                        */
