const multer = require('multer');
const path = require('path');
const Picture = require('../models/picture.model');
const { Op } = require('sequelize');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/'); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage });
const uploadMiddleware = upload.single('image');

exports.upload = async (req, res) => {
  try {
    uploadMiddleware(req, res, async (err) => {
      const { description } = req.body;
      const imagePath = req.file.path; 

      const newPicture = await Picture.create({ description, image_path: imagePath });

      res.status(201).json(newPicture);
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.fetchList = async (req, res) => {
  try {

    let whereClause = {} ;

    if(req.query.query) {
      whereClause ={
        description : {
          [Op.like] :`${req.query.query}%`//این تیکه رو از جی پی تی گرفتم
        }
      }
    }

    const pictures = await Picture.findAll({where:whereClause});
    res.status(200).json(pictures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};