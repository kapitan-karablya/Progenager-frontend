import React from "react";
import "./style.css";
import show from '../../icons/show.svg';
import ListLine from "./ListLine";



class ExpandingElement extends React.Component {
    render() {
        return (
            <div className="expanding-element">
                <input className="expanding-element-checkbox" type="checkbox" id={this.props.id}/>
                <label htmlFor={this.props.id} className="constant-part">
                    <div className="element-title">
                        {this.props.title}
                    </div>
                    <img className="show-button" src={show}/>
                </label>
                <div className="hiding-part">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ExpandingElement;
