import React from "react";

import "./style.css";
import editButton from "../../../icons/edit.svg";


class EditButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} className="edit-button">
                <svg className="edit-image" width="29" height="29" viewBox="0 0 29 29"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.625 20.844v4.531h4.531L21.52 12.011 16.99 7.48 3.624 20.844zm21.4-12.337a1.203 1.203 0 000-1.704l-2.828-2.827a1.203 1.203 0 00-1.704 0l-2.21 2.21 4.53 4.532 2.212-2.211z"/>
                </svg>
            </button>
        );
    }
}

export default EditButton;