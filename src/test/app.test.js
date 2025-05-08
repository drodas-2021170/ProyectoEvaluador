import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import TaskForm from '../components/TaskForm'
import TaskItem from '../components/TaskItem'
import TaskList from '../components/TaskList'


describe('<TaskForm />', () => {
  test('Renderiza TaskForm y envía una nueva tarea', () => {
  render(<TaskForm />)

  const titleInput = screen.getByPlaceholderText('Título de la tarea')
  const submitButton = screen.getByText('Guardar')

  fireEvent.change(titleInput, { target: { value: 'Tarea de prueba' } })
  fireEvent.click(submitButton)

  expect(titleInput.value).toBe('Tarea de prueba')
  })
})

describe('<TaskItem/>',()=>{
// Test TaskItem
test('Renderiza TaskItem y elimina una tarea', () => {
  render(<TaskItem task={{ id: '1', title: 'Tarea de prueba', status: 'todo' }} />)

  const deleteButton = screen.getByText('Eliminar')
  fireEvent.click(deleteButton)

  expect(deleteButton).toBeInTheDocument()
})
})


describe('<TaskList />', () => {
test('Renderiza TaskList y muestra las tareas', () => {
  render(<TaskList />)

  const taskItem = screen.getByText('Tarea de prueba')
  expect(taskItem).toBeInTheDocument()
})
})



  