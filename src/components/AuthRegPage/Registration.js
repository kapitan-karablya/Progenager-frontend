import React from "react";

import './style.css'
import InputLogin from "./Input/Login.js";
import InputPassword from "./Input/Password.js";
import Button from "./Button";
import AuthRegForm from "./Form";
import SplitLine from "./SplitLine";
import Item from "./Item";
import InputName from "./Input/Name";
import GitHubLoginButton from "./GitHubLoginButton";


const CLIENT_ID = "4e343cf0194406a5b63c";
const REDIRECT_URI = "http://localhost:3000/callback";
const CLIENT_SECRET = "c10f91d9f61a2269f3754bdbe7c46e6d77adfed3";

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
        this.setState({[event.target.name]: event.target.value})
    }

    handelSubmit(event) {
        let response = fetch("https://localhost:44317/Users/register?login="
            + this.state.login + "&password=" + this.state.password
            + "&firstName=" + this.state.firstName + "&lastName="  + this.state.lastName, {
            method: "PUT",
        }).then(response => {
            if (!response.ok)
                return console.log("error");
            response.json().then(json => {
                this.props.cookies.set('access_token', json);
                this.props.update();
            });
            console.log(response);
            fetch("https://localhost:44317/Users/Authenticate?login="
                + this.state.login + "&password=" + this.state.password, {
                method: "GET",
            }).then(response => {
                response.ok ?
                    response.json().then(json => {
                        this.props.cookies.set('access_token', json);
                        this.props.update();
                    }) : console.log("error");
            });
            console.log(response);
        });


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
                        <InputName firstName={this.state.firstName} lastName={this.state.lastName}
                                   onChange={(e) => this.changeStateValue(e)}/>
                    </Item>
                    <Item>
                        <InputLogin login={this.state.login} onChange={(e) => this.changeStateValue(e)}/>
                    </Item>
                    <Item>
                        <InputPassword password={this.state.password} onChange={(e) => this.changeStateValue(e)}/>
                    </Item>
                    <Item>
                        <Button type="submit" text="Зарегестрироваться"/>
                    </Item>
                </AuthRegForm>
                <Item>
                    <SplitLine/>
                </Item>
                <Item>
                    <GitHubLoginButton client_id={this.props.client_id} redirect_url={this.props.redirect_url}
                                       text="Войти через GitHub"/>
                </Item>
            </div>
        );
    }
}

export default Registration;
