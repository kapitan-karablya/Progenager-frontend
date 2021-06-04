import React from "react";
import './style.css'

class UserIcon extends React.Component {

    render() {
        let initials;
        {
            isNaN(this.props.text)
                ? initials = this.props.text.replace(/(.).+ (.).+/, '$1$2')
                : initials = "+" + this.props.text
        }
        return (
            <div className="user-icon">
                <div className="user-initials">
                    <span>{initials}</span>
                </div>
            </div>
        );
    }
}


export default UserIcon;
