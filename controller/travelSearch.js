const DbConnect = require('../DbConnect');
const connection = DbConnect();

const travelSearch = (req, res) => {
    // Retrieve the search term from the request's query parameters
    const searchTerm = req.query.search || '';
    // Use '%' for wildcard search and filter by categoryID = 1
    const sqlQuery = "SELECT * FROM product WHERE name LIKE ? AND categoryID = 4 ORDER BY ratings DESC";

    // Prepare the search term for the SQL query
    const sqlParams = [`%${searchTerm}%`];

    connection.query(sqlQuery, sqlParams, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).json({ success: false });
            return;
        }

        if (results.length > 0) {
            res.status(200).json({
                success: true,
                productData: results
            });
        } else {
            res.status(200).json({ success: false });
        }
    });
};

module.exports = travelSearch;
