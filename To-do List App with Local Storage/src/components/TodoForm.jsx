import { useState } from "react"
import { useTodo } from "../context/context";

export default function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();
    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo, completed: false });
        setTodo("");
    }
    return (
        <div>
            <form onSubmit={add}>
                <input
                    type="text"
                    placeholder="Write Todo..."
                    value={todo}
                    className="input"
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}