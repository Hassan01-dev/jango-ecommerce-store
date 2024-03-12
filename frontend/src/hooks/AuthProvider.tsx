import React, { useState, createContext, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import constansts from '../utils/constants'
import { AuthContextType, AuthFormType } from '../utils/types/authContextTypes'

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

  useEffect(() => {
    const authData = Cookies.get('auth')
    if (authData) {
      setIsLoggedIn(true)
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
        return { success: true }
      } else {
        return { success: false, error: parsedRes.message || 'Server Error' }
      }
    } catch (err) {
      console.error(err)
      return { success: false, error: 'Server Error' }
    }
  }

  const login = async (email: string, password: string) => {
    return handleAuth('login', { email, password })
  }

  const signup = async (name: string, email: string, password: string) => {
    return handleAuth('signup', { name, email, password })
  }

  const logout = () => {
    Cookies.remove('auth')
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  )
}
