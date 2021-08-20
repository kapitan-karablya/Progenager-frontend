import React from "react";
import './style.css'
import UserIcon from "../index";

class Performer extends React.Component {

    render() {
        let performer;
        let color = "var(--performers-icon)";
        if (this.props.performers === null)
            return null;
        else if (this.props.performers.length > 1)
            performer = this.props.performers.length;
        else if (this.props.performers.length === 1){
            performer = this.props.performers[0].firstName + " " + this.props.performers[0].lastName;
            color=this.props.performers[0].color;
        }
        else {
            performer = this.props.performers.firstName + " " + this.props.performers.lastName;
            color=this.props.performers.color;
        }

        return (
            <div className="performer-icon">
                <UserIcon text={performer} backgroundColor={color}/>
            </div>
        );
    }
}

export default Performer;
