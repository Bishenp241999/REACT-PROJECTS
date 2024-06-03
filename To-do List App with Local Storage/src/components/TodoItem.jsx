/* eslint-disable react/prop-types */
import { useState } from "react"
import { useTodo } from "../context/context";

//  a single todo item ~ todo

export default function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMessage, setTodoMessage] = useState(todo.todo);

    const { updateTodo, deletetodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todo.msg })
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        toggleComplete(todo.id);
    }
    return (
        <div>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`message`}
                value={todoMessage}
                readOnly={!isTodoEditable}
                onChange={(e) => setTodoMessage(e.target.value)}
            />
            <button
                className="save"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else {
                        setIsTodoEditable((prev) => !prev)
                    }
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✍"}
            </button>
            <button
                onClick={() => {
                    deletetodo(todo.id)
                }}
            >
                ❌
            </button>

        </div>
    )
}