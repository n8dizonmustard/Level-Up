const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model

  const userSchema = new mongoose.Schema({
    name: String,
    googleId: String,
    experience: Number,
  });
  
  module.exports = mongoose.model('User', userSchema);