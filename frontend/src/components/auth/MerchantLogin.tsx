import Input from '../shared/CustomInputField'
import Button from '../shared/CustomButton'
import SocialButton from '../shared/SocialButton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { GoogleIcon, GithubIcon, TwitterIcon } from '../../assets/icons'
import { LoginFormType } from '../../utils/types/auth'
import { login } from '../../redux/slices/authSlice'
import { loginAction } from '../../actions/auth'
import { useAppDispatch } from '../../hooks'

const MerchantLogin = () => {
  const [formData, setFormData] = useState<LoginFormType>({
    email: '',
    password: ''
  })
  const { email, password } = formData

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { success, data, error } = await loginAction(formData, 'merchant')
      if (success) {
        const { userType, token } = data
        dispatch(login({ token, userType }))
        navigate('/products')
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
          Merchant Sign in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
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
          <p className="flex justify-between">
            <a
              href="/forgot_password"
              className="text-xs text-purple-600 hover:underline"
            >
              Forget Password?
            </a>
            <a
              href="/merchant/login"
              className="text-xs text-purple-600 hover:underline"
            >
              Merchant Account?
            </a>
          </p>

          <div className="mt-6">
            <Button type="submit">Login</Button>
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
          Ready to boost your business?{' '}
          <a
            href="/merchant/signup"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default MerchantLogin
