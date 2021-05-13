//import './App.css';
import React from "react";
import Authorization from "./components/Authorization";
import Registration from "./components/Registration";
import LoginHeader from "./components/LoginHeader";


function App() {
    return (
        <div className="body">
            <LoginHeader/>
            <Registration/>
        </div>
    );
}

export default App;
