import React from "react";

import './style.css'
import AppHeader from "../../components/AppHeader";
import AppHeaderSideArea from "../../components/AppHeader/SideArea.js";
import AppHeaderTitle from "../../components/AppHeader/Title.js";
import HeaderButton from "../../components/HeaderButton";
import Board from "../../components/Board";
import AppPage from "../AppPage";

import invite from '../../icons/add_users.svg';
import privacy from '../../icons/project_lock.svg';
import discussions from '../../icons/discussions.svg';
import menu from '../../icons/menu.svg';

class CurrentProject extends React.Component {

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
                <Board>

                </Board>
            </AppPage>
        );
    }
}

export default CurrentProject;
