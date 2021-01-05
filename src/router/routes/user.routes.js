
const initialData = {
    id: '1',
    name: 'bruno costa',
    email: 'business.brunocosta@gmail.com'
}

const data = [
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
 const getUsers = async (request,response) => { 

    const sortById  = data.sort( (a,b)=>{
        if(a.id < b.id) return -1;
        if(a.id > b.id) return 1;
        return 0;
        })
    return response.json(sortById)
}
const createNewUser =  async (request,response)=>{
    const user = request.body
    const newID = (data.length + 1).toString()
    data.push({id:newID, ...user})
    return response.send(`User: "${user.name}" has been created`)
}
 const updateUser = async (request,response) => {
    const target = request.params.id
    const newUserContent = request.body
    const userToUpdate = data.find(user => user.id === target)
    const updatedUser = {...userToUpdate, ...newUserContent}
    data.splice(data.indexOf(userToUpdate),1)
    data.push(updatedUser)
    return response.json(updatedUser)
}
 const updateUserByID = async (request,response) => {
    const target = request.params.id
    const newUserContent = request.body
    const userToUpdate = data.find(user => user.id === target)
    const updatedUser = {...userToUpdate, ...newUserContent}
    data.splice(data.indexOf(userToUpdate),1)
    data.push(updatedUser)
    return response.json(updatedUser)
}
const deleteUser = async (request,response)=>{
    const target = request.params.id
    const userToDelete = data.find( user => user.id === target)
    if(userToDelete){
         data.splice(data.indexOf(userToDelete),1)
          return response.send(`The user ${target}  has been Deleted`)
        }
    if(!userToDelete){ 
        return response.send(`The user ${target}  does not exists`)
        }
}
 module.exports = {
    getUsers,
    createNewUser,
    updateUser,
    updateUserByID,
    deleteUser,
 }