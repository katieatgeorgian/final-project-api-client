const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
    validate: [
      {
        validator: function (value) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.toLowerCase());
        },
        message: props => `Please ensure your email address is in the correct format. The email you entered was ${props.value}`
      }
    ]
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Gallery', GallerySchema);