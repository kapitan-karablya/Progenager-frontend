import React from "react";

class Description extends React.Component {
    render() {
        return (
            <div className="description">{this.props.description}</div>
        )
    }
}

export default Description;