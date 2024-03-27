import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle
} from 'flowbite-react'
import { selectAuth } from '../../redux/slices/authSlice'
import { logout } from '../../redux/slices/authSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const { isAuthenticated } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img src="/logo192.png" className="mr-3 h-6 sm:h-9" alt="React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Jango E-Commerce Store
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {isAuthenticated ? (
          <NavLink
            to="/"
            onClick={() => dispatch(logout())}
            className="hover:!text-purple-600"
          >
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? '!text-purple-600' : 'hover:!text-purple-600'
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? '!text-purple-600' : 'hover:!text-purple-600'
              }
              to="/merchant/login"
            >
              Merchant
            </NavLink>
          </>
        )}
      </NavbarCollapse>
    </Navbar>
  )
}

export default NavBar

// block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white hover:!text-purple-600
