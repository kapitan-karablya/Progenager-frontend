import React from "react";
import './style.css'
import ModalTitle from "./Title";

class ModalDate extends React.Component {

    render() {
        return (
            <div className="modal-description">
                <label className="modal-long-label" htmlFor="date-input">Дата окончания</label>
                <input className="modal-input date-input" id="date-input" type={"date"}
                          placeholder={this.props.placeholder} defaultValue={this.props.date}/>
            </div>
        );
    }
}

export default ModalDate;
