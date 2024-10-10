import { useEffect, useState } from 'react'
import { getTodos } from '../services/todo'
import { login } from '../services/auth'
import Link from 'next/link'
import '../styles/styles.module.css'

interface Todo {
  id: string
  no: number
  title: string
  description: string
  updated_at: string
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function handleLoginAndFetchTodos() {
      try {
        await login('admin', 'admin')
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
      <h1>Dashboard</h1>
      {/* <Calendar /> */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className={`icon todo-icon-${todo.no % 4 + 1}`}>
              {todo.no}
            </div>
            <div className="right-content">
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <small className="date">{todo.updated_at}</small>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '10px'}}>
        <Link href="/new-task" passHref>
          <button style={buttonStyle}>Done Task</button>
        </Link>
        <Link href="/new-task" passHref>
          <button style={buttonStyle}>All Task</button>
        </Link>
        <Link href="/new-task" passHref>
          <button style={buttonStyle}>Create Task</button>
        </Link>
      </div>
      <div className="fixed-footer">
</div>

    </div>
  )
}

const buttonStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50px', // ปรับให้กลมขึ้น
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
}


