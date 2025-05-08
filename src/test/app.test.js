import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import TaskForm from '../components/TaskForm'
import TaskItem from '../components/TaskItem'
import TaskList from '../components/TaskList'
import { ChakraProvider } from '@chakra-ui/react'

describe('<TaskForm />', () => {
    test('Deberia renderizar el formulario de tareas', () => {
        render(
        <ChakraProvider>
            <TaskForm />
        </ChakraProvider>)
    })
})


  