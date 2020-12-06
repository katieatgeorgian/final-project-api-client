const Gallery = require('../models/gallery');
const jwt = require('jsonwebtoken');

//create new art
exports.create = async (req, res, next) => {
  try {
    const { 
      artist,
      category,
      title,
      email
    } = req.body;
    //creating data - same data as in model - one to one
    const gallery = await Gallery.create({
      artist,
      category,
      title,
      email
    });

    //do a response - passing message, and in this case passing quote back (so have id)
    res.status(200).json(gallery)
  } catch(error) {
    next(error);
  }
};

//show all art pieces
exports.index = async (req, res, next) => {
  try {
    const galleries = await Gallery.find();
    res.status(200).json(galleries);
  } catch(error) {
    next(error);
  }
};