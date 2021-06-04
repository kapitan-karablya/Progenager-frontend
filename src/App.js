//import './App.css';
import React from "react";
import LoginHeader from "./components/LoginHeader";
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router-dom";
import PersonalProjects from "./components/PagePersonalProjects";
import CurrentProject from "./components/PageCurrentProject";
import PersonalTasks from "./components/PagePersonalTasks";
import Teams from "./components/PageTeams"
import AuthRegPage from "./components/AuthRegPage";

/*function App() {
    return (
        <div className="body body-auth">
            <AuthRegPage/>
        </div>
    );
}*/

function App() {
    return (
        <div className="body">
            <BrowserRouter>
                <Sidebar/>
                <Switch>
                    <Redirect exact from="/" to="/projects"/>
                    <Route exact path='/projects' component={PersonalProjects}/>
                    <Route path='/project' component={CurrentProject}/>
                    <Route path='/tasks' component={PersonalTasks}/>
                    <Route path='/teams' component={Teams}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
