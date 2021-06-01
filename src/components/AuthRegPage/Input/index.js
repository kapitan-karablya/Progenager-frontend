import React from "react";

import './style.css'

class Input extends React.Component {
    render() {
        return (
            <input className={"auth-reg-input " + this.props.className}
                   type={this.props.type}
                   placeholder={this.props.placeholder}
                   name={this.props.title}
            />
        );
    }
}

Input.defaultProps = {type: "Text", placeholder: "", title: null, className: ""};

export default Input;