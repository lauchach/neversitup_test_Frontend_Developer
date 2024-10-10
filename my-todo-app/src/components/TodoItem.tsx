interface TodoProps {
  todo: {
    id: string
    no: number
    title: string
    desc: string
    date: string
  }
}

export default function TodoItem({ todo }: TodoProps) {
  return (
    <li>
      {todo.no}. {todo.title} - {todo.desc} (Created: {todo.date})
    </li>
  )
}
