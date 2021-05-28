import React from "react";
import "./style.css";


class ElementsList extends React.Component {
    render() {
        return (
            <div className="elements-list">
                {this.props.children}
            </div>
        )
    }
}

export default ElementsList;
