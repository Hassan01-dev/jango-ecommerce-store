export type AuthContextType = {
  isLoggedIn: boolean
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  signup: (
    name: string,
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>
}

export type AuthFormType = {
  name?: string
  email: string
  password: string
}
