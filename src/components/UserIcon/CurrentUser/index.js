import React from "react";
import './style.css'
import UserIcon from "../index";

class CurrentUser extends React.Component {

    render() {
        const initials = this.props.name.replace(/(.).+ (.).+/, '$1$2');
        return (
           <div className="current-user">
               <UserIcon text={initials}/>
           </div>
        );
    }
}


export default CurrentUser;
