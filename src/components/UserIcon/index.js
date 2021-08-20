import React from "react";
import './style.css'

class UserIcon extends React.Component {

    hexToLuma = (color) => {
        const hex = color.replace(/#/, '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);

        return [
            0.299 * r,
            0.587 * g,
            0.114 * b
        ].reduce((a, b) => a + b) / 255;
    };

    getInitialsColor = () => {
        return this.hexToLuma(this.props.backgroundColor) > 0.57 ? "black" : "white";
    };

    render() {
        let initialsColor = this.getInitialsColor()
        let initials;
        isNaN(this.props.text)
            ? initials = this.props.text.replace(/(.).+ (.).+/, '$1$2')
            : initials = "+" + this.props.text;

        return (
            <div className="user-icon" style={{backgroundColor: this.props.backgroundColor, borderColor: initialsColor}}>
                <div className="user-initials" style={{color: initialsColor}}>
                    <span>{initials}</span>
                </div>
            </div>
        );
    }
}



export default UserIcon;


