//config
const mysql = require('mysql');
require('dotenv').config();
// console.log("Testing the config: ", process.env.DB_HOST);

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
  };

//make a connection
const db = mysql.createPool(dbConfig);

//execute query

module.exports = (query, values) => {
    return new Promise ((resolve, reject)=>{
        db.getConnection((err, sql)=>{
            if(err){
                console.log("Database error", err);
                reject(err);
            }else{
                sql.query(query, values, (err, results)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(results);
                    }
                    sql.release();
                });
            }
        });
    });
}