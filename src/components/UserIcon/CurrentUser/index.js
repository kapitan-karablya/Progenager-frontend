import React from "react";
import './style.css'
import UserIcon from "../index";
import UserAccount from "../../Modal/UserAccount";
import Modal from "../../Modal";
import TaskModal from "../../Modal/Task";

class CurrentUser extends React.Component {

    render() {
        return (
           <div className="current-user-wrapper" ref={this.setWrapperRef}>
               <div className="current-user" onClick={() =>{this.props.isUserModalOpen ?   this.props.onClose(): this.props.onClick()}}>
               <UserIcon text={this.props.name}/>
               </div>
               {this.props.withModal ? <UserAccount isOpen={this.props.isUserModalOpen} onClose={this.props.onClose}/> : null}
           </div>
        );
    }
}

CurrentUser.defaultProps = {withModal: true};

export default CurrentUser;
