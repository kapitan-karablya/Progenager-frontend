import React from "react";

import './style.css'

class SplitLine extends React.Component {

    render() {
        return (
            <div className="auth-reg-split-line">
                <div className="split-line-dash"/>
                <label className="split-line-label">или</label>
                <div className="split-line-dash"/>
            </div>
        );
    }
}

export default SplitLine;
