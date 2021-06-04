import React from "react";
import './style.css'
import UserIcon from "../../UserIcon";

class UserProfile extends React.Component {

    render() {
        return (
            <div className="user-profile">
                <div className="user-profile-icon">
                    <UserIcon text={this.props.name}/>
                </div>
                <div className="user-profile-name-wrapper">
                    <div className="user-profile-name">
                        {this.props.name}
                    </div>
                    <button className="user-change-color-button">сменить цвет</button>
                </div>
            </div>
        )
    }
}

export default UserProfile;
