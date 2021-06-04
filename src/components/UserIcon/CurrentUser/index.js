import React from "react";
import './style.css'
import UserIcon from "../index";
import UserAccount from "../../Modal/UserAccount";
import Modal from "../../Modal";
import TaskModal from "../../Modal/Task";

class CurrentUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserModalOpen: false,
        };
        this.setWrapperRef = this.setWrapperRef;
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    openModal() {
        this.setState({isUserModalOpen: true})
        document.addEventListener('mousedown', this.handleClickOutside);

    }

    closeModal() {
        this.setState({isUserModalOpen: false})
        document.removeEventListener('mousedown', this.handleClickOutside);

    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.closeModal();
        }
    }

    render() {
        return (
           <div className="current-user-wrapper" ref={this.setWrapperRef.bind(this)}>
               <div className="current-user" onClick={() =>{this.state.isUserModalOpen ? this.closeModal(): this.openModal()}}>
               <UserIcon text={this.props.name}/>
               </div>
               {this.props.withModal ? <UserAccount isOpen={this.state.isUserModalOpen} onClose={() => this.closeModal()}/> : null}
           </div>
        );
    }
}

CurrentUser.defaultProps = {withModal: true};

export default CurrentUser;
