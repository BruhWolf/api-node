class Database {
  data = [
      {
        "id": "1",
        "name": "bruno costa",
        "email": "business.brunocosta@gmail.com"
      },
      {
        "id": "2",
        "name": "prisyla costa",
        "email": "business.brunocosta@gmail.com"
      },
      {
        "id": "3",
        "name": "anderson costa",
        "email": "business.brunocosta@gmail.com"
      }
    ]
    getUsers = () => { 

      const sortById  = this.data.sort( (a,b)=>{
          if(a.id < b.id) return -1;
          if(a.id > b.id) return 1;
          return 0;
          })
      return sortById
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
}
 
module.exports = new Database()