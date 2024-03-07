import React, { useState, createContext, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:3001/api'
const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const authData = Cookies.get('auth')
    if (authData) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleAuth = async (endpoint, body) => {
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

  const login = async (email, password) => {
    return handleAuth('login', { email, password })
  }

  const signup = async (name, email, password) => {
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
