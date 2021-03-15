const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your Comments Model
const commentSchema = new mongoose.Schema({
  text: String,
  userId: [{ // holds the ID of the user that submitted the comment
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  userName: String,
});

// Create your Quest Item Model
const questItemSchema = new mongoose.Schema({
  qItem: String,
  difficulty: Number
});

// Create your Quest Model
const questSchema = new mongoose.Schema({
  qName: String,
  qItems: [questItemSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [commentSchema]
});

module.exports = mongoose.model('Quest', questSchema);