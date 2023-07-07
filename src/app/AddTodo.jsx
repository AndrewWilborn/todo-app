import { useContext } from "react"
import { AuthContext } from "../App"

export default function AddTodo({ setTodoItems }) {

    const { user } = useContext(AuthContext)

    const addNewItem = (e) => {
        e.preventDefault();
        if(!e.target.todo.value){
            return;
        }
        const newTodoItem = {
            uid: user.uid,
            title: e.target.todo.value
        }
        fetch(`https://todo-c11.web.app/tasks/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newTodoItem),
        })
            .then(() => {
                fetch(`https://todo-c11.web.app/tasks/${user.uid}`)
                    .then(res => res.json())
                    .then(setTodoItems)
                e.target.todo.value = ""
            })
            .catch(alert);
    }

    return (
        <section>
            <form onSubmit={addNewItem}>
                <input type="text" name="todo" />
                <input type="submit" value="Add" />
            </form>
        </section>
    )
}