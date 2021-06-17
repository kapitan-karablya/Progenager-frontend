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
import ExpandingElement from "../ExpandingElement";
import ListLine from "../ExpandingElement/ListLine";
import Text from "../ExpandingElement/Text";
import Description from "../ExpandingElement/Description";
import Participants from "../Participants";
import ElementsList from "../ElementsList";
import ProjectStatus from "../ProjectStatus";
import Modal from "../Modal";
import ProjectModal from "../Modal/Project";


const projectsList = [
    {
        id: "0",
        title: "Первый проект",
        description: "Также как существующая теория позволяет выполнить важные задания по разработке существующих финансовых и административных условий. Есть над чем задуматься: активно развивающиеся страны третьего мира ассоциативно распределены по отраслям. Но элементы политического процесса освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, своевременно верифицированы.",
        participants: ["Красиков Иван", "Габдеев Эльдар"],
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
    }
];

const teamsList = [
    {
        id: "285783",
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
        projects: [
            {
                id: "1",
                title: "Первый проекет",
                description: "Описание проекта",
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
                completed: true,
            }, {
                id: "2",
                title: "Второй проект",
                description: "Описание проекта",
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
                title: "Третий проект",
                description: "Описание проекта",
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
            }
        ],
    }, {
        id: "687915",
        members: [{
            firstName: "Анна",
            lastName: "Ковалева",
            color: "#A54383"
        }, {
            firstName: "Иван",
            lastName: "Красиков",
            color: "#43A54C"
        }],
        projects: [
            {
                id: "5",
                title: "Третий проект",
                description: "Описание проекта",
                members: [{
                    firstName: "Анна",
                    lastName: "Ковалева",
                    color: "#A54383"
                }, {
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#43A54C"
                }],
                completed: false,
            }
        ],
    }, {
        id: "782884",
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
        projects: [
            {
                id: "4",
                title: "Первый проекет",
                description: "Описание проекта",
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
            }
        ],
    }];


class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: teamsList,
            isProjectModalOpen: false,
            modalProjectID: null,
            modalTeamId: null
        };
    }

    getProjectData(teamId, projectId) {
        const team = this.state.teams.find(team => team.id === teamId);
        return team === undefined ? undefined : team.projects.find(project => project.id === projectId)
    }

    openModal(teamId, projectId) {
        this.setState({isProjectModalOpen: true, modalProjectID: projectId, modalTeamId: teamId})
    }

    closeModal() {
        this.setState({isProjectModalOpen: false})
    }

    render() {
        return (
            <AppPage>
                <AppHeader>
                    <AppHeaderSideArea>
                        <AppHeaderTitle title="Команды"/>
                    </AppHeaderSideArea>
                    <AppHeaderSideArea>
                        <HeaderButton text="Меню" icon={menu}/>
                    </AppHeaderSideArea>
                </AppHeader>
                <Board>
                    <ElementsList>
                        {this.state.teams.map((team) => {
                            return (
                                <ExpandingElement id={team.id} title={"Команда #" + team.id}>
                                    <div className="members-wrapper">
                                        <span className="members-title">Участники</span>
                                        <Participants participants={team.members}/>
                                    </div>

                                    <p>Проекты</p>
                                    <div className="projects-wrapper">
                                        {team.projects.map((project) => {
                                            return (
                                                <ListLine onClick={() => this.openModal(team.id, project.id)}>
                                                    <Text title={project.title}/>
                                                    <Description description={project.description}/>
                                                    <ProjectStatus isComplete={project.completed}/>
                                                </ListLine>
                                            )
                                        })}
                                    </div>
                                </ExpandingElement>
                            )
                        })}
                    </ElementsList>
                </Board>
                <ProjectModal project={this.getProjectData(this.state.modalTeamId, this.state.modalProjectID)}
                              isOpen={this.state.isProjectModalOpen} onClose={() => this.closeModal()}/>
            </AppPage>
        );
    }
}


export default Teams;
