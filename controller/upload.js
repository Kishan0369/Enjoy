const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const DbConnect = require('../DbConnect');
const connection = DbConnect();

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for file uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Generating unique file name
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), (req, res) => {
  const { category, subcategory, rating, comments, location, user_id, user_name,latitude, longitude } = req.body;
  const imagePath = req.file.path;

  // Insert into the database
  const sqlQuery = "INSERT INTO camera (user_id, user_name,image, category, subcategory, rating, comments, location, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)";
  const values = [user_id,user_name, imagePath, category, subcategory, rating, comments, location, latitude, longitude];

  connection.query(sqlQuery, values, (err, result) => {
    if (err) {
      console.error("Database insert failed:", err);
      fs.unlinkSync(imagePath); // Delete the uploaded image if database insert fails
      return res.status(500).json({ success: false, message: "Database insert failed" });
    }
    res.json({ success: true, imageUrl: imagePath });
  });
});

module.exports = router;
