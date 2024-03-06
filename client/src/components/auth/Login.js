import { Button, Label, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { toast } from 'react-hot-toast'

const Login = () => {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      let res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      const parsedRes = await res.json()
      if (res.status === 200) {
        toast.success('User Logged In Successfully')
        login(parsedRes)
        navigate('/dashboard')
      } else {
        toast.error('Error while Logging the User')
        setError(parsedRes.message)
      }
    } catch (err) {
      setError(err.error)
    }
  }

  return (
    <form
      className="flex max-w-md flex-col gap-4 mx-auto"
      onSubmit={handleFormSubmit}
    >
      <h3>{error}</h3>
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
