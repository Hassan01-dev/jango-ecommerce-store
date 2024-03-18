import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'
import Landing from '../components/landing/Landing'
import {
  publicRoutes,
  userPrivateRoutes,
  merchantPrivateRoutes,
  authRoutes
} from '.'
import Loader from '../components/shared/Loader'

const RouterWrapper = () => {
  const { isLoggedIn, isLoading, isMerchant } = useAuth()

  if (isLoading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {publicRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          )
        })}
        {isLoggedIn
          ? isMerchant
            ? merchantPrivateRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))
            : userPrivateRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))
          : authRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterWrapper
