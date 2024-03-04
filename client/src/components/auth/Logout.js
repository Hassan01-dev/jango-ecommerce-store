import { useAuth } from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  )
}

export default Logout
