// validateEmail.js
const DbConnect = require('../DbConnect');
const connection = DbConnect();

const validateEmail = (req, res) => {
    const userEmail = req.body.user_email;

    const sqlQuery = `SELECT * FROM users_table WHERE user_email = ?`;
    connection.query(sqlQuery, [userEmail], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).json({ error: 'Database query error' });
            return;
        }
        if (results.length > 0) {
            // Email found in database
            res.json({ emailFound: true });
        } else {
            // Email not found in database
            res.json({ emailFound: false });
        }
    });
};

module.exports = validateEmail;
