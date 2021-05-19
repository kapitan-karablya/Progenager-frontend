import React from "react";

import './style.css';
import SidebarItem from './Item.js'
import {BrowserRouter, NavLink} from "react-router-dom";
import projects from '../../icons/projects.svg'
import current_project from '../../icons/current_project.svg'
import tasks from '../../icons/tasks.svg'
import teams from '../../icons/teams.svg'
import logo from '../../icons/logo.svg'


const sidebarItemsOptions = [
    {text: 'Проекты', image: projects, href: '/projects'},
    {text: 'Текущий проект', image: current_project, href: '/project'},
    {text: 'Задачи', image: tasks, href: '/tasks'},
    {text: 'Команды', image: teams, href: '/teams'},
];

class Sidebar extends React.Component {
    render() {
        const sidebarItems = sidebarItemsOptions.map(item => <SidebarItem item={item}
            /*createClickHandler={createClickHandler}*//>);
        return (
                <div className='sidebar'>
                    <div className='sidebar-item sidebar-logo'>
                        <div className='sidebar-logo-image'><img src={logo} alt="logo"/></div>
                        <div className='sidebar-item-text sidebar-logo-text'>rogenager.io</div>
                    </div>
                    {sidebarItems}
                </div>
        )
    }
}

export default Sidebar