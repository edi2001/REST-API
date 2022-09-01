const { Router } = require('express')
const m$todo = require('../modules/todo.modules')
const response = require('../helpers/response')



const TodoController =Router()
/**
 * list todo
 */

TodoController.get('/',async(req,res,next)=>{
 const list = await m$todo.listTodo()

response.sendResponse(res,list)
})


/**
 * add todo
 * @param {String} title
 * @param {String } description
 */

TodoController.post('/',async(req,res,next)=>{
    const add = await m$todo.addTodo(req.body)
    response.sendResponse(res,add)

})

/**
 * Edit todo
 * @param {number} id
 * @param {String} title
 * @param {String} description
 */

TodoController.put('/',async(req,res,next)=>{
    const edit = await m$todo.editTodo(req.body)
    response.sendResponse(res,edit)
})

/**
 * Delete todo
 * @param {number} id
 */

TodoController.delete('/:id',async(req,res,next)=>{
    const del = await m$todo.deleteTodo(req.params.id)
    response.sendResponse(res,del)
})


module.exports=TodoController