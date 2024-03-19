import Input from '../shared/CustomInputField'
import Button from '../shared/CustomButton'
import SocialButton from '../shared/SocialButton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthProvider'
import { toast } from 'react-hot-toast'
import {
  GoogleIcon,
  GithubIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  WebLinkIcon,
  YouTubeIcon,
  LinkedInIcon
} from '../../assets/icons'
import { MerchantSignupFormType } from '../../utils/types/authContextTypes'

const MerchantSignup = () => {
  const [formData, setFormData] = useState<MerchantSignupFormType>({
    name: '',
    sku: '',
    email: '',
    password: ''
  })

  const { name, sku, email, password } = formData

  const navigate = useNavigate()
  const { merchantSignup } = useAuth()

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await merchantSignup(email, password)
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
    <div className="relative flex flex-col justify-center min-h-[90vh] overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Merchant Sign up
        </h1>
        <form className="mt-6" onSubmit={handleSignup}>
          <Input
            id="Fullname"
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleFormChange}
            required
          />
          <Input
            id="Sku"
            label="Sku"
            type="text"
            name="sku"
            value={sku}
            onChange={handleFormChange}
            required
          />
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
          <h3>Social Links</h3>
          <Input
            id="website"
            type="text"
            name="website"
            value=""
            icon={WebLinkIcon}
            onChange={handleFormChange}
            required
          />

          <Input
            id="youtube"
            type="text"
            name="youtube"
            value=""
            icon={YouTubeIcon}
            onChange={handleFormChange}
            required
          />

          <Input
            id="twitter"
            type="text"
            name="twitter"
            value=""
            icon={TwitterIcon}
            onChange={handleFormChange}
            required
          />

          <Input
            id="facebook"
            type="text"
            name="facebook"
            value=""
            icon={FacebookIcon}
            onChange={handleFormChange}
            required
          />

          <Input
            id="linkedin"
            type="text"
            name="linkedin"
            value=""
            icon={LinkedInIcon}
            onChange={handleFormChange}
            required
          />

          <Input
            id="instagram"
            type="text"
            name="instagram"
            value=""
            icon={InstagramIcon}
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

export default MerchantSignup
