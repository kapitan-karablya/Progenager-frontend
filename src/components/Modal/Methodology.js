import React from "react";
import './style.css'

class ModalMethodology extends React.Component {

    render() {
        return (
            <div className="modal-development-methodology">
                <label className="modal-long-label">Методология разработки</label>
                <div className="methodology-radio-button">
                    <input className="methodology-radio-input"
                           type="radio"
                           id="kanban-methodology"
                           name="methodology"
                           defaultChecked={true}
                    />
                    <label className="methodology-radio-label" htmlFor="kanban-methodology">kanban</label>
                    <input className="methodology-radio-input"
                           type="radio"
                           id="scrum-methodology"
                           name="methodology"
                           defaultChecked={false}
                    />
                    <label className="methodology-radio-label" htmlFor="scrum-methodology">scrum</label>
                </div>
            </div>
        );
    }
}

export default ModalMethodology;
