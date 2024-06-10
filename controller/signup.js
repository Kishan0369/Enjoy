const crypto = require('crypto');
const DbConnect = require('../DbConnect');
const connection = DbConnect();

const signup = (req, res) => {
    // Validate request body
    if (!req.body || !req.body.user_name || !req.body.user_email || !req.body.user_password) {
        return res.status(400).json({ error: 'Missing user_name, user_email, or user_password in the request body' });
    }

    const userName = req.body.user_name;
    const userEmail = req.body.user_email;
    
    // Hash the password
    const userPassword = crypto.createHash('md5').update(req.body.user_password).digest('hex');

    const sqlQuery = 'INSERT INTO users_table (user_name, user_email, user_password) VALUES (?, ?, ?)';
    const values = [userName, userEmail, userPassword];

    connection.query(sqlQuery, values, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            return res.status(500).json({ success: false, error: 'Failed to execute database query' });
        }
        res.status(200).json({ success: true });
    });
};

module.exports = signup;
