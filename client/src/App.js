import { AuthProvider } from './components/auth/AuthProvider'
import NavBar from './components/layouts/Navbar'
import RouterWrapper from './components/routing/RouterWrapper'

const App = () => {
  return (
    <AuthProvider>
      <NavBar />
      <RouterWrapper />
    </AuthProvider>
  )
}

export default App
