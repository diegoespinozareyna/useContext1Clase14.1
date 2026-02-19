import Dashboard from "./components/Dashboard"
import LoginForm from "./components/LoginForm"
import { useAuth } from "./contexts/AuthContext"

function App() {

  const { user } = useAuth()

  console.log("El estado global es: ", user)

  return (
    <>
      {
        user === null ?
          <LoginForm />
          :
          <Dashboard />
      }
    </>
  )
}

export default App
