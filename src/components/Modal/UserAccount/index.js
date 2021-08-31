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
import cookies from "../../../helpers/Coocies";


class UserAccountModal extends React.Component {

    logOut() {
        cookies.remove("access_token");
        window.location.reload();
    }

    render() {
        return (
            <AbsoluteTypeModal isOpen={this.props.isOpen} changeModalState={this.props.changeModalState} clickSource={this.props.clickSource}>
                <div className="user-account-modal-content">
                    <div className="user-account-title">Учетная запись</div>
                    <DividingLine/>
                    <UserProfile name="Иван Красиков" color="green"/>
                    <UserAccountButton type="text" text="Изменить имя" placeholder="Новое имя"/>
                    <UserAccountButton type="login" text="Изменить логин"  placeholder="Новый логин"/>
                    <UserAccountButton type="password" text="Изменить пароль"  placeholder="Новый пароль"/>
                    <DividingLine/>
                    <UserAccountButton text="Выйти" onClick={() => this.logOut()}/>
                </div>
            </AbsoluteTypeModal>
        );
    }
}

export default UserAccountModal;
