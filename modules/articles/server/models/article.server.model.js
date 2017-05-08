'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  creado: {
    type: Date,
    default: Date.now
  },
  titulo: {
    type: String,
    default: '',
    trim: true,
    required: 'El titulo no puede estar en blanco'
  },
  contenido: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  imageUrl: {
    type: String,
    default: 'modules/articles/client/img/default.png'
  }
});

mongoose.model('Article', ArticleSchema);
