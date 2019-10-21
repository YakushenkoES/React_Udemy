import React, { Component } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import uuid from '../uuid';

import './app.css';

export default class App extends Component {
    state = {
        todoData: [
            this.createItem('Drink coffee'),
            this.createItem('Make awesome App'),
            this.createItem('Have a lunch'),
        ],
        filter: {
            searchString: '',
            doneState: 'all', // all active done
        },
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

            const newData = [...state.todoData, this.createItem(text)];

            return {
                todoData: newData,
            };
        });
    };

    createItem(label) {
        return {
            label,
            id: uuid(),
            important: false,
            done: false,
        };
    }
    toggleProperty = (arr, id, propName) => {
        const ind = arr.findIndex(td => td.id === id);
        const old = arr[ind];
        const newItem = { ...old, [propName]: !old[propName] };

        return [...arr.slice(0, ind), newItem, ...arr.slice(ind + 1)];
    };
    onToggleImportant = id => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important'),
            };
        });
    };
    onToggleDone = id => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done'),
            };
        });
    };

    search = todoData => {
        let {
            filter: { searchString, doneState },
        } = this.state;

        return todoData.filter(td => {
            searchString = searchString.trim().toLowerCase();

            const bSearchRes =
                searchString === '' || ( td.label.toLowerCase().indexOf(searchString)>-1);

            const bDone =
                doneState === '' ||
                doneState === 'all' ||
                (td.done && doneState === 'done') ||
                (!td.done && doneState === 'active');
            return bSearchRes && bDone;
        });
    };
    onSearchChanged = searchString => {
        this.setState(state => {
            return {
                filter: {
                    searchString,
                    doneState: state.filter.doneState,
                },
            };
        });
    };
    onDoneStateFilterChanged = doneState => {
        this.setState(state => {
            return {
                filter: {
                    searchString: state.filter.searchString,
                    doneState,
                },
            };
        });
    };

    render() {
        const {
            todoData,
            filter: { doneState },
        } = this.state;

        const doneQty = todoData.filter(td => td.done).length;
        const todoQty = todoData.length - doneQty;
        const searchedItems = this.search(todoData);
        return (
            <div className="app">
                <AppHeader done={doneQty} toDo={todoQty} />
                <div className="top-panel">
                    <SearchPanel onChange={this.onSearchChanged} />
                    <ItemStatusFilter
                        doneState={doneState}
                        onChange={this.onDoneStateFilterChanged}
                    />
                </div>
                <TodoList
                    todos={searchedItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onAddItem={this.addItem} />
            </div>
        );
    }
}
