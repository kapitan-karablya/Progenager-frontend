import React from "react";
import './style.css'

class AuthRegForm extends React.Component {
    render() {
        return (
            <form className="auth-reg-form">
                {this.props.children}
            </form>
        );
    }
}

export default AuthRegForm;
