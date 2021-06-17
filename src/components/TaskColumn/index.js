import React from "react";
import "./style.css";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import NewTaskButton from "./NewTaskButton";
import ColumnTitle from "./ColumnTitle";

class TaskColumn extends React.Component {
    render() {
        return this.props.staticColumn ? (
            <div className='task-column'>
                <ColumnTitle title={this.props.title}/>
                <Droppable type={'task'} droppableId={this.props.id}>
                    {(provided) => (
                        <ul className="tasks custom-scroll"
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                            {this.props.children}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
                <NewTaskButton/>
            </div>
        ) : (
            <Draggable type={'column'} key={this.props.id} draggableId={this.props.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <div className='task-column'
                         ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                        <ColumnTitle title={this.props.title}/>
                        <Droppable type={'task'} droppableId={this.props.id}>
                            {(provided) => (
                                <ul className="tasks custom-scroll" {...provided.droppableProps}
                                    ref={provided.innerRef}>
                                    {this.props.children}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                        <NewTaskButton/>
                    </div>
                )}
            </Draggable>
        )
    }
}

TaskColumn.defaultProps = {
    staticColumn: false,
};

export default TaskColumn;
