import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import TaskProvider from './context/TaskContext'
import TaskList from './views/TaskList'
import CalendarView from './views/CalendarView'
import TaskForm from './components/TaskForm'


function App() {
  return (
    <ChakraProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/calendar' element={<CalendarView/>} />
            <Route path='/task/:id?' element={<TaskForm />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </ChakraProvider>
  )
}

export default App