import React, {
  useState,
  createContext,
  useContext,
  useLayoutEffect,
  useMemo
} from 'react'
import Cookies from 'js-cookie'
import constansts from '../utils/constants'
import {
  AuthContextType,
  AuthFormType,
  LoginFormType,
  SignupFormType
} from '../utils/types/auth'
import { MerchantSignupFormType } from '../utils/types/auth/merchantSignup'

const { API_URL } = constansts
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMerchant, setIsMerchant] = useState(false)

  useLayoutEffect(() => {
    const authData = Cookies.get('auth')

    if (authData) {
      setIsLoggedIn(true)
      setIsMerchant(JSON.parse(authData).userType === 'merchant')
    }
    setIsLoading(false)
  }, [])

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
        const expirationTime = new Date(
          new Date().getTime() + 24 * 60 * 60 * 1000
        )
        Cookies.set('auth', JSON.stringify(parsedRes), {
          expires: expirationTime
        })
        setIsLoggedIn(true)
        setIsMerchant(parsedRes.userType === 'merchant')
        return { success: true }
      } else {
        return { success: false, error: parsedRes.message || 'Server Error' }
      }
    } catch (err) {
      return { success: false, error: 'Server Error' }
    }
  }

  const providerValues = useMemo<AuthContextType>(
    () => ({
      isLoggedIn,
      isMerchant,
      isLoading,
      login: async (formData: LoginFormType, userType: string = '') => {
        const endpoint = userType === 'merchant' ? 'merchant/login' : 'login'
        return handleAuth(endpoint, formData)
      },
      logout: () => {
        Cookies.remove('auth')
        setIsLoggedIn(false)
      },
      signup: async (formData: SignupFormType) => {
        return handleAuth('signup', formData)
      },
      merchantSignup: async (formData: MerchantSignupFormType) => {
        return handleAuth('merchant/signup', formData)
      }
    }),
    [isLoggedIn, isMerchant, isLoading]
  )

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  )
}
