import React from "react";
import './style.css'
import Button from "../AuthRegPage/Button";

class Modal extends React.Component {

    render() {
        return (
            <div className="modal">
                {this.props.children}
                <button className="modal-close" type="button" aria-label="Закрыть"
                        onClick={() => this.props.onClose()}/>
            </div>
        );
    }
}


Modal.defaultProps = {isCentral: false, isOpen: false};

export default Modal;
