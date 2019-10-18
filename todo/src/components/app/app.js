import React, { Component } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
    state = {
        todoData: [
            {
                label: 'Drink coffee',
                id: 1,
            },
            {
                label: 'Make awesome App',
                id: 2,
            },
            {
                label: 'Have a lunch',
                id: 3,
            },
        ],
    };
    deleteItem = id => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(td => td.id === id);

            // НЕ ИЗМЕНЯТЬ STATE НАПРЯМУЮ!!!!!!!!! ТАК НЕЛЬЗЯ!!!!
            //! todoData.splice(idx, 1);

            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray,
            };
        });
    };
    addItem = text => {
        this.setState(state => {
            // НЕ ИЗМЕНЯТЬ STATE НАПРЯМУЮ!!!!!!!!! ТАК НЕЛЬЗЯ!!!!
            //! todoData.push(idx, 1);

            const newData = [
                ...state.todoData,
                {
                    label: text,
                    id: this.uuidv4(),
                },
            ];

            return {
                todoData: newData,
            };
        });
    };

    onToggleImportant = id =>{
        const ind = this.state.todoData.findIndex(td=>td.id===id);
        console.log("important", id);
    }
    onToggleDone = id =>{
        console.log("done", id);
        const ind = this.state.todoData.findIndex(td=>td.id===id);
    }

    render() {
        const { todoData } = this.state;
        return (
            <div className="app">
                <AppHeader done={3} toDo={1} />
                <div className="top-panel">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={todoData} onDeleted={this.deleteItem} 
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}/>
                <ItemAddForm onAddItem={this.addItem} />
            </div>
        );
    }

    uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
}
