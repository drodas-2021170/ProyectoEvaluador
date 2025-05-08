import { useContext, useState, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Input, Button, Select } from '@chakra-ui/react'

const TaskForm = () => {
    const { state, dispatch } = useContext(TaskContext)
    const navigate = useNavigate()
    const { id } = useParams()
  
    const [task, setTask] = useState({ title: '', status: 'todo', date: '' })
  
    useEffect(() => {
      if (id) {
        const existing = state.tasks.find(t => t.id === id)
        if (existing) setTask(existing)
      }
    }, [id, state.tasks])
  
    const handleChange = e => {
      setTask({ ...task, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = e => {
      e.preventDefault()
      let updatedTasks
      if (id) {
        dispatch({ type: 'UPDATE_TASK', payload: task })
        updatedTasks = state.tasks.map(t => t.id === id ? task : t)
      } else {
        const newTask = { ...task, id: crypto.randomUUID() }
        dispatch({ type: 'ADD_TASK', payload: newTask })
        updatedTasks = [...state.tasks, newTask]
      }
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      navigate('/')
    }
  
    return (
      <Box p={4} maxW='md' mx='auto'>
        <form onSubmit={handleSubmit}>
          <Input
            name='title'
            value={task.title}
            onChange={handleChange}
            placeholder='Título de la tarea'
            mb={3}
          />
          <Select name='status' value={task.status} onChange={handleChange} mb={3}>
            <option value='todo'>Por hacer</option>
            <option value='in-progress'>En progreso</option>
            <option value='done'>Completada</option>
          </Select>
          <Input
            type='date'
            name='date'
            value={task.date}
            onChange={handleChange}
            mb={3}
          />
          <Button type='submit' colorScheme='blue'>Guardar</Button>
        </form>
      </Box>
    )
  }
  
export default TaskForm