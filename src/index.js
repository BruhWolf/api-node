const  Express =  require('express')
const api = Express()
api.get('/',(request,response)=>{

    return response.send('Hello World')
})
api.listen(3333)