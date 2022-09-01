const TodoController = require("./controllers/TodoController");

// define url APi in here
const _routes =[
    ['/todos',TodoController]
]

// http://localhost:5001/api/todos
const routes = (app)=>{
    _routes.forEach((route)=>{
        const [url,controller]=route
        app.use(`/api${url}`,controller)
    })
}

module.exports=routes