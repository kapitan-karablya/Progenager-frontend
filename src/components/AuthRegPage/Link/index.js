import React from "react";
import './style.css'

class AuthRegPageLink extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick} className="auth-reg-link">
                <a href="#" >{this.props.text}</a>
            </div>
        );
    }
}

export default AuthRegPageLink;
