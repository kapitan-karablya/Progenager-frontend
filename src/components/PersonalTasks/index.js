import React from "react";
import './style.css'
import AppPage from "../AppPage";
import AppHeader from "../AppHeader";
import AppHeaderSideArea from "../AppHeader/SideArea";
import AppHeaderTitle from "../AppHeader/Title";
import HeaderButton from "../HeaderButton";
import invite from "../../icons/add_users.svg";
import privacy from "../../icons/project_lock.svg";
import discussions from "../../icons/discussions.svg";
import menu from "../../icons/menu.svg";
import Board from "../Board";
import ExpandingElement from "../ExpandingElement";
import ListLine from "../ExpandingElement/ListLine";
import Description from "../ExpandingElement/Description";
import Participants from "../Participants";
import ProjectStatus from "../ExpandingElement/ProjectStatus";
import ElementsList from "../ElementsList";
import Text from "../ExpandingElement/Text";
import Date from "../ExpandingElement/Date";
import TaskModal from "../Modal/Task";
import ProjectModal from "../Modal/Project";


const projectsList = [
    {
        id: "0",
        title: "Первый проект",
        tasks: [
            {
                id: "00000000-0000-0000-0000-000000000001",
                title: "Но элементы политического процесса освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, своевременно верифицированы.",
                description: "Также как существующая теория позволяет выполнить важные задания по разработке существующих финансовых и административных условий. Есть над чем задуматься: активно развивающиеся страны третьего мира ассоциативно распределены по отраслям. ",
                performers: ["Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Габдеев Эльдар"],
                endDate: "09.04.2021",
            },{
                id: "00000000-0000-0000-0000-000000000002",
                title: "Сделать дело",
                description: "гулять смело",
                performers: ["Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Габдеев Эльдар"],
                endDate: "09.04.2021",
            },{
                id: "00000000-0000-0000-0000-000000000003",
                title: "Сделать дело",
                description: "гулять смело",
                performers: ["Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Габдеев Эльдар"],
                endDate: "09.04.2021",
            }
        ],
    }, {
        id: "1",
        title: "Второй проект",
        tasks: [
            {
                id: "00000000-0000-0000-0001-000000000001",
                title: "Сделать дело",
                description: "гулять смело",
                performers: ["Красиков Иван"],
                endDate: "09.04.2021",
            }]
    }, {
        id: "2",
        title: "Третий проект",
        tasks: [
            {
                id: "00000000-0000-0000-0002-000000000001",
                title: "Сделать дело",
                description: "гулять смело",
                performers: ["Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Габдеев Эльдар"],
                endDate: "09.04.2021",
            }]
    }, {
        id: "3",
        title: "Четвертый проект",
        tasks: [
            {
                id: "00000000-0000-0000-0003-000000000001",
                title: "Сделать дело",
                description: "гулять смело",
                performers: ["Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Габдеев Эльдар"],
                endDate: "09.04.2021",
            }
        ]
    }
];


class PersonalTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: projectsList,
            isTaskModalOpen: false,
            modalProjectID: null,
            modalTaskID: null
        };
    }

    getTaskData (taskId, projectId) {
        const project = this.state.projects.find(project => project.id === projectId);
        return project === undefined ? undefined : project.tasks.find(task => task.id === taskId)
    }

    openModal(projectId, taskId) {
        this.setState({ isTaskModalOpen: true, modalProjectID: projectId, modalTaskID: taskId })
    }

    closeModal() {
        this.setState({ isTaskModalOpen: false })
    }

    render() {
        return (
            <AppPage>
                <AppHeader>
                    <AppHeaderSideArea>
                        <AppHeaderTitle title="Личные задачи"/>
                    </AppHeaderSideArea>
                    <AppHeaderSideArea>
                        <HeaderButton text="Меню" icon={menu}/>
                    </AppHeaderSideArea>
                </AppHeader>
                <Board>
                    <ElementsList>
                        {this.state.projects.map((project) => {
                            return (
                                <ExpandingElement id={project.id} title={project.title}>
                                    {project.tasks.map((task) => {
                                        return (
                                            <ListLine onClick={() => this.openModal(project.id, task.id)}>
                                                <Text title={task.title}/>
                                                <Description description={task.description}/>
                                                <Date date={task.endDate}/>
                                            </ListLine>
                                        )
                                    })}
                                </ExpandingElement>
                            )
                        })}
                    </ElementsList>
                </Board>
                <TaskModal task={this.getTaskData(this.state.modalTaskID, this.state.modalProjectID)}
                           isOpen={this.state.isTaskModalOpen} onClose={() => this.closeModal()}/>

            </AppPage>
        );
    }
}


export default PersonalTasks;
