import React from "react";

import './style.css'
import InputLogin from "./Input/Login.js";
import InputPassword from "./Input/Password.js";
import Button from "./Button";
import AuthRegForm from "./Form";
import SplitLine from "./SplitLine";
import Item from "./Item";


class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            password: null,
            firstName: null,
            lastName: null
        };
    }

    render() {
        return (
            <div className="authorization">
                <Item>
                    <h1 className="section-title">Авторизация</h1>
                </Item>
                <AuthRegForm>
                    <Item>
                        <InputLogin/>
                    </Item>
                    <Item>
                        <InputPassword/>
                    </Item>
                    <Item>
                        <Button type="submit" text="Войти"/>
                    </Item>
                </AuthRegForm>
                <Item>
                    <SplitLine/>
                </Item>
                <Item>
                    <Button className="github-login-button" text="Войти через GitHub"/>
                </Item>
            </div>
        );
    }
}

export default Authorization;
