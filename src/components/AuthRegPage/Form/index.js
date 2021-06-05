import React from "react";
import './style.css'

class AuthRegForm extends React.Component {
    render() {
        return (
            <form className="auth-reg-form" onSubmit={this.props.onSubmit}>
                {this.props.children}
            </form>
        );
    }
}

export default AuthRegForm;
