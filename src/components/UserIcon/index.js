import React from "react";
import './style.css'

class UserIcon extends React.Component {

    render() {
        return (
           <div className="user-icon">
               <div className="user-initials">
                   <span>{this.props.text}</span>
               </div>
           </div>
        );
    }
}


export default UserIcon;
