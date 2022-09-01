const mariadb = require('mariadb')
const config = require('../config/app.config.json')
const pool = mariadb.createPool(config.db)

class _database{
    query = async (sql,params,insertIdAsNumber=true,stripMeta=true,dateStrings=true)=>{
        let conn
        try{
            conn = await pool.getConnection()
            const res = await conn.query({sql,insertIdAsNumber,dateStrings},params)
            if (stripMeta){
                delete res.meta
            }
            return res
        }finally{
            if (conn) conn.release()
        }
    }
}

module.exports=new _database()