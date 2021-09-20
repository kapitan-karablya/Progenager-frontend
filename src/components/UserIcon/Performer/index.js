import React from "react";
import './style.css'
import UserIcon from "../index";

class Performer extends React.Component {

    getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        let performer;
        let color = "var(--performers-icon)";
        if (this.props.performers === null)
            return null;
        else if (this.props.performers.length > 1)
            performer = this.props.performers.length;
        else if (this.props.performers.length === 1){
            performer = this.props.performers[0].firstName + " " + this.props.performers[0].lastName;
            /*color=this.props.performers[0].color;*/
            color=this.props.color;
        }
        else {
            performer = this.props.performers.firstName + " " + this.props.performers.lastName;
            /*color=this.props.performers.color;*/
            color=this.props.color;
        }

        return (
            <div className="performer-icon">
                <UserIcon text={performer} backgroundColor={this.getRandomColor()}/>
            </div>
        );
    }
}

export default Performer;
