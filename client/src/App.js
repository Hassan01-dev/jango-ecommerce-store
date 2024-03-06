import { AuthProvider } from './components/auth/AuthProvider'
import NavBar from './components/layouts/Navbar'
import RouterWrapper from './components/routing/RouterWrapper'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <NavBar />
      <RouterWrapper />
    </AuthProvider>
  )
}

export default App
