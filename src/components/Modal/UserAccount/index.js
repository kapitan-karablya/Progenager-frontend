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
import AbsoluteTypeModal from "../AbsoluteType";

class UserAccountModal extends React.Component {

    render() {
        return (
            <AbsoluteTypeModal isOpen={this.props.isOpen} changeModalState={this.props.changeModalState} clickSource={this.props.clickSource}>
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
            </AbsoluteTypeModal>
        );
    }
}

export default UserAccountModal;
