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

    render() {
        return (
            <div className="registration">
                <Item>
                    <h1 className="section-title">Регистрация</h1>
                </Item>
                <AuthRegForm>
                    <Item>
                        <InputName/>
                    </Item>
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
            </div>
        );
    }
}

export default Registration;
