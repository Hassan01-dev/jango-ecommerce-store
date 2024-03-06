import React, { useMemo } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from 'flowbite-react'
import { useAuth } from '../../hooks/AuthProvider'

const NavBar = () => {
  const { isLoggedIn, logout } = useAuth()

  const currentPath = useMemo(() => window.location.pathname, [])

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img
          src="/logo192.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Jango E-Commerce Store
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {isLoggedIn ? (
          <NavbarLink onClick={logout && logout} className="cursor-pointer">
            Logout
          </NavbarLink>
        ) : (
          <>
            <NavbarLink href="/login" active={currentPath === '/login'}>
              Login
            </NavbarLink>
            <NavbarLink href="/signup" active={currentPath === '/signup'}>
              Signup
            </NavbarLink>
          </>
        )}
      </NavbarCollapse>
    </Navbar>
  )
}

export default NavBar
