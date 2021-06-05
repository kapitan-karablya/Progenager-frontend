import React from "react";

import './style.css'
import InputLogin from "./Input/Login.js";
import InputPassword from "./Input/Password.js";
import Button from "./Button";
import AuthRegForm from "./Form";
import SplitLine from "./SplitLine";
import Item from "./Item";
import InputName from "./Input/Name";


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            password: null,
            firstName: null,
            lastName: null
        };
    }

    changeStateValue(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handelSubmit(event) {
        let response = fetch("https://192.168.1.175:44317/Users/register?login=" + this.state.login + "&password="+this.state.password, {
            method: "PUT"
        }).then(response => console.log(response));
        console.log(response);
        event.preventDefault();
    }

    render() {
        return (
            <div className="registration">
                <Item>
                    <h1 className="section-title">Регистрация</h1>
                </Item>
                <AuthRegForm onSubmit={(e) => this.handelSubmit(e)}>
                    <Item>
                        <InputName firstName={this.state.firstName} lastName={this.state.lastName} onBlur={(e) => this.changeStateValue(e)}/>
                    </Item>
                    <Item>
                        <InputLogin login={this.state.login} onBlur={(e) => this.changeStateValue(e)}/>
                    </Item>
                    <Item>
                        <InputPassword password={this.state.password} onBlur={(e) => this.changeStateValue(e)}/>
                    </Item>
                    <Item>
                        <Button type="submit" text="Войти"/>
                    </Item>
                </AuthRegForm>
            </div>
        );
    }
}

export default Registration;
