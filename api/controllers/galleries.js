const Gallery = require('../models/gallery');
const jwt = require('jsonwebtoken');

//show all art pieces
exports.index = async (req, res, next) => {
  try {
    const galleries = await Gallery.find();
    res.status(200).json(galleries);
  } catch(error) {
    next(error);
  }
};


//create new art
exports.create = async (req, res, next) => {
  try {
    const { 
      firstName,
      lastName,
      category,
      title,
      imageUrl,
      email
    } = req.body;
    //creating data - same data as in model - one to one
    const gallery = await Gallery.create({
      firstName,
      lastName,
      category,
      title,
      imageUrl,
      email
    });

    //do a response - passing message, and in this case passing quote back (so have id)
    res.status(200).json(gallery)
  } catch(error) {
    next(error);
  }
};

//update 
exports.update = async (req, res, next) => {
  try {
    const { 
      _id,
      firstName,
      lastName,
      category,
      title,
      imageUrl,
      email
     } = req.body;

     //
    const gallery = await Gallery.findOneAndUpdate({_id: _id}, 
      {
       firstName,
       lastName,
       category,
       title,
       imageUrl,
       email
      });

    res.status(200).json(gallery);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

//delete
exports.destroy = async (req, res, next) => {
  try {
    console.log(req.body);
    const { _id } = req.body;
    console.log(_id);
    const gallery = await Gallery.findOneAndDelete({ _id });
    res.status(200).json(gallery);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

//show one specific piece
exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gallery = await Gallery.findById(id);
    res.status(200).json(gallery);
  } catch (error) {
    next(error);
  }
};