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

const Login = () => {
  const [formEmail, setFormEmail] = useState<string>('')
  const [formPassword, setFormPassword] = useState<string>('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { success } = await login(formEmail, formPassword)
      if (success) {
        navigate('/dashboard')
      } else {
        toast.error('Error logging in')
      }
    } catch {
      toast.error('Server error')
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-[90vh] overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <Input
            id="email"
            label="Email"
            type="email"
            value={formEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormEmail(e.target.value)
            }
            required
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={formPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormPassword(e.target.value)
            }
            required
          />
          <a
            href="/forgot_password"
            className="text-xs text-purple-600 hover:underline"
          >
            Forget Password?
          </a>
          <div className="mt-6">
            <Button type="submit">Login</Button>
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
          Don't have an account?{' '}
          <a
            href="/signup"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
