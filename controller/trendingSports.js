// controller/product.js
const DbConnect = require('../DbConnect');
const connection = DbConnect();

const trendingSports = (req, res) => {
  const minRating = 4.4;
  const limitClothItems = 5;
  const categoryId = 3; // Assuming the category ID for gifts is 2

  const sqlQuery = `SELECT * FROM product WHERE ratings >= ? AND categoryId = ? ORDER BY ratings DESC LIMIT ?`;

  connection.query(sqlQuery, [minRating, categoryId, limitClothItems], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Database query failed' });
      return;
    }

    if (results.length > 0) {
      res.json({
        success: true,
        clothItemsData: results
      });
    } else {
      res.json({ success: false });
    }
  });
};

module.exports = trendingSports;
