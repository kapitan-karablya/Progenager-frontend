import React from "react";
import './style.css'
import Input from "../../AuthRegPage/Input";

class UserAccountButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            isPasswordShow: false
        };
    }

    openEdit() {
        this.setState({isEdit: true});
    }

    closeEdit(){
        this.setState({isEdit: false});
    }

    togglePasswordVisibility = () => {
        this.setState({isPasswordShow: !this.state.isPasswordShow});
    };

    render() {
        return (
            <button className="user-account-button" onClick={this.props.onClick}>

                {this.state.isEdit
                    ? <div className="user-account-edit">

                        {this.props.type === "password"

                            ? <div className="change-password-wrapper">
                                <input className="user-account-edit-input" defaultValue={this.props.title}
                                       autoFocus
                                       type={this.state.isPasswordShow ? "text" : "password"}
                                       placeholder={this.props.placeholder}
                                       />
                                <div
                                    className={`${this.state.isPasswordShow ? "visible-pass" : "hidden-pass"} change-password-control`}
                                    onClick={this.togglePasswordVisibility}/>
                            </div>

                            : <input className="user-account-edit-input" defaultValue={this.props.title}
                                     autoFocus type={this.props.type}
                                     placeholder={this.props.placeholder}/>}
                        <div className="user-account-edit-input-buttons">
                            <button className="column-title-form-item user-account-edit-save-button" type="submit"
                                    aria-label="Сохранить"/>
                            <button className="user-account-edit-close-button" aria-label="Закрыть"
                                    onClick={() => this.closeEdit()}/>
                        </div>
                        <div className="user-account-button-cover" onClick={() => this.closeEdit()}/>
                    </div>
                    : <div className="user-account-button-text" onClick={() => this.openEdit()}>
                        {this.props.text}
                    </div>}
            </button>
        )
    }
}

export default UserAccountButton;
