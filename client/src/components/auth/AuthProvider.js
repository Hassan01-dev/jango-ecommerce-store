import React, { useState, createContext, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'

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

  const login = (res) => {
    const expirationTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    Cookies.set('auth', JSON.stringify(res), {
      expires: expirationTime
    })
    setIsLoggedIn(true)
  }

  const logout = () => {
    Cookies.remove('auth')
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
