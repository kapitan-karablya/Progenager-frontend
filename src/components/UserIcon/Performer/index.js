import React from "react";
import './style.css'
import UserIcon from "../index";

class Performer extends React.Component {

    render() {
        let performer;
        if (this.props.performers === null)
            return null;
        else if (!this.props.performers[1])
            performer = this.props.performers[0];
        else
            performer = this.props.performers.length;
        return (
            <div className="performer-icon" style={{backgroundColor: this.props.color}}>
                <UserIcon text={performer}/>
            </div>
        );
    }
}


export default Performer;
