import React from "react";
import './style.css'
import AppPage from "../AppPage";
import AppHeader from "../AppHeader";
import AppHeaderSideArea from "../AppHeader/SideArea";
import AppHeaderTitle from "../AppHeader/Title";
import HeaderButton from "../AppHeader/Button";
import invite from "../../icons/add_users.svg";
import privacy from "../../icons/project_lock.svg";
import discussions from "../../icons/discussions.svg";
import menu from "../../icons/menu.svg";
import Board from "../Board";
import ElementsList from "../ElementsList";
import ExpandingElement from "../ExpandingElement";
import KanbanBoard from "../Board/Kanban";
import Task from "../Task";
import ListLine from "../ExpandingElement/ListLine";
import ProjectStatus from "../ExpandingElement/ProjectStatus";
import Description from "../ExpandingElement/Description";
import Participants from "../Participants";
import ProjectModal from "../Modal/Project";
import SimpleBar from "simplebar-react";
import cookies from "../../helpers/Coocies";


const projectsList = [
    {
        id: "0",
        title: "Первый проект",
        description: "Также как существующая теория позволяет выполнить важные задания по разработке существующих финансовых и административных условий. Есть над чем задуматься: активно развивающиеся страны третьего мира ассоциативно распределены по отраслям. Но элементы политического процесса освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, своевременно верифицированы.",
        members: ["Красиков Иван", "Габдеев Эльдар"],
        completed: true,
    }, {
        id: "1",
        title: "Второй проект",
        description: "Приятно, граждане, наблюдать, как некоторые особенности внутренней политики лишь добавляют фракционных разногласий и разоблачены. Сделанные на базе интернет-аналитики выводы заблокированы в рамках своих собственных рациональных ограничений.",
        participants: ["Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Габдеев Эльдар"],
        completed: false,
    }, {
        id: "2",
        title: "Третий проект",
        description: "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: убеждённость некоторых оппонентов требует от нас анализа приоритизации разума над эмоциями. И нет сомнений, что многие известные личности формируют глобальную экономическую сеть и при этом - превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. С учётом сложившейся международной обстановки, перспективное планирование говорит о возможностях направлений прогрессивного развития.",
        participants: [],
        completed: false,
    }, {
        id: "3",
        title: "Четвертый проект",
        description: "Не следует, однако, забывать, что базовый вектор развития выявляет срочную потребность дальнейших направлений развития. Повседневная практика показывает, что глубокий уровень погружения в значительной степени обусловливает важность системы массового участия!",
        participants: [],
        completed: true,
    },
    {
        id: "4",
        title: "Первый проект",
        description: "Также как существующая теория позволяет выполнить важные задания по разработке существующих финансовых и административных условий. Есть над чем задуматься: активно развивающиеся страны третьего мира ассоциативно распределены по отраслям. Но элементы политического процесса освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, своевременно верифицированы.",
        participants: ["Красиков Иван", "Габдеев Эльдар"],
        completed: true,
    }, {
        id: "5",
        title: "Второй проект",
        description: "Приятно, граждане, наблюдать, как некоторые особенности внутренней политики лишь добавляют фракционных разногласий и разоблачены. Сделанные на базе интернет-аналитики выводы заблокированы в рамках своих собственных рациональных ограничений.",
        participants: ["Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Красиков Иван", "Габдеев Эльдар"],
        completed: false,
    }, {
        id: "6",
        title: "Третий проект",
        description: "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: убеждённость некоторых оппонентов требует от нас анализа приоритизации разума над эмоциями. И нет сомнений, что многие известные личности формируют глобальную экономическую сеть и при этом - превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. С учётом сложившейся международной обстановки, перспективное планирование говорит о возможностях направлений прогрессивного развития.",
        participants: [],
        completed: false,
    }, {
        id: "7",
        title: "Четвертый проект",
        description: "Не следует, однако, забывать, что базовый вектор развития выявляет срочную потребность дальнейших направлений развития. Повседневная практика показывает, что глубокий уровень погружения в значительной степени обусловливает важность системы массового участия!",
        participants: [],
        completed: true,
    }
];

class PersonalProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: null,
            isProjectModalOpen: false,
            modalProjectID: null
        };
    }

    componentDidMount(){
        let response = fetch("https://localhost:44317/users/GetProjects", {
            method: "GET",
            headers:  {
                Authorization: "Bearer " + cookies.get("access_token")["access_token"]
              }
        }).then(response => {
            
            response.json().then(json => {
                let projectsList = json.map((object) => {
                    return object.project;
                })
                
                this.setState({projects: projectsList});
                console.log(this.state.projects)
            })
        });
    }

    getUserProjects(event) {
        let response = fetch("https://localhost:44317/users/GetProjects", {
            method: "GET",
            headers:  {
                Authorization: "Bearer " + cookies.get("access_token")["access_token"]
              }
        }).then(response => {
            
            response.json().then(json => {
                let projectsList = json.map((object) => {
                    return object.project;
                })
                
                this.setState({projects: projectsList});
                console.log(this.state.projects);
                this.render()
            })
        });
    }

    getProjectData(id) {
        if(this.state.projects)
        return this.state.projects.find(project => project.id === id);}

    openModal(projectId) {
        this.setState({ isProjectModalOpen: true, modalProjectID: projectId })
    }

    closeModal() {
        this.setState({ isProjectModalOpen: false })
    }

    getProjectsList(){
        if(this.state.projects)
           return this.state.projects.map((project, index) => {
                return (
                    <ExpandingElement id={project.id} title={project.title} index={index}>
                        <ListLine onClick={() => this.openModal(project.id)}>
                            <Description description={project.description}/>
                            <Participants participants={project.members.map(user => user.firstName + " " + user.lastName)}/>
                            <ProjectStatus isComplete={project.state}/>
                        </ListLine>
                    </ExpandingElement>
                )
            })
    }

    render() {
        return (
            <AppPage>
                <AppHeader>
                    <AppHeaderSideArea>
                        <AppHeaderTitle title="Название проекта"/>
                        <HeaderButton onClick={() => this.openModal(null)} text="Новый проект" icon={invite}/>
                    </AppHeaderSideArea>
                    <AppHeaderSideArea>
                        <HeaderButton text="Меню" icon={menu}/>
                    </AppHeaderSideArea>
                </AppHeader>
                <Board update={this.props.update}>
                    <ElementsList>
                        {this.getProjectsList()} 
                        
                    </ElementsList>
                </Board>
                <ProjectModal project={this.getProjectData(this.state.modalProjectID)} isOpen={this.state.isProjectModalOpen} onClose={() => this.closeModal()}/>
            </AppPage>
        );
    }
}


export default PersonalProjects;
