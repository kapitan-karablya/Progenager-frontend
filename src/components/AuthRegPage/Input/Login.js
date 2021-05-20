import React from "react";
import '../style.css'
import Input from "./";


class InputLogin extends React.Component {
    render() {
        return (
            <div className="auth-reg-input-wrapper login-wrapper">
                <Input type="text"
                       placeholder="Логин"
                       name="Login"/>
            </div>
        );
    }
}


export default InputLogin;