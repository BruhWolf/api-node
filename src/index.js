const { response } = require('express')
const  Express =  require('express')
const api = Express()

api.use(Express.json())
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

api.get('/users', (request,response)=>{ 

    const sortById  = data.sort( (a,b)=>{
        if(a.id < b.id) return -1;
        if(a.id > b.id) return 1;
        return 0;
        })

    return response.json(sortById)
})
api.post('/users',(request,response)=>{
    const user = request.body
    const newID = (data.length + 1).toString()
    data.push({id:newID, ...user})
    return response.send(`User: "${user.name}" has been created`)
})
api.delete('/users/:id',(request,response)=>{
        const target = request.params.id
        const userToDelete = data.find( user => user.id === target)
        if(userToDelete){
             data.splice(data.indexOf(userToDelete),1)
              return response.send(`The user ${target}  has been Deleted`)
            }
        if(!userToDelete){ 
            return response.send(`The user ${target}  does not exists`)
            }
})
api.put('/users/:id',(request,response) => {
        const target = request.params.id
        const newUserContent = request.body
        const userToUpdate = data.find(user => user.id === target)
        const updatedUser = {...userToUpdate, ...newUserContent}
        data.splice(data.indexOf(userToUpdate),1)
        data.push(updatedUser)
        return response.json(updatedUser)
})
api.patch('/users/:id',(request,response) => {
    const target = request.params.id
    const newUserContent = request.body
    const userToUpdate = data.find(user => user.id === target)
    const updatedUser = {...userToUpdate, ...newUserContent}
    data.splice(data.indexOf(userToUpdate),1)
    data.push(updatedUser)
    return response.json(updatedUser)
})

api.listen(3333)