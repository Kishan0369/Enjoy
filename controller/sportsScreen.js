const DbConnect = require('../DbConnect');
const connection = DbConnect();

const sportScreen = (req, res) => {
    const categoryID = req.params.categoryID; // Extract categoryID from req.params

    // Check if categoryID is undefined or null
    if (categoryID === undefined || categoryID === null) {
        res.status(400).json({ success: false, message: "Category ID is missing" });
        return;
    }

    let sqlQuery;

    if (categoryID === 'all') {
        sqlQuery = "SELECT * FROM product";
    } else {
        sqlQuery = `SELECT * FROM product WHERE categoryID = ${categoryID}`; // Use categoryID in the SQL query
    }

    connection.query(sqlQuery, (err, results) => {
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

module.exports = sportScreen;
