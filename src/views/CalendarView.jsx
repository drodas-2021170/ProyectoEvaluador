import { Box, Button, Heading } from '@chakra-ui/react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
import { Link } from 'react-router-dom'

const CalendarView = () => {
    const [tasks, setTasks] = useState([])
  
    useEffect(() => {
      const stored = localStorage.getItem('tasks')
      if (stored) setTasks(JSON.parse(stored))
    }, [])
  
    const events = tasks.map(task => ({
      title: task.title,
      date: task.date || new Date().toISOString().slice(0, 10),
    }))
  
    return (
      <Box p={4} maxW='4xl' mx='auto'>
        <Link to='/'><Button colorScheme='green'>Task List</Button></Link>
        <Heading mb={4}>Vista de Calendario</Heading>
        <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' events={events} />
      
      </Box>
      
    )
  }
  
  export default CalendarView
  