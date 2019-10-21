import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    onBtnStatusClick = e => {
        const { onChange } = this.props;
        const status = e.target.getAttribute('data-val');
        onChange(status);
    };
    render() {
        const { doneState } = this.props;

        const statusState = [
            doneState === '' || doneState === 'all',
            doneState === 'active',
            doneState === 'done',
        ];

        const statusVals = ['all', 'active', 'done'];
        const statusTitles = statusVals.map(v => v[0].toUpperCase() + v.slice(1));
        const els = statusVals.map((status, index) => {
            return (
                <button
                    type="button"
                    data-val={status}
                    className={statusState[index] ? 'btn btn-info' : 'btn btn-outline-secondary'}
                    onClick={this.onBtnStatusClick}
                >
                    {statusTitles[index]}
                </button>
            );
        });
        return <div className="btn-group">{els}</div>;
    }
}
