import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="TodoList">
        {/* map over 'todos' and create a new component from each item */}
        {props.todos.map(item => (
            <Todo 
                todo={item} 
                todoCompleted = {props.todoCompleted}
                key={item.id}
            />
        ))}
        {
            props.todos.length === 0 ? <h2>You have no todos..</h2> : null        }
        </div>
    );
};

export default TodoList;