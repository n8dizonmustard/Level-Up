const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model

  const userSchema = new mongoose.Schema({
    _id: {
      type: Schema.Types.ObjectId
    },
    name: String,
    googleId: String,
    experience: Number,
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);