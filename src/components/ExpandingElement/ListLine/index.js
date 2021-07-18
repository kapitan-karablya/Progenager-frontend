import React from "react";
import "./style.css";
import editButton from "../../../icons/edit.svg";


class ListLine extends React.Component {
    render() {
        return (
            <div className="list-line-wrapper">
                <div className="list-line">
                    {this.props.children}
                </div>
                <button onClick={this.props.onClick} className="edit-button">
                    <img src={editButton}/>
                </button>
            </div>
        )
    }
}

export default ListLine;
