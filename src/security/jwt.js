const jwt = require('jsonwebtoken')
const createToken = async (id) =>  await jwt.sign(  {id}, process.env.PRIVATEHASH, { expiresIn: 86400}  )
const verifyToken = async (token, setDecoded) =>  await jwt.verify(  token, process.env.PRIVATEHASH, decoded  => setDecoded(decoded) ) 


module.exports ={
    createToken,
    verifyToken
}