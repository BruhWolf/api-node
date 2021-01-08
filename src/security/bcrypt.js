const bcrypt = require('bcryptjs')

const compare = async  (password,userPassword) => await bcrypt.compare(password,userPassword)
const createHash = (senha,sendHash) => {
            bcrypt.hash( senha, 10, (err,hash)=>{ sendHash(hash)})
}

module.exports = {
    compare,
    createHash
}