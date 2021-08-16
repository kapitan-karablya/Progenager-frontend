import React from "react";
import './style.css'
import Button from "../AuthRegPage/Button";

class Modal extends React.Component {

    onKeyDown = e => {
        if (e.code === "Escape")
            this.props.onClose();
    };

    render() {
        return (
            <div className="modal" onKeyDown={this.onKeyDown}>
                {this.props.children}
                <button className="modal-close" type="button" aria-label="Закрыть"
                        onClick={() => this.props.onClose()}/>
            </div>
        );
    }
}


Modal.defaultProps = {isCentral: false, isOpen: false};

export default Modal;
