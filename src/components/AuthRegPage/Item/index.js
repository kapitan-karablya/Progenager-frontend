import React from "react";

import './style.css'

class AuthRegItem extends React.Component {
    render() {
        return (
            <div className="auth-reg-item">
                {this.props.children}
            </div>
        );
    }
}

export default AuthRegItem;