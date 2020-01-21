import React from "react";

const Todo = props => {
    return (
        <div
            className = { `todo-item ${props.todo.completed ? " completed" : ""}` } 
            onClick = { () => props.todoCompleted(props.todo.id) }>
            <h4>{ props.todo.task }</h4>
            {/* <div className="dot"></div> */}
        </div>
    );
};

export default Todo;