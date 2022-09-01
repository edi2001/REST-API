// helpers databse yang dibuat

const mysql = require('../helpers/database')
// validation input
const joi =require('joi')
// list all todo
class _todo{
    listTodo =async()=>{
        try{
            const list = await mysql.query(
                'SELECT * FROM d_todo',
                []
            )
            return{
                status:true,
                data:list
            }
        }catch(error){
            console.log('lst toido medule error ',error) ;
            return{
                status:false,
                error
            }
        }
    }
    
    
    // create todo
    addTodo =async(body)=>{
        try {
            const schema =joi.object({
                title:joi.string().required(),
                description:joi.string()
            })

            const validation =schema.validate(body)
            if(validation.error){
                const errorDetails = validation.error.details.map(detail => detail.message)

                return{
                    status :false,
                    code:422,
                    error:errorDetails.join(',')
                }
            }
            const add = await mysql.query(
                'INSERT INTO d_todo (title,description) VALUES (?,?)',
                [body.title,body.description]
            )
            return{
                status : true,
                data: add
            }
        
            
        } catch (error) {
            console.log('add todo module error',error);

            return{
                status:false,
                error
            }
        }
    }


// update todo
    editTodo =async(body)=>{
        try {
            const schema =joi.object({
                id:joi.number().required(),
                title:joi.string(),
                description:joi.string()
            })

            const validation =schema.validate(body)
            
            if(validation.error){
                const errorDetails = validation.error.details.map(detail => detail.message)

                return{
                    status :false,
                    code:422,
                    error:errorDetails.join(',')
                }
            }
            const edit = await mysql.query(
                'UPDATE  d_todo SET title =?, description=? WHERE id= ?',
                [body.title,body.description,body.id]
            )
            return{
                status : true,
                data: edit
            }
        
            
        } catch (error) {
            console.log('add todo module error',error);

            return{
                status:false,
                error
            }
        }
    }


// delete todo
    deleteTodo = async (id)=>{
        try {
            const body = {id}
            const schema =joi.object({
                id:joi.number().required(),
                
            })

            const validation =schema.validate(body)
            
            if(validation.error){
                const errorDetails = validation.error.details.map(detail => detail.message)

                return{
                    status :false,
                    code:422,
                    error:errorDetails.join(',')
                }
            }

            const del = await mysql.query(
                'DELETE FROM d_todo WHERE id=?',
                [id]
            )

            return{
                status:true,
                data:del
            }

        } catch (error) {
            console.log('deleted todo module Error',error);

            return{
                status:false,
                error
            }
        }
    }

}


module.exports=new _todo()