import React from "react";
import './style.css'

class ModalForm extends React.Component {

    render() {
        return (
            <form className="modal-form">
                {this.props.children}
            </form>
        );
    }
}

export default ModalForm;