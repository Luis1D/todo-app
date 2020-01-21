import React, { useState } from "react";

const TodoForm = props => {
    const [item, setItem] = useState("");

    // add to state
    const handleChanges = e => {
        setItem(
            e.target.value
        );
        
    };

    // add to props
    const submitItem = e => {
        e.preventDefault();
        props.addItem(item)
    }

    // Form for inputing new todo items
    return (
        <form className="TodoForm" onSubmit = { submitItem }>
            <input 
                placeholder = "New Todo.."
                type = "text"
                value = { item }
                name = "item"
                onChange = { handleChanges }
            />
            <button>Add Todo</button>
        </form>
    );
};

export default TodoForm;