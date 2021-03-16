const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your Comments Model
const commentSchema = new mongoose.Schema({
  text: String,
  userId: [{ // holds the ID of the user that submitted the comment
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  userName: String
});

// Create your Quest Model
const questSchema = new mongoose.Schema({
  qName: String,
  notes: String,
  difficulty: Number,
  dueBy: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [commentSchema]
});

module.exports = mongoose.model('Quest', questSchema);