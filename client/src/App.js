import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/auth/AuthProvider'
import PrivateRoute from './components/routing/PrivateRoute'
import Dashboard from './components/dashboard/Dashboard'
import Landing from './components/layouts/Landing'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import NavBar from './components/layouts/Navbar'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
