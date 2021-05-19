import React from "react";
import './style.css'

class AppPage extends React.Component {
    render() {
        return (
            <div className="app-page">
                {this.props.children}
            </div>
        );
    }
}

export default AppPage;
