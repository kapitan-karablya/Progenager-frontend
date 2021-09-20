import React from "react";
import xhr from "xhr"
import './style.css'
import InputLogin from "./Input/Login.js";
import InputPassword from "./Input/Password.js";
import Button from "./Button";
import AuthRegForm from "./Form";
import SplitLine from "./SplitLine";
import Item from "./Item";
import GitHubLoginButton from "./GitHubLoginButton";


class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            password: null,
        };
    }

    changeStateValue(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handelAuth(event) {
        fetch("https://localhost:44317/Users/Authenticate?login="
            + this.state.login + "&password=" + this.state.password, {
            method: "GET",
        }).then(response => {
            response.ok ?
            response.json().then(json => {
                this.props.cookies.set('access_token', json);
                this.props.update();
            }) : console.log("error")
        });
        event.preventDefault();
    }

    render() {

        return (
            <div className="authorization">
                <Item>
                    <h1 className="section-title">Авторизация</h1>
                </Item>
                <AuthRegForm onSubmit={(e) => this.handelAuth(e)}>
                    <Item>
                        <InputLogin login={this.state.login} onChange={(e) => this.changeStateValue(e)}/>
                    </Item>
                    <Item>
                        <InputPassword password={this.state.password} onChange={(e) => this.changeStateValue(e)}/>
                    </Item>
                    <Item>
                        <Button type="submit" text="Войти"/>
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

export default Authorization;
