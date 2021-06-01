import React from "react";
import './style.css'

class Modal extends React.Component {

    render() {
        if (!this.props.isOpen)
            return null;


        return (
            <div className="modal-wrapper">
                <div className="modal">
                    {this.props.children}
                    <button className="modal-close" type="button" aria-label="Закрыть" onClick={e => this.close(e)}/>
                </div>
                <div className="modal-background" onClick={e => this.close(e)}/>
            </div>
        );
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose()
        }
    }
}

export default Modal;
