import React, {useState} from "react";
import {DragDropContext} from 'react-beautiful-dnd';


import './style.css'
import AppHeader from "../AppHeader";
import AppHeaderSideArea from "../AppHeader/SideArea.js";
import AppHeaderTitle from "../AppHeader/Title.js";
import HeaderButton from "../HeaderButton";
import KanbanBoard from "../Board/Kanban";
import AppPage from "../AppPage";

import invite from '../../icons/add_users.svg';
import privacy from '../../icons/project_lock.svg';
import discussions from '../../icons/discussions.svg';
import menu from '../../icons/menu.svg';
import TaskColumn from "../TaskColumn";
import Task from "../Task";
import CurrentUser from "../UserIcon/CurrentUser";
import NewColumnButton from "../TaskColumn/NewColumnButton";

const tasksList = [
    {
        id: "0",
        title: "Нужно сделать",
        tasks: [
            {
                id: "00000000-0000-0000-0000-000000000000",
                title: 'Написать диплом',
                assigneesId: null,
                startTime: null,
                endTime: '1 июня',
                description: null,
                createdAt: "0001-01-01T00:00:00",
                projectId: null,
                performers: ["Эльдар Габдеев"],
                color: '#43A54C'
            }]
    }, {
        id: "1",
        title: "В процессе",
        tasks: [
            {
                id: "00000000-0000-0000-0000-000000000001",
                title: 'Придумать название приложения',
                assigneesId: null,
                startTime: null,
                endTime: '5 мая',
                description: null,
                createdAt: "0001-01-01T00:00:00",
                projectId: null,
                performers: ["Иван Красиков", "Эльдар Габдеев"]
            },
            {
                id: "00000000-0000-0000-0000-000000000002",
                title: 'Дальнейшее развитие различных форм деятельности предоставляет широкие возможности для новых предложений.',
                assigneesId: null,
                startTime: null,
                endTime: null,
                description: null,
                createdAt: "0001-01-01T00:00:00",
                projectId: null,
                performers: ["Иван Красиков", "Эльдар Габдеев", "Иван Красиков", "Иван Красиков", "Иван Красиков"]
            }]
    }, {
        id: "2",
        title: "Сделано",
        tasks: [
            {
                id: "00000000-0000-0000-0000-000000000003",
                title: 'Расписать требования к клиентской части приложенияв текстовой части диплома',
                assigneesId: null,
                startTime: null,
                endTime: '1 мая',
                description: null,
                createdAt: "0001-01-01T00:00:00",
                projectId: null,
                performers: null
            },
            {
                id: "00000000-0000-0000-0000-000000000004",
                title: 'Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения соответствующих условий активизации.',
                assigneesId: null,
                startTime: null,
                endTime: '15 апреля',
                description: null,
                createdAt: "0001-01-01T00:00:00",
                projectId: null,
                performers: ["Иван Красиков"],
                color: '#A54383',
            }]
    }, {
        id: "3",
        title: "Идеи",
        tasks: [
            {
                id: "00000000-0000-0000-0000-000000000005",
                title: 'Есть над чем задуматься: диаграммы связей неоднозначны и будут ограничены исключительно образом мышления. А также многие известные личности представляют собой не что иное, как квинтэссенцию победы ',
                assigneesId: null,
                startTime: null,
                endTime: '30 февраля',
                description: null,
                createdAt: "0001-01-01T00:00:00",
                projectId: null,
                performers: ["Эльдар Габдеев"],
                color: '#43A54C'
            }]
    }
];

const moveTask = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

class CurrentProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: tasksList
        };
    }

    getTasks = id => this.state.columns.find(column => column.id === id).tasks;
    getColumnIndex = id => this.state.columns.findIndex(column => column.id === id);

    handleOnDragEnd = (result) => {
        const {source, destination} = result;
        let newState = this.state.columns;
        if (!destination) return;
        if (source.droppableId === 'board') {
            const items = Array.from(this.state.columns);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);

            newState = items;

        } else if (source.droppableId === destination.droppableId) {
            const items = Array.from(this.getTasks(source.droppableId));
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);

            newState[this.getColumnIndex(source.droppableId)].tasks = items;

        } else {
            const result = moveTask(
                this.getTasks(source.droppableId),
                this.getTasks(destination.droppableId),
                source,
                destination
            );

            newState[this.getColumnIndex(source.droppableId)].tasks = result[source.droppableId];
            newState[this.getColumnIndex(destination.droppableId)].tasks = result[destination.droppableId];
        }

        this.setState({columns: newState});

    };

    render() {
        return (
            <AppPage>
                <AppHeader className="page-header">
                    <AppHeaderSideArea>
                        <AppHeaderTitle title="Название проекта"/>
                        <HeaderButton text="Пригласить" icon={invite}/>
                        <HeaderButton text="Приватный проект" icon={privacy}/>
                    </AppHeaderSideArea>
                    <AppHeaderSideArea className="header-right-side">
                        <HeaderButton text="Обсуждения" icon={discussions}/>
                        <HeaderButton text="Меню" icon={menu}/>
                    </AppHeaderSideArea>
                </AppHeader>
                <KanbanBoard onDragEnd={this.handleOnDragEnd} id={'board'}>
                    {this.state.columns.map((column, index) => {
                        return (
                            <TaskColumn id={column.id} title={column.title} index={index}>
                                {column.tasks.map((task, index) => {
                                    return (
                                        <Task id={task.id} text={task.title} deadline={task.endTime}
                                              performers={task.performers} color={task.color} index={index}/>
                                    )
                                })}
                            </TaskColumn>
                        )
                    })}
                    <NewColumnButton/>
                    <CurrentUser name={"Иван Красиков"}>

                    </CurrentUser>
                </KanbanBoard>
            </AppPage>
        );
    }
}


export default CurrentProject;


/*                                    <TaskColumn id={this.state.columns[1].id} title={this.state.columns[1].title}>
                        {this.state.columns[1].column_tasks.map(({id, name, deadline, performer}, index) => {
                            {
                                return (
                                    <Task id={id} text={name} deadline={deadline} performer={performer}
                                          index={index}/>
                                )
                            }
                        })}
                    </TaskColumn>
                      <TaskColumn id="88" title="Нужно сделать" onDragEnd={this.handleOnDragEnd}>
                        <Task index={1} id='1' text="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task index={2} id='2'
                              text="Дальнейшее развитие различных форм деятельности предоставляет широкие возможности для новых предложений."
                              deadline="15 мая" performer="ИК"/>
                        <Task index={3} id='3' text="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task index={4} id='4' text="Написать диплом" deadline="15 мая" performer="ИК"/>

                    </TaskColumn>

  <TaskColumn title="Нужно сделать">
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task
                            name="Дальнейшее развитие различных форм деятельности предоставляет широкие возможности для новых предложений."
                            deadline="15 мая" performer="ИК"/>
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>

                    </TaskColumn>
                    <TaskColumn title="Нужно сделать">
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task
                            name="Дальнейшее развитие различных форм деятельности предоставляет широкие возможности для новых предложений."
                            deadline="15 мая" performer="ИК"/>
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>

                    </TaskColumn>
                    <TaskColumn title="Нужно сделать">
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task
                            name="Дальнейшее развитие различных форм деятельности предоставляет широкие возможности для новых предложений."
                            deadline="15 мая" performer="ИК"/>
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>

                    </TaskColumn>
                    <TaskColumn title="Нужно сделать">
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task
                            name="Дальнейшее развитие различных форм деятельности предоставляет широкие возможности для новых предложений."
                            deadline="15 мая" performer="ИК"/>
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>

                    </TaskColumn>
                    <TaskColumn title="Нужно сделать">
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task
                            name="Дальнейшее развитие различных форм деятельности предоставляет широкие возможности для новых предложений."
                            deadline="15 мая" performer="ИК"/>
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>
                        <Task name="Написать диплом" deadline="15 мая" performer="ИК"/>

                    </TaskColumn>*/