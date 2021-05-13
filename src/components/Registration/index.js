import React from "react";
import './style.css'

class Registration extends React.Component {

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
            <div className="auth-reg">
                <div className="auth-reg-wrapper">
                    <h1 className="section-title login-head">Регистрация</h1>
                    <form className="auth-reg-form">
                        <div className="name-inputs">
                            <div className="auth-reg-input-wrapper">
                                <input className="auth-reg-item auth-reg-input name-input first-name-input"
                                       type="text"
                                       placeholder="Имя"
                                       name="first-name"
                                />
                            </div>
                            <div className="auth-reg-input-wrapper">
                                <input className="auth-reg-item auth-reg-input name-input last-name-input"
                                       type="text"
                                       placeholder="Фамилия"
                                       name="last-name"
                                />
                            </div>
                        </div>
                        <div className="auth-reg-input-wrapper login-wrapper">
                            <input className="auth-reg-item auth-reg-input login-input"
                                   type="text"
                                   placeholder="Логин"
                                   name="login"
                            />
                        </div>
                        <div className="auth-reg-input-wrapper password-wrapper">
                            <img src={"icons/locks.svg"} alt=""/>
                            <input className="auth-reg-item auth-reg-input password-input"
                                   type={isPasswordShow ? "text" : "password"}
                                   size="5"
                                   placeholder="Пароль"
                                   name="pass"
                            />
                            <div
                                className={`${isPasswordShow ? "visible-password" : "hidden-password"} password-control`}
                                onClick={this.togglePasswordVisibility}
                            />
                        </div>
                        <button className="button auth-reg-item identification-button login-button"
                                type="submit">
                            Войти
                        </button>
                    </form>
                </div>
                <a className="auth-reg-link" href="#">Уже зарегестрированы? Авторизуйтесь!</a>
            </div>

        );
    }
}


export default Registration;
