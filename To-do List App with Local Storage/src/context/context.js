import { createContext, useContext } from "react";

// defining context
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deletetodo: (id) => { },
    toggleComplete: (id) => { }
});

// custom Hook
export const useTodo = () => {
    return useContext(TodoContext);
}

// defining provider
export const TodoProvider = TodoContext.Provider;