import React from "react";
import './style.css'

class HeaderButton extends React.Component {

    render() {
        return (
            <button onClick={this.props.onClick} className="header-button">
                <img className="header-button-image" src={this.props.icon} alt=""/>
                <span className="header-button-text" >{this.props.text}</span>
            </button>
        );
    }
}


export default HeaderButton;
