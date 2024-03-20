import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/AuthProvider'
import { toast } from 'react-hot-toast'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import StepThree from './ThirdStep'
import { MerchantSignupFormType } from '../../../utils/types/auth/merchantSignup'

const MultiStepForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<MerchantSignupFormType>({
    name: '',
    email: '',
    sku: '',
    password: '',
    social: {
      website: '',
      youtube: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
      reddit: ''
    }
  })

  const navigate = useNavigate()
  const { merchantSignup } = useAuth()

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name.startsWith('social.')) {
      const socialField = name.split('.')[1]
      setFormData((prevState) => ({
        ...prevState,
        social: {
          ...prevState.social,
          [socialField]: value
        }
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await merchantSignup(formData)
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
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <FirstStep
              formData={formData}
              handleFormChange={handleFormChange}
              nextStep={nextStep}
            />
          )}
          {step === 2 && (
            <SecondStep
              formData={formData}
              handleFormChange={handleFormChange}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 3 && <StepThree prevStep={prevStep} />}
        </form>
      </div>
    </div>
  )
}

export default MultiStepForm
