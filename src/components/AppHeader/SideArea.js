import React from "react";
import './style.css'

class AppHeaderSideArea extends React.Component {


    render() {
        return (
            <div className="header-side-area">
                {this.props.children}
            </div>
        );
    }
}

export default AppHeaderSideArea;
