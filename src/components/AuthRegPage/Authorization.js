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
import loading2 from "../../icons/loading3.gif"


const CLIENT_ID = "4e343cf0194406a5b63c";
const REDIRECT_URI = "http://localhost:3000/callback";
const CLIENT_SECRET = "c10f91d9f61a2269f3754bdbe7c46e6d77adfed3";

class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            password: null,
            client_id: "000",
            redirect_uri: "jjj",
            load: true,
        };
    }

    StartLoad() {
        this.setState({load: true});
    }

    componentDidMount() {
        const code =
            window.location.href.match(/\?code=(.*)/) &&
            window.location.href.match(/\?code=(.*)/)[1];
        if (code) {
            console.log(code);
            this.StartLoad();
            /*const url = `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`;*/
            xhr({
                url: "https://local-dddd.herokuapp.com/authenticate/" + code,
                json: true,
            }, (err, resp, body) => {
                if (body.error) {
                    alert("Ошибка авторизации")
                } else if (body.token) {
                    this.props.cookies.set('access_token', body.token);
                    this.props.update();
                }
            })
        }
    }


    changeStateValue(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handelAuth(event) {
        fetch("https://localhost:44317/Users/Authenticate?login="
            + this.state.login + "&password=" + this.state.password, {
            method: "GET",
        }).then(response => {
            response.json().then(json => {
                this.props.cookies.set('access_token', json);
                this.props.update();
            })
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
                    <GitHubLoginButton client_id={CLIENT_ID} redirect_url={REDIRECT_URI} text="Войти через GitHub"/>
                </Item>
                <div className={this.state.load ? "load-wrapper" : "load-hide"}>
                    <div className="load"/>
                    <img className="loading-icon" src={loading2} alt="загрузка"/>
                </div>
            </div>
        );
    }
}

export default Authorization;
