import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: '',
    };

    onLabelChanged = e => {
        this.setState({
            label: e.target.value,
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const { onAddItem } = this.props;
        onAddItem(this.state.label);
        this.setState({
            label: '',
        });
    };
    render() {
        return (
            <form className="item-add-form" onSubmit={this.onSubmit}>
                <input
                    onChange={this.onLabelChanged}
                    type="text"
                    placeholder="What needs to be done"
                    className="form-control item-add-input"
                    value={this.state.label}
                />
                <button type="submit" className="btn btn-outline-success">
                    <i className="fa fa-plus" />
                </button>
            </form>
        );
    }
}
