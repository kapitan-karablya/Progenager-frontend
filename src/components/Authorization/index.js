import React from "react";
import './style.css'

class Authorization extends React.Component {

    state = {
        isPasswordShow : false
    };

    togglePasswordVisibility = () => {
        const { isPasswordShow } = this.state;
        this.setState({ isPasswordShow: !isPasswordShow });
    };

    render() {
        const { isPasswordShow } = this.state;
        return (
            <div className="auth-reg">
                <div className="auth-reg-wrapper">
                    <h1 className="section-title login-head">Авторизация</h1>
                    <form className="auth-reg-form">
                        <div className="auth-reg-input-wrapper login-wrapper">
                            <input className="auth-reg-item auth-reg-input login-input"
                                   type="text"
                                   placeholder="Логин"
                                   name="login"
                            />
                        </div>
                        <div className="auth-reg-input-wrapper password-wrapper">
                            <input className="auth-reg-item auth-reg-input password-input"
                                   type={isPasswordShow ? "text" : "password"}
                                   size="5"
                                   placeholder="Пароль"
                                   name="pass"
                            />
                            <div className={`${isPasswordShow ? "visible-password" : "hidden-password"} password-control`}
                                 onClick={this.togglePasswordVisibility}
                            />
                        </div>
                        <button className="button auth-reg-item identification-button login-button"
                                type="submit">
                            Войти
                        </button>
                    </form>
                    <div className="other-authorization-split">
                        <div className="authorization-split-line"/>
                        <label className="authorization-split-label">или</label>
                        <div className="authorization-split-line"/>
                    </div>
                    <button className="button auth-reg-item identification-button github-login-button">
                        Войти через GitHub
                    </button>
                </div>
                <a className="auth-reg-link" href="#" >Ещё нет аккаунта? Зарегестрируйтесь!</a>
            </div>

        );
    }
}


export default Authorization;
