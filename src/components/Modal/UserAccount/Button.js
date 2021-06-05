import React from "react";
import './style.css'

class UserAccountButton extends React.Component {

    render() {
        return (
                <button className="user-account-button" onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}

export default UserAccountButton;
