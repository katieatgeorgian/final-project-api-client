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
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
    validate: [
      {
        // value will be the email the user
        // is attempting to store
        validator: async function (value) {
          const emailCount = await this.model('User')
            .countDocuments({ email: value });
          return emailCount === 0;
        },
        message: props => `Please try a different username/password combination.`
      },
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