const DbConnect = require('../DbConnect');
const connection = DbConnect();

const giftOffer = (req, res) => { // Change function name to giftOffer
  const categoryID = req.params.categoryID;

  if (categoryID === undefined || categoryID === null) {
    res.status(400).json({ success: false, message: "Category ID is missing" });
    return;
  }

  let sqlQuery;
  if (categoryID === 'all') {
    sqlQuery = "SELECT offer_nm, place FROM offer";
  } else {
    sqlQuery = `SELECT offer_nm, place FROM offer WHERE categoryID = ${connection.escape(categoryID)}`;
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
        offerData: results
      });
    } else {
      res.status(200).json({ success: false, message: "No offers found" });
    }
  });
};

module.exports = { giftOffer }; // Export the function as giftOffer
