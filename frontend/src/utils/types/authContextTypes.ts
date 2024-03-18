export type AuthContextType = {
  isLoggedIn: boolean
  isMerchant: boolean
  isLoading: boolean
  login: (
    formData: LoginFormType,
    userType?: string
  ) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  signup: (
    formData: SignupFormType
  ) => Promise<{ success: boolean; error?: string }>
  merchantSignup: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>
}

export type AuthFormType = {
  firstName?: string
  lastName?: string
  email: string
  password: string
}

export type SignupFormType = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type LoginFormType = {
  email: string
  password: string
}
