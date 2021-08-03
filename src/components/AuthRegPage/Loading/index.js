import React from "react";

import './style.css'
import loading from "../../../icons/loading.gif";

class Loading extends React.Component {
    render() {
        return (
            <div className={this.props.isLoading ? "loading-wrapper" : "loading-hide"}>
                <img className="loading-icon" src={loading} alt="загрузка"/>
            </div>
        );
    }
}

export default Loading;