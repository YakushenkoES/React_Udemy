import React from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import './app.css';

const App = () => {
    const todoData = [
        {
            label: 'Drink coffee',
            important: false,
            id: 1,
        },
        {
            label: 'Make awesome App',
            important: true,
            id: 2,
        },
        {
            label: 'Have a lunch',
            important: false,
            id: 3,
        },
    ];
    return (
        <div className="app">
            <AppHeader done={3} toDo={1} />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};
export default App;