import React from "react";
import './style.css'

class AuthRegHeaderButton extends React.Component {
    render() {
        return (
            <button className="auth-reg-header-button" onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    }
}

export default AuthRegHeaderButton;
