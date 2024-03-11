import Input from '../../components/shared/CustomInputField'
import Button from '../../components/shared/CustomButton'
import SocialButton from '../../components/shared/SocialButton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthProvider'
import { toast } from 'react-hot-toast'
import { ReactComponent as GoogleIcon } from '../../assets/icons/google.svg'
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg'
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { signup } = useAuth()

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
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign up
        </h1>
        <form className="mt-6" onSubmit={handleSignup}>
          <Input
            id="name"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <SocialButton>
            <GoogleIcon />
          </SocialButton>
          <SocialButton>
            <GithubIcon />
          </SocialButton>
          <SocialButton>
            <TwitterIcon />
          </SocialButton>
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
