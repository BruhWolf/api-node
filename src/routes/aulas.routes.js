
const {} = require('../validation');
const {verifyToken} = require('../security/jwt')
const jwt = require('jsonwebtoken');
const { response } = require('express');



const auth = (req, res, next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader) return res.status(401).json({error: "No token provided"})
    else{
        const parts = authHeader.split(' ');
        if(parts.length !== 2) return res.status(401).json({error: "Token error"})
        else{
            const [ scheme, token] = parts;
            
            if(!/^Bearer$/i.test(scheme)) return res.status(401).json({error: "Token malformated"})
            else{
                jwt.verify(  token, process.env.PRIVATEHASH, (err, decoded)  => {
                    if(err) return res.status(401).json({error: "Invalid Token"})
                    req.userID = decoded.id
                    return next()
                } ) 
            }
        }
    }

}


const aulas = (router) => {


    router.get('/aulas',auth, (request,response) => {

        return response.json({ok:true , id: request.userID})
    })



}
module.exports = aulas;