import { useLayoutEffect } from 'react'
import NavBar from './components/shared/Navbar'
import RouterWrapper from './routes/RouterWrapper'
import { Toaster } from 'react-hot-toast'
import Cookies from 'js-cookie'
import { useAppDispatch, useAppSelector } from './hooks'
import { selectAuth } from './redux/slices/authSlice'
import Loader from './components/shared/Loader'
import { initialSet } from './redux/slices/authSlice'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const { isLoading } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    const authData = Cookies.get('auth')

    if (authData) {
      const { token, userType } = JSON.parse(authData)
      dispatch(initialSet({ token, userType }))
    } else {
      dispatch(initialSet({ token: null, userType: null }))
    }
  }, [dispatch])

  if (isLoading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <NavBar />
      <RouterWrapper />
    </BrowserRouter>
  )
}

export default App
