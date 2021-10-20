import './Todo.css';
import {useState} from "react";
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';

const Todo =()=> {
    const [getTodos, setTodos] = useState ([
        {id: 1, title: 'eat'},
        {id: 2, title: 'sleep' },
        {id: 3, title: 'code'}
    ])

    const eventCreateTodo = (todo) =>{
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }
    return(
        <div>
            <h3>
                Todo list
            </h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos}  />
        </div>
    )
}

export default Todo;