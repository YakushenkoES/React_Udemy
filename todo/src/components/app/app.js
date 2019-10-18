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
            this.createItem('Drink coffee'),
            this.createItem( 'Make awesome App'),
            this.createItem( 'Have a lunch')
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
                this.createItem(text)
            ];

            return {
                todoData: newData,
            };
        });
    };

    createItem (label){
        return{
            label,
            id: this.uuidv4(),
            important: false,
            done:false,
        }
    }
    toggleProperty=(arr, id, propName)=>{
            const ind = arr.findIndex(td=>td.id===id);
            const old = arr[ind];
            const newItem = {...old, [propName]: !old[propName]};

            return [...arr.slice(0,ind), newItem, ...arr.slice(ind+1)];
    }
    onToggleImportant = id =>{
        this.setState(({todoData})=>{
            return {
                todoData: this.toggleProperty(todoData, id , "important")
            };
        });
    }
    onToggleDone = id =>{
        this.setState(({todoData})=>{
            return {
                todoData: this.toggleProperty(todoData, id , "done")
            };
        });
    }

    render() {
        const { todoData } = this.state;
        const doneQty = todoData.filter(td=>td.done).length;
        const todoQty = todoData.length - doneQty;
        return (
            <div className="app">
                <AppHeader done={doneQty} toDo={todoQty} />
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

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
}
