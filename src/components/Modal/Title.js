import React from "react";
import './style.css'

class ModalTitle extends React.Component {

    render() {
        return (
            <div className="modal-title">
                <textarea className="modal-input title-textarea custom-scroll"
                          type="text"
                          placeholder={this.props.placeholder}
                          defaultValue={this.props.title}
                          autoFocus/>
            </div>
        );
    }
}

export default ModalTitle;
