import React from "react";
import '../style.css'
import Input from "./";


class InputPassword extends React.Component {

    state = {
        isPasswordShow: false
    };

    togglePasswordVisibility = () => {
        const {isPasswordShow} = this.state;
        this.setState({isPasswordShow: !isPasswordShow});
    };

    render() {
        const {isPasswordShow} = this.state;
        return (
            <div className="auth-reg-input-wrapper password-wrapper">
                <Input type={isPasswordShow ? "text" : "password"}
                       placeholder="Пароль"
                       name="Password"/>
                <div className={`${isPasswordShow ? "visible-password" : "hidden-password"} password-control`}
                     onClick={this.togglePasswordVisibility}
                />
            </div>


        );
    }
}

export default InputPassword;