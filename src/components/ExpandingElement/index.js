import React from "react";
import "./style.css";
import show from '../../icons/show.svg';
import ListLine from "./ListLine";


class ExpandingElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    toggleClass = () => {
        this.setState({isActive: !this.state.isActive});
    };

    onKeyDown = e => {
        if (e.target.className !== "expanding-element")
            return;
        if (e.code === "Enter")
            this.toggleClass();
    };

    render() {
        return (
            <div className="expanding-element" tabIndex="0" onKeyDown={this.onKeyDown}>
                <label className="constant-part" onClick={this.toggleClass}>
                    <img className={this.state.isActive ? "show-button visible" : "show-button"} src={show}
                         alt="развернуть/скрыть"/>
                    <div className="element-title">
                        {this.props.title}
                    </div>
                </label>
                <div className={this.state.isActive ? "hiding-part visible" : "hiding-part"}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ExpandingElement;
