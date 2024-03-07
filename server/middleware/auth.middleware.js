import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
  try {
    const token = req.header('X-AUTH-TOKEN')

    if (!token) {
      return res
        .status(401)
        .json({ msg: 'Missing X-AUTH-TOKEN, authorization denied' })
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.userId = decodedData.userId
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

export default verifyToken
