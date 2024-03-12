import { AuthProvider } from './hooks/AuthProvider'
import NavBar from './components/shared/Navbar'
import RouterWrapper from './routes/RouterWrapper'

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
