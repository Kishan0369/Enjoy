const mysql = require('mysql');

const serverHost = process.env.DB_HOST;
const port = process.env.DB_PORT; // Assuming your MySQL server is running on this port
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DB;

const DbConnect = () => {
    const connection = mysql.createConnection({
        host: serverHost,
        port: port,
        user: user,
        password: password,
        database: database
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to database: ' + err.stack);
            return null;
        }
        console.log('Connected to database as ID ' + connection.threadId);
    });

    return connection;
};

module.exports = DbConnect;
