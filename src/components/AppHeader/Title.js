import React from "react";

import './style.css'

class AppHeaderTitle extends React.Component {
    render() {
        return (

            <div className="header-title">
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default AppHeaderTitle;