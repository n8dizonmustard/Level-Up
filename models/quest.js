const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your Comments Model
const commentSchema = new mongoose.Schema({
  text: String,
  userId: Schema.Types.ObjectId,
  userName: String
});

// Create your Quest Model
const questSchema = new mongoose.Schema({
  qName: String,
  notes: String,
  difficulty: String,
  dueBy: Date,
  user: Schema.Types.ObjectId,
  comments: [commentSchema]
});

module.exports = mongoose.model('Quest', questSchema);