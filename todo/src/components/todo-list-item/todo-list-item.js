import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    constructor(){
        super();
        this.state = {
            done: false,
            important: false
        };
    }

    onLabelClick = ()=>{
        this.setState({
            done: true
        });
    }
    onImportantClick = ()=>{
        this.setState({
            important: true
        });
    }

    render() {
        const { label } = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item';
        if(important){
            classNames+=' important'
        }
        if(done){
            classNames+=' done'
        }
        
        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={this.onLabelClick}>
                    {label}
                </span>
                <button type="button" className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"></i>
                </button>
                <button type="button" className="btn btn-outline-success btn-sm float-right"
                onClick={this.onImportantClick}>
                    <i className="fa fa-exclamation"></i>
                </button>
            </span>
        );
    }
}
