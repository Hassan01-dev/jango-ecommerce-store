import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import Dashboard from '../components/dashboard/Dashboard'
import AboutUs from '../components/about_us/AboutUs'
import ProductList from '../components/product/ProductList'
import MerchantLogin from '../components/auth/MerchantLogin'
import MerchantSignup from '../components/auth/MerchantSignup'

const publicRoutes = [{ path: 'about_us', component: AboutUs }]
const userPrivateRoutes = [{ path: 'products', component: ProductList }]
const merchantPrivateRoutes = [{ path: 'dashboard', component: Dashboard }]
const authRoutes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'merchant/login', component: MerchantLogin },
  { path: 'merchant/signup', component: MerchantSignup }
]

export { publicRoutes, userPrivateRoutes, merchantPrivateRoutes, authRoutes }
