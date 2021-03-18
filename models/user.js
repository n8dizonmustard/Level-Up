const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model

  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    experience: Number,
    quests: {
      type: Schema.Types.ObjectId,
      ref: 'Quest'
    },
  });
  
  module.exports = mongoose.model('User', userSchema);