const mongoose = require('mongoose');

// Create your User Model

  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    physical: Number,
    intellectual: Number,
    social: Number,
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);