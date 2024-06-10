// controller/product.js
const DbConnect = require('../DbConnect');
const connection = DbConnect();

const giftTrending = (req, res) => {
  const minRating = 4;
  const limitGiftItems = 5;
  const categoryId = 2; // Assuming the category ID for gifts is 2

  const sqlQuery = `SELECT * FROM product WHERE ratings >= ? AND categoryId = ? ORDER BY ratings DESC LIMIT ?`;

  connection.query(sqlQuery, [minRating, categoryId, limitGiftItems], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Database query failed' });
      return;
    }

    if (results.length > 0) {
      res.json({
        success: true,
        giftItemsData: results
      });
    } else {
      res.json({ success: false, message: 'No trending gifts found' });
    }
  });
};

module.exports = giftTrending;
