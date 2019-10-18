import React from 'react';
import './todo-list-item.css';

const  TodoListItem  =props=>{
   
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done} = props;

        let classNames = 'todo-list-item';
        if (important) {
            classNames += ' important';
        }
        if (done) {
            classNames += ' done';
        }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={onToggleDone}>
                    {label}
                </span>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash-o"></i>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation"></i>
                </button>
            </span>
        );
    }

    export default TodoListItem;
