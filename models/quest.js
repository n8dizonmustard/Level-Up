const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your Comments Model
const commentSchema = new mongoose.Schema({
  _id: String,
  text: String,
  userId: [{ // holds the ID of the user that submitted the comment
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  userName: String,
  timestamps: true
});

// Create your Quest Model
const questSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  questItems: [],
  rewardXp: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [commentSchema]
});


module.exports = mongoose.model('Quest', questSchema);