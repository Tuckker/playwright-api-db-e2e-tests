//loading client and pool module from pg
const {Pool, Client} = require('pg');

//loading environment variables from dev.env into process.env 
require('dotenv').config({
    override:true,
    path : path.join(__dirname,'development.env')

});

const pool = new Pool({

    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database :process.env.DB_NAME,
    password : process.env.DB_PASSWORD,
    port : process.env.DB_PORT

})

(async ()=>{
    const client = await pool.connect();
    const rows = await client.query('SELECT current_user')
    const currentUser = rows[0]['current_user']
    console.log(currentUser);
})