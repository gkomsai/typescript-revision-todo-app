import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Header from './Header'
import TodoInput from './TodoInput'
import TodoList from './TodoList';
// import TodoItem from './TodoItem';

export interface TodoItems{
    id: number;
    title: string;
    status: boolean;
}

const Todos = () => {
    const [todos, setTodos] = useState<TodoItems[]>([]);
    const addTodos = (title: string) => {
        if(title){
            const payload = {
                id: todos.length + 1,
                title, 
                status: false
            }
            // setTodos([...todos, payload])
            axios.post("http://localhost:8080/todos", payload).then(getTodos);
            
        }
    }

    const getTodos = () => {
        axios.get('http://localhost:8080/todos')
        .then((response) => {
            setTodos(response.data)
        })
    }

    useEffect(() => {
        getTodos()
    },[])
  return (
    <div>
        <Header label="Todos" />
      <TodoInput addTodos={addTodos} />
        {todos.length > 0 &&
        todos.map((item ) => {
            return <TodoList key={item.id} {...item}/>
        })}
    </div>
  )
}

export default Todos