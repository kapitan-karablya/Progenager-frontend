import React from "react";
import './style.css'
import Board from "..";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import SimpleBar from 'simplebar-react';
import "simplebar/dist/simplebar.min.css";
import NewColumnButton from "../../TaskColumn/NewColumnButton";

class KanbanBoard extends React.Component {
    render() {
        return (
            <Board>
                <DragDropContext onDragEnd={this.props.onDragEnd}>
                    <div className="kanban-board">
                    <Droppable type={'column'} droppableId={this.props.id} direction="horizontal">
                        {(provided) => (
                            <div className="kanban-columns" {...provided.droppableProps} ref={provided.innerRef}>
                                {this.props.children}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <NewColumnButton/>
                    </div>
                </DragDropContext>

            </Board>
        );
    }
}

export default KanbanBoard;
