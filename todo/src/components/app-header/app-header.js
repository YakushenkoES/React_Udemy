import React from 'react';
import './app-header.css';
const AppHeader = ({ done, toDo }) => {
    return (
        <div className="app-header">
            <h1>My todo List</h1>
            <h2>
                {toDo} more to do, {done} done
            </h2>
        </div>
    );
};
export default AppHeader;
