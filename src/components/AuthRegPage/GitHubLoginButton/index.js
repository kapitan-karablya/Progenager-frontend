import React from "react";

import './style.css'
import githubIcon from "../../../icons/github.svg"

class GitHubLoginButton extends React.Component {
    render() {
        return (
            <a className="github-login-button" target="self" href={`https://github.com/login/oauth/authorize?client_id=${this.props.client_id}&redirect_uri=${this.props.redirect_url}`}>
                <img className="github-icon" src={githubIcon} alt=""/>
                <span>{this.props.text}</span>
            </a>
        );
    }
}

export default GitHubLoginButton;