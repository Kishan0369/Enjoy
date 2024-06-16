const mysql = require('mysql');
const crypto = require('crypto');
const dbConnect = require('../DbConnect');

const login = (req, res) => {
    const userEmail = req.body.user_email;
    const userPassword = crypto.createHash('md5').update(req.body.user_password).digest('hex');

    const connection = dbConnect();

    const sqlQuery = 'SELECT * FROM users_table WHERE user_email = ? AND user_password = ?';

    connection.query(sqlQuery, [userEmail, userPassword], (error, results) => {
        if (error) {
            console.error('Error executing query:', error.stack);
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }

        if (results.length > 0) {
            res.json({
                success: true,
                userData: results[0]
            });
        } else {
            res.json({ success: false });
        }
    });

    connection.end();
};

module.exports = login;
