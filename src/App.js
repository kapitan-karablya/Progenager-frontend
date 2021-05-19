//import './App.css';
import React from "react";
import Authorization from "./components/Authorization";
import Registration from "./components/Registration";
import LoginHeader from "./components/LoginHeader";
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Redirect from "react-router-dom/es/Redirect";
import PersonalProjects from "./components/PersonalProjects";
import CurrentProject from "./components/CurrentProject";
import PersonalTasks from "./components/PersonalTasks";
import Teams from "./components/Teams"

/*function App() {
    return (
        <div className="body body-auth">
            <LoginHeader/>
            <Registration/>

        </div>
    );
}
*/
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
