import { Box, Button, Heading } from '@chakra-ui/react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

const CalendarView = () => {
    const [tasks, setTasks] = useState([])
  
    useEffect(() => {
      const stored = localStorage.getItem('tasks')
      if (stored) setTasks(JSON.parse(stored))
    }, [])
  
    const events = tasks.filter(task => task.status !== 'done').map(task => ({
      title: task.title,
      date: task.date || new Date().toISOString().slice(0, 10),
    }))
  
    return (
      <Box p={4} maxW='4xl' mx='auto'>
        <Navbar/>
        <Heading mb={4}>Vista de Calendario</Heading>
        <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' events={events} />
      
      </Box>
      
    )
  }
  
  export default CalendarView
  