import Cookies from 'js-cookie'
import constansts from '../utils/constants'

const { API_URL } = constansts

const fetchAllProducts = async () => {
  try {
    const authToken = Cookies.get('auth') as any
    const { token } = await JSON.parse(authToken)
    const headers: HeadersInit = authToken ? { 'X-AUTH-TOKEN': token } : {}

    const res = await fetch(`${API_URL}/products`, {
      method: 'GET',
      headers: headers
    })

    const parsedRes = await res.json()

    if (res.ok) {
      return { success: true, data: parsedRes }
    } else {
      return { success: false, error: parsedRes.message || 'Server Error' }
    }
  } catch (err) {
    return { success: false, error: 'Server Error' }
  }
}

export { fetchAllProducts }
