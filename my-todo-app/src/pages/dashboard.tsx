import { useEffect, useState } from 'react'
import { getTodos } from '../services/todo'

interface Todo {
  id: string
  no: number
  title: string
  desc: string
  date: string
}

export default function Dashboard() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      const todosData = await getTodos()
      setTodos(todosData)
    }
    fetchTodos()
  }, [])

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}: {todo.description}</li>
        ))}
      </ul>
    </div>
  )
}
