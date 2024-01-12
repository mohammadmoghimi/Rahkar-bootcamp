const multer = require('multer');
const path = require('path');
const Picture = require('../models/picture.model');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/'); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

// Upload picture
exports.upload = upload.single('image'), async (req, res) => {
  try {
    // Extract data from the request
    const { description } = req.body;
    const imagePath = req.file.path; // Path where the image is saved

    // Create a new picture record in the database
    const newPicture = await Picture.create({ description, image_path: imagePath });

    // Send a response or perform other actions
    res.status(201).json(newPicture);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch list of pictures
exports.fetchList = async (req, res) => {
  try {
    const pictures = await Picture.findAll();
    res.status(200).json(pictures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
