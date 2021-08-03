import React from "react";
import './style.css'
import Authorization from "./Authorization.js";
import Registration from "./Registration.js";
import AuthRegHeader from "./Header";
import AuthRegPageLink from "./Link"
import Cookies from 'universal-cookie';
import Loading from "./Loading";
import xhr from "xhr";

const cookies = new Cookies();

const CLIENT_ID = "4e343cf0194406a5b63c";
const REDIRECT_URI = "http://localhost:3000/callback";
const CLIENT_SECRET = "c10f91d9f61a2269f3754bdbe7c46e6d77adfed3";

class AuthRegPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserRegistered: true,
            isLoad: false
        };
    }

    StartLoad() {
        this.setState({isLoad: true});
    }
    EndLoad() {
        this.setState({isLoad: false});
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
            });
        }
    }

    toggleUserStatus = () => {
        const {isUserRegistered} = this.state;
        this.setState({isUserRegistered: !isUserRegistered});
    };

    render() {
        const {isUserRegistered} = this.state;
        return (
            <div className="auth-reg-page">
                <AuthRegHeader isUserRegistered={isUserRegistered} onClick={this.toggleUserStatus}/>
                {isUserRegistered
                    ? <Authorization update={this.props.update} cookies={this.props.cookies} client_id={CLIENT_ID} redirect_url={REDIRECT_URI}/>
                    : <Registration  client_id={CLIENT_ID} redirect_url={REDIRECT_URI}/>}
                <AuthRegPageLink onClick={this.toggleUserStatus}
                                 text={isUserRegistered
                                     ? "Ещё нет аккаунта? Зарегестрируйтесь!"
                                     : "Уже зарегестрированы? Авторизуйтесь!"}/>
                <Loading isLoading={this.state.isLoad}/>
            </div>
        );
    }
}

export default AuthRegPage;
