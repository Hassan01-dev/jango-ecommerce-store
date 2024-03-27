import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import Cookies from 'js-cookie'

type authInitialStateType = {
  isAuthenticated: boolean
  isMerchant: boolean
  isLoading: boolean
}

type authPayloadType = {
  token: string | null
  userType: string | null
}

const initialState: authInitialStateType = {
  isAuthenticated: false,
  isMerchant: false,
  isLoading: true
}

const setCookie = (data: authPayloadType) => {
  const expirationTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  Cookies.set('auth', JSON.stringify(data), {
    expires: expirationTime
  })
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initialSet: (state, action: PayloadAction<authPayloadType>) => {
      console.log('initialset in authslice')
      state.isAuthenticated = action.payload.token ? true : false
      state.isMerchant = !!(
        action.payload.userType && action.payload.userType === 'merchant'
      )
      state.isLoading = false
    },
    login: (state, action: PayloadAction<authPayloadType>) => {
      state.isAuthenticated = true
      state.isMerchant = action.payload.userType === 'merchant'
      setCookie(action.payload)
    },
    signup: (state, action: PayloadAction<authPayloadType>) => {
      state.isAuthenticated = true
      state.isMerchant = false
      setCookie(action.payload)
    },
    merchantSignup: (state, action: PayloadAction<authPayloadType>) => {
      state.isAuthenticated = true
      state.isMerchant = true
      setCookie(action.payload)
    },
    logout: (state) => {
      Cookies.remove('auth')
      state.isAuthenticated = false
    }
  }
})

export const { initialSet, login, signup, merchantSignup, logout } =
  authSlice.actions
export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
