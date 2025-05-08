export default function taskReducer(state, action) {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] }
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(t => t.id === action.payload.id ? action.payload : t)
        }
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(t => t.id !== action.payload)
        }
      case 'LOAD_TASKS':
        return {
          ...state,
          tasks: action.payload
        }
      default:
        return state
    }
  }
  