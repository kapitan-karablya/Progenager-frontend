import React, {useState} from "react";
import './style.css'
import UserIcon from "../../UserIcon";
import {HexColorPicker} from "react-colorful";

export default function UserProfile(props) {
    const [color, setColor] = useState(props.color);
    const [isOpen, toggle] = useState(false);


    const twoCalls = e => {
        setColor(e);
    };


    const popover = {
        position: 'absolute',
        zIndex: '2',
        top: '120px',
        left: '35px',
    };

    const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        zIndex: '-1',
    };

    const closeColorPicker = () => {
        toggle(false);
    };

    const cancelChangeColor = () => {
        setColor(props.color);
        toggle(false);
    };

    return (
        <div className="user-profile">
            <div className="user-profile-icon">
                <UserIcon text={props.name} backgroundColor={color}/>
            </div>
            <div className="user-profile-name-wrapper">
                <div className="user-profile-name">
                    {props.name}
                </div>
                <button className="user-change-color-button" onClick={() => toggle(true)}>сменить цвет</button>
            </div>
            {isOpen ?
                <div style={popover} className="colorPicker">
                    <div style={cover} onClick={() => closeColorPicker()}/>
                    <HexColorPicker color={color} onChange={twoCalls}/>
                    <button className="colorPickerCancelButton" onClick={() => cancelChangeColor()}>Отменить</button>
                </div> :
                null}
        </div>
    )

}
