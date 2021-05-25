import {NavLink} from "react-router-dom";
import React from "react";
import './style.css'

import Sidebar from "./index";

class SidebarItem extends React.Component {
    render() {
        /*({createClickHandler, item}) {
            const clickHandler = createClickHandler(item.name);*/

        return (
            <div className='sidebar-item'/* onClick={clickHandler}*/>
                <NavLink className='sidebar-item' activeClassName="active" to={this.props.item.href}>
                    <div className='sidebar-image'><img src={this.props.item.image} alt={this.props.item.text}/></div>
                    <div className='sidebar-item-text'><span>{this.props.item.text}</span></div>
                </NavLink>
            </div>
        )
    }
}

export default SidebarItem;