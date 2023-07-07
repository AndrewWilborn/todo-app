import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {

    const [todoItems, setTodoItems] = useState();

    return (
        <main className="bg-violet-900 min-h-screen text-orange-50 px-4 py-8 text-center">
            <h1 className="text-3xl font-semibold mb-4">Todo List</h1>
            <AddTodo setTodoItems={setTodoItems}/>
            <TodoList todoItems={todoItems} setTodoItems={setTodoItems}/>
        </main>
    )
}