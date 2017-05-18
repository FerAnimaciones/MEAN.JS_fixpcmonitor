'use strict';
var path = require('path'),
  mongoose = require('mongoose'),
  Article = mongoose.model('Comentarios'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
/**
 * Crear Comentario
 */
exports.create = function (req, res) {
  var comentario = new Comentarios(req.body);

  comentario.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(comentario);
    }
  });
};

/**
 * Mostrar el comentario
 */
exports.read = function (req, res) {
  // convert mongoose document to JSON
  var comentario = req.comentario ? req.comentario.toJSON() : {};
  res.json(comentario);
};

/**
 * Actualizar un comentario
 */
exports.update = function (req, res) {
  var comentario = req.comentario;
  article.comentario = req.body.comentariot;
  article.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(article);
    }
  });
};

/**
 * Delete an article
 */
exports.delete = function (req, res) {
  var comentario = req.comentario;

  article.remove(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(article);
    }
  });
};
/**
 * List of Articles
 */
exports.list = function (req, res) {
  Article.find().sort('-creado').exec(function (err, articles) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(articles);
    }
  });
};

/**
 * Article middleware
 */
exports.articleByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'El  comentario  es invalido'
    });
  }

  Article.findById(id).populate('user', 'displayName').exec(function (err, article) {
    if (err) {
      return next(err);
    } else if (!article) {
      return res.status(404).send({
        message: 'No article with that identifier has been found'
      });
    }
    req.article = article;
    next();
  });
};
