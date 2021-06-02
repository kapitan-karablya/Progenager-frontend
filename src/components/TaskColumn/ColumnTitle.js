import React from "react";
import "./style.css";

class ColumnTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: true,
        };
    }

    onClick() {
        this.setState({isEdit: false}) ;
    }

    render() {

        return (
                <div className="column-title">
                    {this.state.isEdit ?
                        <div className="column-title-form">
                            <input className="column-title-form-item column-title-input" value={this.props.title}/>
                            <button className="column-title-form-item column-title-save-button" type="submit" aria-label="Сохранить"></button>
                            <button className="column-title-form-item column-title-close-button" aria-label="Закрыть" onClick={() => this.onClick()}/>
                        </div> : this.props.title}
                </div>

        )
    }
}

export default ColumnTitle;
