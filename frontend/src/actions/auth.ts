import {
  AuthFormType,
  LoginFormType,
  SignupFormType
} from '../utils/types/auth'
import { MerchantSignupFormType } from '../utils/types/auth/merchantSignup'
import constansts from '../utils/constants'

const { API_URL } = constansts

const handleAuth = async (
  endpoint: string,
  body: AuthFormType | MerchantSignupFormType
) => {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const parsedRes = await res.json()

    if (res.ok) {
      return { success: true, data: parsedRes }
    } else {
      return { success: false, error: parsedRes.message || 'Server Error' }
    }
  } catch (err) {
    return { success: false, error: 'Server Error' }
  }
}

const loginAction = async (formData: LoginFormType, userType: string = '') => {
  const endpoint = userType === 'merchant' ? 'merchant/login' : 'login'
  return handleAuth(endpoint, formData)
}

const signupAction = async (formData: SignupFormType) => {
  return handleAuth('signup', formData)
}

const merchantSignupAction = async (formData: MerchantSignupFormType) => {
  return handleAuth('merchant/signup', formData)
}

export { loginAction, signupAction, merchantSignupAction }
