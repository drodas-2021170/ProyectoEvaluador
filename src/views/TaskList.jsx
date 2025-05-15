import { useContext, useEffect, useState,useRef } from 'react'
import { TaskContext } from '../context/TaskContext'
import { Box, Heading, Button, VStack,HStack } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import TaskItem from '../components/TaskItem'
import FilterBar from '../components/FilterBar'
import { Navbar } from '../components/Navbar'

const TaskList = () => {
    const { state, dispatch } = useContext(TaskContext)
    const [filter, setFilter] = useState('all')
    const navigate = useNavigate()
  
    useEffect(() => {
      if (state.tasks.length === 0) {
        const stored = localStorage.getItem('tasks')
        if (stored) {
          const parsed = JSON.parse(stored)
          dispatch({ type: 'LOAD_TASKS', payload: parsed })
        }
      }
    }, [dispatch, state.tasks.length])
  
    
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }, [state.tasks])
  
    const filteredTasks = state.tasks.filter(task =>
      filter === 'all' ? true : task.status === filter
    )
  
    const clearAll = () => {
      localStorage.removeItem('tasks')
      window.location.reload()
    }
  
    return (

      <Box p={4} maxW='xl' mx='auto'>
        <Navbar/>

        <Heading mb={4}>Tareas</Heading>
        <HStack spacing={4} mb={3}>
          <Button onClick={() => navigate('/task')}>Nueva Tarea</Button>
          <Button colorScheme='red' onClick={clearAll}>Eliminar todas</Button>
        </HStack>
        <FilterBar filter={filter} setFilter={setFilter} />
        <VStack>
          {filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </VStack>
      </Box>
    )
  }

  export default TaskList