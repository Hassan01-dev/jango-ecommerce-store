import { Button, Label, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthProvider'
import { toast } from 'react-hot-toast'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { signup } = useAuth() // Assuming you have a signup function in AuthProvider

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      const response = await signup(name, email, password)
      if (response.success) {
        toast.success('User Signed Up Successfully')
        navigate('/dashboard')
      } else {
        toast.error('Error while Signing Up the user')
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
      onSubmit={handleSignup}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your Email" />
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

export default Signup
