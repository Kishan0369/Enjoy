const DbConnect = require('../DbConnect');
const connection = DbConnect();

const getPhotos = (req, res) => {
  const { product_no } = req.body; // Extract product_no from request body

  let query = `
    SELECT 
      product.product_no,
      product.name, 
      product.longitude, 
      product.latitude, 
      camera.user_id, 
      camera.user_name, 
      camera.name AS camera_name, 
      camera.image
    FROM 
      product
    INNER JOIN 
      camera ON product.product_no = camera.productNo
    WHERE 
      camera.image IS NOT NULL
  `;

  const queryParams = [];

  if (product_no) {
    query += ' AND product.product_no = ?';
    queryParams.push(product_no);
  }

  connection.query(query, queryParams, (error, results) => {
    if (error) {
      console.error('Error fetching data: ' + error.stack);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
};

module.exports = getPhotos;
