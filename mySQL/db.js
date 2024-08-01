//npm i mysql2

import mysql from 'mysql2/promise';


// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '---',
    database: 'demoDB'
});

export default pool;
