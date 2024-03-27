import Input from '../shared/CustomInputField'
import Button from '../shared/CustomButton'
import SocialButton from '../shared/SocialButton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { GoogleIcon, GithubIcon, TwitterIcon } from '../../assets/icons'
import { SignupFormType } from '../../utils/types/auth'
import { signup } from '../../redux/slices/authSlice'
import { signupAction } from '../../actions/auth'
import { useAppDispatch } from '../../hooks'

const Signup = () => {
  const [formData, setFormData] = useState<SignupFormType>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const { firstName, lastName, email, password } = formData

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { success, data, error } = await signupAction(formData)
      if (success) {
        const { userType, token } = data
        dispatch(signup({ token, userType }))
        navigate('/dashboard')
      } else {
        toast.error(error)
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-[90vh] overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign up
        </h1>
        <form className="mt-6" onSubmit={handleSignup}>
          <div className="flex gap-4">
            <Input
              id="firstName"
              label="First Name"
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleFormChange}
              required
            />
            <Input
              id="lastName"
              label="Last Name"
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleFormChange}
              required
            />
          </div>
          <Input
            id="email"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleFormChange}
            required
          />
          <Input
            id="password"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleFormChange}
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
          <SocialButton icon={GoogleIcon} />
          <SocialButton icon={GithubIcon} />
          <SocialButton icon={TwitterIcon} />
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
