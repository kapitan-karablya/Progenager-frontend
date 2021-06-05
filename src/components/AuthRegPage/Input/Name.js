import React from "react";
import './style.css'
import Input from "./";


class InputName extends React.Component {
    render() {
        return (
            <div className="auth-reg-input-name">
                <div className="auth-reg-input-wrapper first-name-input-wrapper">
                    <Input className="first-name-input"
                           type="text"
                           placeholder="Имя"
                           name="first-name"
                           value={this.props.firstName}
                           onChange={this.props.onChange}
                    />
                </div>
                <div className="auth-reg-input-wrapper last-name-input-wrapper">
                    <Input className="last-name-input"
                           type="text"
                           placeholder="Фамилия"
                           name="last-name"
                           value={this.props.lastName}
                           onChange={this.props.onChange}
                    />
                </div>
            </div>
        );
    }
}


export default InputName;