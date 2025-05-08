import { createContext, useEffect, useReducer } from 'react'
import taskReducer from './taskReducer'

export const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const storedTasks = localStorage.getItem('tasks')
  const initialState = {
    tasks: storedTasks ? JSON.parse(storedTasks) : []
  }

  const [state, dispatch] = useReducer(taskReducer, initialState)

  // Guardar en localStorage cada vez que cambia el estado global
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  }, [state.tasks])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
export default TaskProvider