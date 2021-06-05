import React from "react";
import './style.css'

import CurrentUserIcon from "../UserIcon/Current";
import UserAccountModal from "../Modal/UserAccount";

class CurrentUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserModalOpen: false,

        };
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    changeModalState = (isUserModalOpen) => {
        this.setState({isUserModalOpen: isUserModalOpen})
    };


    render() {
        return (
            <div className="current-user" ref={this.setWrapperRef.bind(this)}>
                <UserAccountModal isOpen={this.state.isUserModalOpen} changeModalState={() => this.changeModalState()}
                                  clickSource={this.wrapperRef}/>
                <div className="current-user-icon-wrapper" onClick={() => {
                    this.changeModalState(!this.state.isUserModalOpen);
                }}>
                    <CurrentUserIcon name={this.props.name}/>
                </div>
            </div>
        );
    }
}

export default CurrentUser;
