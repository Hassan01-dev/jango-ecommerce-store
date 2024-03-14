import { Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { AuthenticatedRequest } from '../utils/types/controller/authControllerTypes'

const verifyToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('X-AUTH-TOKEN')

    if (!token) {
      return res
        .status(401)
        .json({ msg: 'Missing X-AUTH-TOKEN, authorization denied' })
    }

    const secret_key = process.env.JWT_SECRET_KEY || ''
    const decodedData = jwt.verify(token, secret_key) as JwtPayload
    req.userId = decodedData.userId
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

export default verifyToken
