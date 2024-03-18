import React, { useState, createContext, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import constansts from '../utils/constants'
import {
  AuthContextType,
  AuthFormType,
  LoginFormType,
  SignupFormType
} from '../utils/types/authContextTypes'

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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isMerchant, setIsMerchant] = useState<boolean>(false)

  useEffect(() => {
    // console.log("Auth Provider", isLoggedIn)

    const authData = Cookies.get('auth')

    if (authData) {
      console.log('UseEffect', JSON.parse(authData))
      setIsLoggedIn(true)
      // setIsMerchant(JSON.parse(authData).userType === 'merchant')
    }
  }, [])

  const handleAuth = async (endpoint: string, body: AuthFormType) => {
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

  const login = async (formData: LoginFormType, userType: string = '') => {
    const endpoint = userType === 'merchant' ? 'merchant/login' : 'login'
    return handleAuth(endpoint, formData)
  }

  const signup = async (formData: SignupFormType) => {
    return handleAuth('signup', formData)
  }

  const merchantSignup = async (email: string, password: string) => {
    return handleAuth('merchant/signup', { email, password })
  }

  const logout = () => {
    Cookies.remove('auth')
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isMerchant, login, logout, signup, merchantSignup }}
    >
      {children}
    </AuthContext.Provider>
  )
}
