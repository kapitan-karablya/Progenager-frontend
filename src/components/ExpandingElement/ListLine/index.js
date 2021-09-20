import React from "react";
import "./style.css";
import editButton from "../../../icons/edit.svg";
import EditButton from "../../CommonElements/EditButton";
import {Link} from "react-router-dom";


class ListLine extends React.Component {


    render() {
        return (
            <div className="list-line-wrapper">
                <Link to={'/project/' + this.props.id} className="list-line" style={{textDecoration: 'none'}}>
                    {this.props.children}
                </Link>
                <EditButton onClick={this.props.onClick} tabIndex="0"/>
            </div>
        )
    }
}

export default ListLine;
