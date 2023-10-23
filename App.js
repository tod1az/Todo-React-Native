import Main from './src/Main'
import { TodoContextProvider } from './src/context/TodoContext'

export default function App() {
  return (
    <TodoContextProvider>
      <Main />
    </TodoContextProvider>
  )
}
