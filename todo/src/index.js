import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import './index.css';

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
        <div className="app-todo">
            <AppHeader done={3} toDo={1} />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
