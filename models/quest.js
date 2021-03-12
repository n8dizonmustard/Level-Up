const mongoose = require('mongoose');

// Create your Comments Model
const commentSchema = new mongoose.Schema({
  content: String,
  }, {
    timestamps: true
});

// Create your Quest Model
const questSchema = new mongoose.Schema({
  name: String,
  comments: [commentSchema]
});




module.exports = mongoose.model('Quest', questSchema);
module.exports = mongoose.model('Comment', commentSchema);