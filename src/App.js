//import './App.css';
import React from "react";
import Authorization from "./components/Authorization";
import Registration from "./components/Registration";
import LoginHeader from "./components/LoginHeader";
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Redirect from "react-router-dom/es/Redirect";



function App() {
    return (
        <div className="body">
            <Sidebar/>
        </div>
    );
}

export default App;
