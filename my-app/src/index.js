
import React from 'react';
import ReactDOM from 'react-dom';

function TodoItem(){
    return (
        <span>
            Drink Coffe
        </span>
    );
}
function TodoList(){
    return (
        <ul>
            <li><TodoItem/></li>
            <li><TodoItem/></li>
            <li><TodoItem/></li>
        </ul>
    );
}
ReactDOM.render(<TodoItem/>, document.getElementById("root"));