import { Button, Label, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthProvider'
import { toast } from 'react-hot-toast'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await login(email, password)
      if (response.success) {
        toast.success('User Logged In Successfully')
        navigate('/dashboard')
      } else {
        toast.error('Error while Logging the User')
        console.error(response.error)
      }
    } catch (err) {
      toast.error('Server Error')
      console.error(err)
    }
  }

  return (
    <form
      className="flex max-w-md flex-col gap-4 mx-auto"
      onSubmit={handleLogin}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Login
