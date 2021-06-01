import React from "react";
import './style.css'
import ModalTitle from "./Title";
import SimpleBar from "simplebar-react";

class ModalDescription extends React.Component {

    render() {
        return (
            <div className="modal-description">
                <label className="modal-label" htmlFor="description-textarea">Описание</label>
                <textarea className="modal-input description-textarea custom-scroll" id="description-textarea"
                          placeholder={this.props.placeholder} defaultValue={this.props.description}/>
            </div>
        );
    }
}

export default ModalDescription;
