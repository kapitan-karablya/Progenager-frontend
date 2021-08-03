//import './App.css';
import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PersonalProjects from "./components/PagePersonalProjects";
import CurrentProject from "./components/PageCurrentProject";
import PersonalTasks from "./components/PagePersonalTasks";
import Teams from "./components/PageTeams";
import AuthRegPage from "./components/AuthRegPage";
import cookies from "./helpers/Coocies";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserAuthorized: false,
        };
    }



    changeState(){
        this.setState({isUserAuthorized: cookies.get("access_token")})
    }

    render() {

        return cookies.get("access_token") ? (

          <div className="body">
            <BrowserRouter>
              <Sidebar />
              <Switch>
                <Redirect exact from="/" to="/projects" />
                  <Redirect exact from="/callback" to="/projects" />
                  <Route exact path="/projects" component={PersonalProjects} />
                <Route path="/project" component={CurrentProject} />
                <Route path="/tasks" component={PersonalTasks} />
                <Route path="/teams" component={Teams} />
              </Switch>
            </BrowserRouter>
          </div>
        ) : (
          <div className="body body-auth">
            <AuthRegPage update={() => this.changeState()} cookies={cookies} />
          </div>
        );
    }
  }

export default App;


/*class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserAuthorized: false,
        };
    }

    render() {
    const {pathname} = this.location;
        console.log(pathname);
        return (
        <div className="body">
            <BrowserRouter>
                <Sidebar/>
                <Switch>
                    <Redirect exact from="/" to="/projects"/>
                    <Route exact path="/projects" component={PersonalProjects}/>
                    <Route path="/project" component={CurrentProject}/>
                    <Route path="/tasks" component={PersonalTasks}/>
                    <Route path="/teams" component={Teams}/>
                </Switch>
            </BrowserRouter>
        </div>
        ): (
            <div className="body body-auth">
                <BrowserRouter>
                    <Redirect exact from="/callback" to="/auth"/>

                    <Route path="/auth" render={(props) => <AuthRegPage update={() => this.changeState()}
                                                                        cookies={cookies} {...props} />}/>
                </BrowserRouter>
            </div>
        );
    }

}

export default App;*/