const db = require('mysql');

let conn = db.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

conn.connect(err => {
    if(err) throw err;
    console.log("database connected");
});

module.exports = conn;