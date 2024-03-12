import Input from '../shared/CustomInputField'
import Button from '../shared/CustomButton'
import SocialButton from '../shared/SocialButton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthProvider'
import { toast } from 'react-hot-toast'
import googleIconPath from '../../assets/icons/google.svg'
import githubIconPath from '../../assets/icons/github.svg'
import twitterIconPath from '../../assets/icons/twitter.svg'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmailAddress] = useState('')
  const [password, setPasswordValue] = useState('')

  const navigate = useNavigate()
  const { signup } = useAuth()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await signup(username, email, password)
      if (response.success) {
        navigate('/dashboard')
      } else {
        toast.error('Error while Signing Up the user')
      }
    } catch {
      toast.error('Server Error')
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign up
        </h1>
        <form className="mt-6" onSubmit={handleSignup}>
          <Input
            id="username"
            label="Name"
            type="text"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            required
          />
          <Input
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailAddress(e.target.value)}
            required
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)}
            required
          />
          <div className="mt-6">
            <Button type="submit">Signup</Button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <SocialButton iconPath={googleIconPath} />
          <SocialButton iconPath={githubIconPath} />
          <SocialButton iconPath={twitterIconPath} />
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {' '}
          Already have an account?{' '}
          <a
            href="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signup
