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
import ProjectStatus from "../ProjectStatus";
import Description from "../ExpandingElement/Description";
import Participants from "../Participants";
import ProjectModal from "../Modal/Project";
import SimpleBar from "simplebar-react";
import cookies from "../../helpers/Coocies";
import ProjectCard from "../ProjectCard";
import ProjectStatusLine from "../ExpandingElement/ProjectStatusLine";
import new_project from "../../icons/plus.svg";
import tile_view from "../../icons/tile_view.svg";
import list_view from "../../icons/list_view.svg";



const projectsList = [
    {
        id: "0",
        title: "Первый проект",
        description: "Также как существующая теория позволяет выполнить важные задания по разработке существующих финансовых и административных условий. Есть над чем задуматься: активно развивающиеся страны третьего мира ассоциативно распределены по отраслям. Но элементы политического процесса освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, своевременно верифицированы.",
        members: [{
            firstName: "Михаил",
            lastName: "Соколов",
            color: "#4376A5"
        }, {
            firstName: "Иван",
            lastName: "Красиков",
            color: "#43A54C"
        }, {
            firstName: "Александр",
            lastName: "Зеленин",
            color: "#A3A543"
        }, {
            firstName: "Кристина",
            lastName: "Смирнова",
            color: "#A57243"
        }],
        completed: true,
    }, {
        id: "1",
        title: "Второй проект",
        description: "Приятно, граждане, наблюдать, как некоторые особенности внутренней политики лишь добавляют фракционных разногласий и разоблачены. Сделанные на базе интернет-аналитики выводы заблокированы в рамках своих собственных рациональных ограничений.",
        members: [{
            firstName: "Иван",
            lastName: "Красиков",
            color: "#43A54C"
        }, {
            firstName: "Фёдор",
            lastName: "Чернышев",
            color: "#A54343"
        }],
        completed: false,
    }, {
        id: "2",
        title: "Третий проект",
        description: "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: убеждённость некоторых оппонентов требует от нас анализа приоритизации разума над эмоциями. И нет сомнений, что многие известные личности формируют глобальную экономическую сеть и при этом - превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. С учётом сложившейся международной обстановки, перспективное планирование говорит о возможностях направлений прогрессивного развития.",
        members: [{
            firstName: "Иван",
            lastName: "Красиков",
            color: "#43A54C"
        }, {
            firstName: "Александра",
            lastName: "Фокина",
            color: "#A54383"
        }, {
            firstName: "Никита",
            lastName: "Петров",
            color: "#7A43A5"
        }, {
            firstName: "Оливия",
            lastName: "Егорова",
            color: "#A57243"
        }, {
            firstName: "Дмитрий",
            lastName: "Кузнецов",
            color: "#4352A5"
        }, {
            firstName: "Иван",
            lastName: "Балашов",
            color: "#A57243"
        }, {
            firstName: "Эмилия",
            lastName: "Коновалова",
            color: "#A54343"
        }, {
            firstName: "Ирина",
            lastName: "Князева",
            color: "#4352A5"
        }, {
            firstName: "Мария",
            lastName: "Фролова",
            color: "#43A54C"
        }, {
            firstName: "Семён",
            lastName: "Тихонов",
            color: "#43A59F"
        }],
        completed: false,
    }, {
        id: "3",
        title: "Четвертый проект",
        description: "Не следует, однако, забывать, что базовый вектор развития выявляет срочную потребность дальнейших направлений развития. Повседневная практика показывает, что глубокий уровень погружения в значительной степени обусловливает важность системы массового участия!",
        members: [{
            firstName: "Иван",
            lastName: "Красиков",
            color: "#43A54C"
        }, {
            firstName: "Кирилл",
            lastName: "Максимов",
            color: "#4352A5"
        }],
        completed: true,
    }, {
        id: "4",
        title: "Пятый проект",
        description: "Также как существующая теория позволяет выполнить важные задания по разработке существующих финансовых и административных условий. Есть над чем задуматься: активно развивающиеся страны третьего мира ассоциативно распределены по отраслям. Но элементы политического процесса освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, своевременно верифицированы.",
        members: [{
            firstName: "Анна",
            lastName: "Ковалева",
            color: "#A54383"
        }, {
            firstName: "Иван",
            lastName: "Красиков",
            color: "#43A54C"
        }],
        completed: true,
    }, {
        id: "5",
        title: "Projenager",
        description: "Создание веб-приложения для управления процессом разработки ИТ-проектов",
        members: [{
            firstName: "Иван",
            lastName: "Красиков",
            color: "#A54383"
        }, {
            firstName: "Эльдар",
            lastName: "Габдеев",
            color: "#43A54C",
        }, {
            firstName: "Ольга",
            lastName: "Михайловна",
            color: "#A54343",
        }],
        completed: false,
    }
];

class PersonalProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: projectsList,
            isProjectModalOpen: false,
            modalProjectID: null,
            tileView: true,
        };
    }

    changeView() {
        this.setState({
            tileView: !this.state.tileView
        })
    }

    /*componentDidMount(){
        let response = fetch("https://localhost:44317/users/GetProjects", {
            method: "GET",
            headers:  {
                Authorization: "Bearer " + cookies.get("access_token")["access_token"]
              }
        }).then(response => {
            
            response.json().then(json => {
                let projectsList = json.map((object) => {
                    return object.project;
                });
                
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
    }*/

    getProjectData(id) {
        if (this.state.projects)
            return this.state.projects.find(project => project.id === id);
    }

    openModal(projectId) {
        this.setState({isProjectModalOpen: true, modalProjectID: projectId})
    }

    closeModal() {
        this.setState({isProjectModalOpen: false})
    }

    getProjectsList() {
        if (this.state.projects) {
            return this.state.projects.map((project, index) => {
                return (
                    <ExpandingElement id={project.id} title={project.title} index={index}>
                        <ListLine onClick={() => this.openModal(project.id)}>
                            <Description description={project.description}/>
                            <Participants
                                participants={project.members}/>
                            <ProjectStatusLine isComplete={project.completed}/>
                        </ListLine>
                    </ExpandingElement>
                )
            })
        }
    }

    render() {
        return (
            <AppPage>
                <AppHeader>
                    <AppHeaderSideArea>
                        <AppHeaderTitle title="Личные проекты"/>
                        <HeaderButton onClick={() => this.openModal(null)} text="Новый проект" icon={new_project}/>
                        <HeaderButton onClick={() => this.changeView()}
                                      text={this.state.tileView ? "Плитка" : "Список"}
                                      icon={this.state.tileView ? tile_view : list_view}/>

                    </AppHeaderSideArea>
                    <AppHeaderSideArea>
                        <HeaderButton text="Меню" icon={menu}/>
                    </AppHeaderSideArea>
                </AppHeader>
                <Board update={this.props.update}>
                    {this.state.tileView ? (
                    <div className="project-cards">
                        {this.state.projects.map((project, index) => {
                            return (
                                <ProjectCard onClick={() => this.openModal(project.id)} project={project}/>
                            )
                        })}
                    </div> ) : (
                        <ElementsList>
                            {this.getProjectsList()}
                        </ElementsList>
                        )}
                </Board>
                <ProjectModal project={this.getProjectData(this.state.modalProjectID)}
                              isOpen={this.state.isProjectModalOpen} onClose={() => this.closeModal()}/>
            </AppPage>
        );
    }
}


export default PersonalProjects;


/*render() {
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
                    <ProjectCard/>
                    <ElementsList>
                        {this.getProjectsList()}
                    </ElementsList>
                </Board>
                <ProjectModal project={this.getProjectData(this.state.modalProjectID)} isOpen={this.state.isProjectModalOpen} onClose={() => this.closeModal()}/>
            </AppPage>
        );
    }*/