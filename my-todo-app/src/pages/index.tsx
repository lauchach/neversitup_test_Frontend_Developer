import { useEffect, useState } from 'react';
import { getTodos } from '../services/todo';
import { login } from '../services/auth';
import Link from 'next/link';

interface Todo {
  id: string;
  no: number;
  title: string;
  description: string;
  updated_at: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function handleLoginAndFetchTodos() {
      try {
        await login('admin', 'admin');
        const todoList = await getTodos();
        setTodos(todoList);
      } catch (error) {
        console.error('Error during login or fetching todos', error);
      }
    }
    handleLoginAndFetchTodos();
  }, []);

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
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#fff', borderTop: '1px solid #ccc' }}>
<div className="fixed-footer">
  <Link href="/new-task" passHref>
    <button>Done Task</button>
  </Link>
  <Link href="/new-task" passHref>
    <button>All Task</button>
  </Link>
  <Link href="/new-task" passHref>
    <button>Create Task</button>
  </Link>
</div>

      </div>
    </div>
  );
}


