import React from "react";
import './style.css'

class AppHeader extends React.Component {
    render() {
        return (
            <div className="app-header">
                {this.props.children}
            </div>
        );
    }
}

export default AppHeader;
