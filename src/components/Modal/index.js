import React from "react";
import './style.css'
import Button from "../AuthRegPage/Button";

class Modal extends React.Component {

    render() {
        if (!this.props.isOpen)
            return null;

        return (this.props.isCentral
                ? <div className="modal-wrapper">
                    <div className="central-modal">
                        <div className={"modal"}>
                            {this.props.children}
                            <button className="modal-close" type="button" aria-label="Закрыть"
                                    onClick={e => this.close(e)}/>
                        </div>
                    </div>
                    <div className="modal-background" onClick={e => this.close(e)}/>
                </div>
                : <div><div className={"modal"}>
                    {this.props.children}
                    <button className="modal-close" type="button" aria-label="Закрыть"
                            onClick={e => this.close(e)}/>
                </div>
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


Modal.defaultProps = {isCentral: false, isOpen: false};

export default Modal;
