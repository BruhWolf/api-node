# api-node
A NodeJs API made with  Express Framework
### Features
- Handle user registrations.
- Serve static files.
##### This simple API handle user registrations and accepting 5 types of requests:  You can try it by setting up a request on insomnia or postman against this url: 
###### http://api.wolfplace.solutions/users
##### The Api also serves static files. Check it out acessing: 
###### http://api.wolfpalce.solutions/public/wolf.jpg

###
## GET | POST | PUT | PTCH | DELETE




### GET 
  - The GET method returns all registered users
######   example GET:   http://api.wolfplace.solutions/users
  This returns all users that is registered in the database
### POST 
  - Use the  POST method to create a new user. 
  - It accepts a JSON object in the body of the request with 2 parameters: "Name" wich is a string and a "email" which has to be a valid e-mail.
  - The email has to be unique to prevent duplicate users in the system.
  
 ######     example body JSON : 
    {
      "name": "bruno costa",
      "email": "business.brunocosta@gmail.com"
    }
    
### PUT & PTCH
  The PUT and PATCH methods are very similar. Both stands for updating users on database. 
  The big difference between them is that PTCH method is able to update every single property of a user separated.
  Instead, the PUT method updates all properties of a user object at once. It will keep the "id"  but it will replace the intire object for the one passed into the body request.
#### In order to make a sucessful request, is necessary 2 steps: 
- to pass the target user "id" as a param to the url 
- to pass JSON object in body of the request with the content to be updated.
######   example PUT:   http://api.wolfplace.solutions/users/1
    {
      "name": "bruno costa",
      "email": "business.brunocosta@gmail.com"
     }
  This will update the user "1" to Json content. Note that the entire  user content will be updated.
  
######   example PTCH:   http://api.wolfplace.solutions/users/2     
      {
      "name": "bruno costa",
      }
  This will just update the "name" of the user "2" to "bruno costa". Note that you can update every single property separated.
### DEL
  This is very intuitive. it delete the a user that correspond to a specific "id"
  - Just pass the target "id" as a param to the url and the correspondent user will be deleted.
  ######   example DEL:   http://api.wolfplace.solutions/users/3
    This Delete The user where the id = "3"
  ##
  ##
    
    
    
  
  

## You can try it at [Wolfplace](http://api.wolfplace.solutions)
