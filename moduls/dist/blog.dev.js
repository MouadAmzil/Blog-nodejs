"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var blogSheam = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var blog = mongoose.model('blog', blogSheam);
module.exports = blog;