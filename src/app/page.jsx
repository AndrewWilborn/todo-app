import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {

    const [todoItems, setTodoItems] = useState();

    return (
        <main>
            <h1>Todo List</h1>
            <AddTodo setTodoItems={setTodoItems}/>
            <TodoList todoItems={todoItems} setTodoItems={setTodoItems}/>
        </main>
    )
}