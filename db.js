// require("dotenv").config();
const mysql = require('mysql2');
const myConnection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

// test connection to the database
// myConnection.execute("SHOW TABLES", (err, result) => {
//     if (err) {
//         throw err;
//     }
//     console.log(result);
// });

// export the connection
module.exports = myConnection.promise();