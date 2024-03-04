import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'

const PrivateRoute = ({ component: Component }) => {
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? <Component /> : <Navigate to="/login" />
}

export default PrivateRoute
