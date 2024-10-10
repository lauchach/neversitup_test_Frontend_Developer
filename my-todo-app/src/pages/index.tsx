// pages/index.tsx
import { useEffect, useState } from 'react'
import { getTodos } from '../services/todo'
import { login } from '../services/auth'

interface Todo {
  id: string
  no: number
  title: string
  desc: string
  date: string
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function handleLoginAndFetchTodos() {
      try {
        // Perform login and store the token
        await login('admin', 'admin') // Replace with actual credentials

        // Fetch todos after successful login
        const todoList = await getTodos()
        setTodos(todoList)
      } catch (error) {
        console.error('Error during login or fetching todos', error)
      }
    }
    handleLoginAndFetchTodos()
  }, [])

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
            <small>{todo.date}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
