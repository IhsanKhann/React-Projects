import { useState } from "react";
import { useTodo } from "../Context/ToDoContext.jsx"
import "./FormItem.css";

function FormItems({ todo }) {
    const { deleteTodo, updateTodo, toggleTodo } = useTodo();

    const [toDoMsg, setTodoMsg] = useState(todo.todoMsg);
    const [isTodoEditable, setIsTodoEditable] = useState(false);

    const editTodo = () => {
        updateTodo(todo.id, {
            ...todo,
            todoMsg: toDoMsg,
        });
        setIsTodoEditable(false);
    };

    return (
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />

            <input
                type="text"
                value={toDoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                className={isTodoEditable ? "editable" : ""}
            />

            <button
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else {
                        setIsTodoEditable(true);
                    }
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            <button onClick={() => deleteTodo(todo.id)}>
                ❌
            </button>
        </div>
    );
}

export default FormItems;
