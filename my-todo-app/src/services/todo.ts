import { apiClient } from '../utils/apiClient'

// services/todo.ts

export const getTodos = async () => {
  try {
    const response = await apiClient.get('/todo/all')
    return response.data.data
  } catch (error) {
    console.error('Error fetching todos:', error)
    return []
  }
}


export async function createTodo(title: string, description: string) {
  try {
    const response = await apiClient.post('/todo', { title, description })
    return response.data
  } catch (error) {
    console.error('Failed to post todos:', error)
    throw error
  }
}

export async function updateTodo(id: string, title: string, description: string) {
  try {
    const response = await apiClient.patch(`/todo/${id}`, { title, description })
    return response.data
  } catch (error) {
    console.error('Failed to patch todos:', error)
    throw error
  }
}

export async function deleteTodo(id: string) {
  try {
    const response = await apiClient.delete(`/todo/${id}`)
    return response.data
  } catch (error) {
    console.error('Failed to delete todos:', error)
    throw error
  }
}
