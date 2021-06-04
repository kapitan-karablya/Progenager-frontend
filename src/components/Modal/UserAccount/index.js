import React from "react";
import './style.css'
import Modal from "../index";
import ModalForm from "../Form";
import ModalTitle from "../Title";
import ModalDescription from "../Description";
import ModalParticipants from "../Participants";
import ModalMethodology from "../Methodology";
import ModalSaveButton from "../SaveButton";
import UserAccountButton from "./Button";
import DividingLine from "./DividingLine";
import UserProfile from "./UserProfile";

class UserAccount extends React.Component {

    render() {
        return (
            <div className="user-account-modal">
                <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
                    <div className="user-account-modal-content">
                        <div className="user-account-title">Учетная запись</div>
                        <DividingLine/>
                        <UserProfile name="Иван Красиков"/>
                        <UserAccountButton text="Изменить имя"/>
                        <UserAccountButton text="Изменить логин"/>
                        <UserAccountButton text="Изменить пароль"/>
                        <DividingLine/>
                        <UserAccountButton text="Выйти"/>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default UserAccount;
