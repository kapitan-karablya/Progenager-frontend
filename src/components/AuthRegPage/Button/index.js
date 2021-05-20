import React from "react";

import './style.css'

class Button extends React.Component {
    render() {
        return (
            <button className={"auth-reg-form-button " + this.props.className} type={this.props.type}>
                {this.props.text}
            </button>
        );
    }
}

Button.defaultProps = {type: "button", className: "", text: "Button"};

export default Button;