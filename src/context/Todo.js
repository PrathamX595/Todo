import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (todoTitle) => {},
    updateTodo: (id, todoTitle) =>{},
    delTodo: (id) => {},
    toggleCompelete: (id) => {}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider