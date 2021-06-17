import React from "react";
import './style.css'
import Board from "..";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import SimpleBar from 'simplebar-react';
import "simplebar/dist/simplebar.min.css";
import NewColumnButton from "../../TaskColumn/NewColumnButton";
import TaskColumn from "../../TaskColumn";
import Task from "../../Task";
import new_sprint from '../../../icons/new_sprint.svg';


class ScrumBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSprintActive: false,
        };
    }

    changeSprintState() {
        this.setState({isSprintActive: !this.state.isSprintActive})
    }

    render() {
        return (
            <Board>

                <DragDropContext onDragEnd={this.props.onDragEnd}>
                    <div className="scrum-board">
                        <div className="static-column">
                            <TaskColumn id={this.props.firstColumn.id} title={this.props.firstColumn.title}
                                        staticColumn={true}>
                                {this.props.firstColumn.tasks.map((task, index) => {
                                    return (
                                        <Task id={task.id} text={task.title} deadline={task.endTime}
                                              performers={task.performers} color={task.color} index={index}/>
                                    )
                                })}
                            </TaskColumn>
                        </div>

                        <div className="vertical-split"/>

                        {this.state.isSprintActive ? (
                            <div className="sprint-wrapper">
                                <div className="sprint-header">
                                    <span className="sprint-title">Спринт 06.05.21 - 13.05.21</span>
                                    <button className="sprint-close-button" onClick={() => this.changeSprintState()}>Завершить спринт</button>
                                </div>
                                <div className="sprint-columns">
                                    <Droppable type={'column'} droppableId={this.props.id} direction="horizontal">
                                        {(provided) => (
                                            <div className="kanban-columns" {...provided.droppableProps}
                                                 ref={provided.innerRef}>
                                                {this.props.children}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                    <NewColumnButton/>
                                </div>
                            </div>
                        ) : (
                            <button className="new-sprint-button" onClick={() => this.changeSprintState()}>
                                <div className="new-sprint-button-content">
                                    <img src={new_sprint} alt=""/>
                                    <span  className="new-sprint-button-span">Новый спринт</span>
                                </div>
                            </button>
                        )

                        }

                        <div className="vertical-split"/>
                        <div className="static-column">

                            <TaskColumn id={this.props.lastColumn.id} title={this.props.lastColumn.title}
                                        staticColumn={true}>
                                {this.props.lastColumn.tasks.map((task, index) => {
                                    return (
                                        <Task id={task.id} text={task.title} deadline={task.endTime}
                                              performers={task.performers} color={task.color} index={index}/>
                                    )
                                })}
                            </TaskColumn>
                        </div>
                    </div>
                </DragDropContext>

            </Board>
        );
    }
}

export default ScrumBoard;
