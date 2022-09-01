const express = require('express')
const TodoController = require('./controllers/TodoController')
const routes = require('./routes')

const app = express()

// this is te route the api will call
const port = process.env.PORT || 5001

// serialize dan deserialize input
app.use (express.json())
app.use(express.urlencoded({extended:true}))

//welcome  api
app.get('/',async(req,res,next)=>{
    res.status(200).send({
        messsage:'welcome to api todo list edited'
    })
})



// Routes 
routes(app)

app.listen(port,()=>{
    console.log(`server  is listening on http://localhost:${port}`);
})