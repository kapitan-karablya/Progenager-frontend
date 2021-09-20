import React from "react";
import './style.css'

class ModalSaveButton extends React.Component {

    render() {
        return (
            <div className="modal-button modal-save-button" type="submit" onClick={this.props.onClick}>Сохранить и закрыть</div>
        );
    }
}

export default ModalSaveButton;
