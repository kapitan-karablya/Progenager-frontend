import React from "react";
import "./style.css";
import editButton from "../../../icons/edit.svg";
import EditButton from "../../CommonElements/EditButton";


class ListLine extends React.Component {


    render() {
        return (
            <div className="list-line-wrapper">
                <div className="list-line" tabIndex="0">
                    {this.props.children}
                </div>
                <EditButton onClick={this.props.onClick} tabIndex="0"/>
            </div>
        )
    }
}

export default ListLine;
