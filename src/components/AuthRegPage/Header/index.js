import React from "react";
import './style.css'
import AuthRegHeaderButton from "./Button.js";
import AuthRegPageLink from "../Link";

class AuthRegHeader extends React.Component {
    render() {
        return (
            <div className="auth-reg-header">
                <span className="auth-reg-header-title">PROJENAGER.IO</span>
                <AuthRegHeaderButton text={this.props.isUserRegistered ? "Регистрация" : "Вход"}
                                     onClick={this.props.onClick}
                />
            </div>
        );
    }
}

export default AuthRegHeader;
