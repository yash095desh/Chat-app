import jwt from 'jsonwebtoken'

export const genratetoken = (userId)=>{
 const token = jwt.sign({id:userId},process.env.JWTKEY,{expiresIn:'30d'})
 return token
}