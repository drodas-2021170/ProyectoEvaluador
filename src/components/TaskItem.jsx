import { Box, Text, Button, Badge } from '@chakra-ui/react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom'

const TaskItem = ({ task }) => {
    const { dispatch, state } = useContext(TaskContext)
    const navigate = useNavigate()
  
    const handleDelete = () => {
      dispatch({ type: 'DELETE_TASK', payload: task.id })
      const updated = state.tasks.filter(t => t.id !== task.id)
      localStorage.setItem('tasks', JSON.stringify(updated))
    }
  
    const markDone = () => {
      const updatedTask = { ...task, status: 'done' }
      dispatch({ type: 'UPDATE_TASK', payload: updatedTask })
      const updatedList = state.tasks.map(t => t.id === task.id ? updatedTask : t)
      localStorage.setItem('tasks', JSON.stringify(updatedList))
    }
  
    return (
      <Box p={3} shadow='md' borderWidth='1px' mb={2}>
        <Text fontWeight='bold'>{task.title}</Text>
        <Badge colorScheme={task.status === 'done' ? 'green' : task.status === 'in-progress' ? 'yellow' : 'gray'}>
          {task.status}
        </Badge>
        <Button size='sm' ml={2} onClick={() => navigate(`/task/${task.id}`)}>Editar</Button>
        <Button size='sm' colorScheme='green' ml={2} onClick={markDone}>Marcar como completada</Button>
        <Button size='sm' colorScheme='red' ml={2} onClick={handleDelete}>Eliminar</Button>
      </Box>
    )
  }

export default TaskItem