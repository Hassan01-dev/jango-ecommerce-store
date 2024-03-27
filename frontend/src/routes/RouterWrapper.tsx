import { Route, Routes, Navigate } from 'react-router-dom'
import Landing from '../components/landing/Landing'
import {
  publicRoutes,
  userPrivateRoutes,
  merchantPrivateRoutes,
  authRoutes
} from '.'
import { selectAuth } from '../redux/slices/authSlice'
import { useAppSelector } from '../hooks'

const RouterWrapper = () => {
  const { isAuthenticated, isMerchant } = useAppSelector(selectAuth)

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {publicRoutes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={<route.component />} />
        )
      })}
      {isAuthenticated
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
  )
}

export default RouterWrapper
