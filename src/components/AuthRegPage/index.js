import React from "react";
import './style.css'

import Authorization from "./Authorization.js";
import Registration from "./Registration.js";
import AuthRegHeader from "./Header";
import AuthRegPageLink from "./Link"

class AuthRegPage extends React.Component {

    state = {
        isUserRegistered: true
    };

    toggleUserStatus = () => {
        const {isUserRegistered} = this.state;
        this.setState({isUserRegistered: !isUserRegistered});
    };

    render() {
        const { isUserRegistered } = this.state;
        return (
            <div className="auth-reg-page">
                <AuthRegHeader isUserRegistered={isUserRegistered}  onClick={this.toggleUserStatus} />
                {isUserRegistered ? <Authorization/> : <Registration/>}
                <AuthRegPageLink onClick={this.toggleUserStatus}
                                 text= {isUserRegistered
                                     ? "Ещё нет аккаунта? Зарегестрируйтесь!"
                                     : "Уже зарегестрированы? Авторизуйтесь!"}/>
            </div>
        );
    }
}


export default AuthRegPage;
