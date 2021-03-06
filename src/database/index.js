class Database {
  data = [
      {
        "id": "1",
        "name": "bruno costa",
        "email": "business.brunocosta@gmail.com",
        "password": "$2a$10$jS0ossfu4yA8PVQuhh2TNuiVhGQ/aGJgZRRt38CJ7kFT1rs2M/f1q"
      },
      {
        "id": "2",
        "name": "antonia catarina",
        "email": "catarina@wolfplace.solutions",
        "password": "$2a$10$LYkESZ5ckRGf1PW25cwrZ.UygqiLgNcODjqpBdo/cFhrB4tq6MTSe"

      },
      {
        "id": "3",
        "name": "astrogildo godofredo",
        "email": "contato.godofredo@wolfplace.solutions",
        "password":  "$2a$10$R2ouXM1nLg018VzCvFSfe.kaID53i9HyF8gERv6IY8pNiW1gPJzVe"

      }
    ]
    getUsers = () => { 

      const sortById  = this.data.sort( (a,b)=>{
          if(a.id < b.id) return -1;
          if(a.id > b.id) return 1;
          return 0;
          })
      return sortById.map(user=>({...user}))
  }
  createNewUser = (user)=>{
      const newID = (this.data.length + 1).toString()
      const newUser = {id:newID, ...user}
      this.data.push(newUser)
      return newUser
  }
  updateUser = (target,newUserContent) => {
      const userToUpdate = this.data.find(user => user.id === target)
      const updatedUser = {...userToUpdate, ...newUserContent}
      this.data.splice(this.data.indexOf(userToUpdate),1)
      this.data.push(updatedUser)
      return updatedUser
  }
  updateUserByID = (target,newUserContent) => {
      const userToUpdate = this.data.find(user => user.id === target)
      const updatedUser = {...userToUpdate, ...newUserContent}
      this.data.splice(this.data.indexOf(userToUpdate),1)
      this.data.push(updatedUser)
      return updatedUser
  }
  deleteUser = (target)=>{
      const userToDelete = this.data.find( user => user.id === target)
      if(userToDelete){
           this.data.splice(this.data.indexOf(userToDelete),1)
            return {message:`The user ${target}  has been Deleted`}
          }
      if(!userToDelete){ 
          return {message:`The user ${target}  does not exists`}
          }
  }
  emailExists(email){
      return this.data.find(user=>user.email === email) ? true : false
  }
  getUserByID(id){
    const user  = this.data.find(user => user.id === id)
    return {...user, password: undefined}
  }
  getUserByEmail(email){
    const user  = this.data.find(user => user.email === email)
    if(!user) return undefined
    return {...user}
  }
}
 
module.exports = new Database()