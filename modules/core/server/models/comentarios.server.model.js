'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ComentarioSchema = new Schema({
  creado: {
    type: Date,
    default: Date.now
  },
  comentario: {
    type: String,
    default: '',
    trim: true
  }
});
mongoose.model('Comentarios', ComentarioSchema);
