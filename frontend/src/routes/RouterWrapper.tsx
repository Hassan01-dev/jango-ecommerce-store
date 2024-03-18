import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'
import Landing from '../components/landing/Landing'
import { publicRoutes, privateRoutes, authRoutes } from '.'

const RouterWrapper = () => {
  const { isLoggedIn } = useAuth()
  console.log('routes wrapper', isLoggedIn)

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
          ? privateRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              )
            })
          : authRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              )
            })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterWrapper
