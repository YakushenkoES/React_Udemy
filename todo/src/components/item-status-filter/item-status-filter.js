import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
   
    butttons=[
        {
            val : "all",
            title : "All",
        },
        {
            val : "done",
            title : "Done",
        },
        {
            val : "active",
            title : "Active",
        }
    ];
    render() {
        const { doneState } = this.props;
        
        const els = this.butttons.map( btn => {
            const isChecked = btn.val === doneState;
            const clazz = isChecked ? "btn-info" : 'btn-outline-secondary';
            return (
                <button
                    type="button"
                    data-val={btn.val}
                    className={'btn '+ clazz}
                    onClick={() => {this.props.onChange(btn.val)}}
                    key={btn.val}
                >
                    {btn.title}
                </button>
            );
        });
        return <div className="btn-group">{els}</div>;
    }
}
