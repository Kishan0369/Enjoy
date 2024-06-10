const mysql = require('mysql');

const serverHost = 'localhost';
const port = 3308; // Assuming your MySQL server is running on this port
const user = 'root';
const password = '';
const database = 'enjoy';

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
