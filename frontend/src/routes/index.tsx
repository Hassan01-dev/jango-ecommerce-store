import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import Dashboard from '../components/dashboard/Dashboard'
import AboutUs from '../components/about_us/AboutUs'

const publicRoutes = [{ path: 'about_us', component: AboutUs }]
const privateRoutes = [{ path: 'dashboard', component: Dashboard }]
const authRoutes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup }
]

export { publicRoutes, privateRoutes, authRoutes }
