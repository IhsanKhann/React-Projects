import './Form.css';
import { useTodo } from "../Context/ToDoContext.jsx" ;
import { useState } from 'react';

function Form() {
    const [todo, setTodo] = useState({
        id: Date.now(),
        todoMsg: "",
        completed: false
    });

    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.todoMsg.trim() === "") return; // prevent empty todo
        addTodo(todo);
        setTodo({
            id: Date.now(),
            todoMsg: "",
            completed: false
        });
    };

    const handleChange = (e) => {
        setTodo(prev => ({
            ...prev,
            todoMsg: e.target.value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo"
                value={todo.todoMsg}
                onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default Form;
