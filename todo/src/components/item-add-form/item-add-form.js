import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        text: '',
    };
    onTextChanged = text => {
        this.setState({
            text
        });
    };
    render() {
        const { onAddItem } = this.props;
        return (
            <div className="item-add-form">
                <input
                    onChange={ (e)=>{this.onTextChanged(e.target.value);}}
                    type="text"
                    className="form-control item-add-input"
                    value={this.state.text}
                />
                <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => {
                        onAddItem(this.state.text);
                        this.onTextChanged("");
                    }}
                >
                    <i className="fa fa-plus" />
                </button>
            </div>
        );
    }
}
