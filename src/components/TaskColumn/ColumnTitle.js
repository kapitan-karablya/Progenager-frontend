import React from "react";
import "./style.css";

class ColumnTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        };
    }

    openEdit() {
        this.setState({isEdit: true}) ;
    }

    closeEdit() {
        this.setState({isEdit: false});
    }

    render() {
        return (
                <div className="column-title">
                    {this.state.isEdit
                        ? <div className="column-title-form">
                            <input className="column-title-form-item column-title-input" defaultValue={this.props.title}
                                   autoFocus onBlur={() => this.closeEdit()}/>
                            <button className="column-title-form-item column-title-save-button" type="submit" aria-label="Сохранить"/>
                            <button className="column-title-form-item column-title-close-button" aria-label="Закрыть" onClick={() => this.closeEdit()}/>
                        </div>
                        : <div className="column-title-button" onClick={() => this.openEdit()}>
                            {this.props.title}
                        </div>}
                </div>

        )
    }
}

export default ColumnTitle;
