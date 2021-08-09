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
import Description from "../ExpandingElement/Description";
import Participants from "../CommonElements/Participants";
import ProjectStatus from "../ProjectStatus";
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
                title: "Первая задача",
                description: "Описание задачи",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }, {
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
                endDate: "09.04.2021",
            },{
                id: "00000000-0000-0000-0000-000000000002",
                title: "Вторая задача",
                description: "Описание задачи",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
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
                },],
                endDate: "26.05.2021",
            },{
                id: "00000000-0000-0000-0000-000000000003",
                title: "Третья задача",
                description: "Описание задачи",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }, {
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
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
                }],
                endDate: "17.04.2021",
            }
        ],
    }, {
        id: "1",
        title: "Второй проект",
        tasks: [
            {
                id: "00000000-0000-0000-0001-000000000001",
                title: "Придумать название приложения",
                description: "Нужно придумать временное название для отображения в интерфейсе",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
                endDate: "02.05.2021",
            }]
    }, {
        id: "2",
        title: "Третий проект",
        tasks: [
            {
                id: "00000000-0000-0000-0002-000000000001",
                title: "Новая задача",
                description: "Описание",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }, {
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
                endDate: "18.04.2021",
            }]
    }, {
        id: "3",
        title: "Четвертый проект",
        tasks: [
            {
                id: "00000000-0000-0000-0003-000000000001",
                title: "Сделать дело",
                description: "После того как сделаем дело мы сможем гулять смело",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
                endDate: "09.04.2021",
            }
        ]
    }, {
        id: "5",
        title: "Projenager",
        tasks: [
            {
                id: "00000000-0000-0000-0000-000000000000",
                title: 'В рамках курсового проекта сделать телеграм-бота для напоминания о текущих задачах и создания новых',
                endDate: null,
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }, {
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
            },{
                id: "00000000-0000-0000-0000-000000000018",
                title: 'Внедрить авторизацию через систему GitHub',
                endDate: "25 мая",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
            }, {
                id: "00000000-0000-0000-0000-000000000002",
                title: 'Провести обзор аналогов, выявить основные характеристики, добавить таблицу сравнения функционала',
                endDate: "22 марта",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }, {
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
            },{
                id: "00000000-0000-0000-0000-000000000003",
                title: 'Исправить баг с прячущейся кнопкой "Добавить колонки"',
                endDate: "10 мая",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
            },{
                id: "00000000-0000-0000-0000-000000000009",
                title: 'Изучить применение SignalR на клиенте JavaScript',
                endDate: null,
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                },],
            },{
                id: "00000000-0000-0000-0000-000000000004",
                title: 'Сверстать страницу авторизации/регистрации',
                endDate: "18 апреля",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
            },            {
                id: "00000000-0000-0000-0000-000000000006",
                title: 'Сверстать основные страницы приложения',
                endDate: "5 мая",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
            },{
                id: "00000000-0000-0000-0000-000000000005",
                title: 'Сверстать раскрывающееся меню (сайдбар)',
                endDate: "29 апреля",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
            },
        ]
    }
];

const tasksList = [
    {
        id: "0",
        title: "Нужно сделать",
        tasks: [
            {
                id: "00000000-0000-0000-0000-0000000000010",
                title: 'Generic Repository',
                endTime: null,
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
            }, {
                id: "00000000-0000-0000-0000-000000000000",
                title: 'В рамках курсового проекта сделать телеграм-бота для напоминания о текущих задачах и создания новых',
                endTime: null,
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }, {
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
            }, {
                id: "00000000-0000-0000-0000-0000000000011",
                title: 'Написать контроллеры',
                endTime: "18 мая",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
            },]
    },
    {
        id: "3",
        title: "Идеи",
        tasks: [
            {
                id: "00000000-0000-0000-0000-000000000009",
                title: 'Изучить применение SignalR на клиенте JavaScript',
                endTime: null,
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                },],
            },  {
                id: "00000000-0000-0000-0000-0000000000014",
                title: 'Настроить Dependency Injection',
                endTime: "11 мая",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
            },



        ]
    },
    {
        id: "1",
        title: "В процессе",
        tasks: [
            {
                id: "00000000-0000-0000-0000-000000000018",
                title: 'Внедрить авторизацию через систему GitHub',
                endTime: "25 мая",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
            }, {
                id: "00000000-0000-0000-0000-000000000008",
                title: 'Настроить авторизацию (JWT-токены)',
                endTime: null,
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
            }, {
                id: "00000000-0000-0000-0000-000000000013",
                title: 'DbContext и конфигурации сущностей',
                endTime: "19 апреля",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
            },
        ]
    },{
        id: "2",
        title: "Сделано",
        tasks: [
            {
                id: "00000000-0000-0000-0000-000000000002",
                title: 'Провести обзор аналогов, выявить основные характеристики, добавить таблицу сравнения функционала',
                endTime: "22 марта",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }, {
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
            },
            {
                id: "00000000-0000-0000-0000-000000000003",
                title: 'Исправить баг с прячущейся кнопкой "Добавить колонки"',
                endTime: "10 мая",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
            },
            {
                id: "00000000-0000-0000-0000-000000000004",
                title: 'Сверстать страницу авторизации/регистрации',
                endTime: "18 апреля",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
            },
            {
                id: "00000000-0000-0000-0000-000000000006",
                title: 'Сверстать основные страницы приложения',
                endTime: "5 мая",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
            },
            {
                id: "00000000-0000-0000-0000-000000000005",
                title: 'Сверстать раскрывающееся меню (сайдбар)',
                endTime: "29 апреля",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Иван",
                    lastName: "Красиков",
                    color: "#A54383",
                }],
            }, {
                id: "00000000-0000-0000-0000-000000000007",
                title: 'Спроектировать предметную область приложения',
                endTime: "29 апреля",
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
            }, {
                id: "00000000-0000-0000-0000-0000000000012",
                title: 'Создать сервисы приложения (бизнес логика)',
                endTime: null,
                description: null,
                createdAt: "0001-01-01T00:00:00",
                performers: [{
                    firstName: "Эльдар",
                    lastName: "Габдеев",
                    color: "#43A54C",
                }],
            },



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
