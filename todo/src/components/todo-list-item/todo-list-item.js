import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
    const classItem = important ? " important":"";
    return (

        <span className={"todo-list-item" + classItem}>
            <span className="todo-list-item-label">{label}</span>
            <button type="button" className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"></i>
            </button>
            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"></i>
            </button>
        </span>
    );
};

export default TodoListItem;
