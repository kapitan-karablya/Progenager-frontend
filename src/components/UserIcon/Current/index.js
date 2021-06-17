import React from "react";
import './style.css'
import UserIcon from "../index";
import UserAccountModal from "../../Modal/UserAccount";
import Modal from "../../Modal";

class CurrentUserIcon extends React.Component {

    render() {
        return (
            <div className="current-user-icon" style={{backgroundColor: this.props.color}}>
                <UserIcon text={this.props.name}/>
            </div>
        );
    }
}

export default CurrentUserIcon;
