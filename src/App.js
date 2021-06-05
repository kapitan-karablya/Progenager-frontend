//import './App.css';
import React from "react";
import LoginHeader from "./components/LoginHeader";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PersonalProjects from "./components/PagePersonalProjects";
import CurrentProject from "./components/PageCurrentProject";
import PersonalTasks from "./components/PagePersonalTasks";
import Teams from "./components/PageTeams";
import AuthRegPage from "./components/AuthRegPage";
import cookies from "./helpers/Coocies"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserAuthorizd: false,
        };
    }

    hangeState(){
        this.setState({isUserAuthorizd: !!cookies.get("access_token")})
    }


    render() {
        return cookies.get("access_token") ? (
          <div className="body">
            <BrowserRouter>
              <Sidebar />
              <Switch>
                <Redirect exact from="/" to="/projects" />
                <Route exact path="/projects" component={PersonalProjects} />
                <Route path="/project" component={CurrentProject} />
                <Route path="/tasks" component={PersonalTasks} />
                <Route path="/teams" component={Teams} />
              </Switch>
            </BrowserRouter>
          </div>
        ) : (
          <div className="body body-auth">
            <AuthRegPage update={() => this.hangeState()} cookies={cookies} />
          </div>
        );
    }
  }

/*function App() {
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
}*/

export default App;
