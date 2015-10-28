'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;



var AlunoSchema = new Schema({
		nome: {
			type: String,
		},
		email: {
			type: String,
			index: {unique: true}
		},
		dataNascimento: {
			type: String
		},
		dataInicio: {
			type: String
		},
		sexo: {
			type: String
		}
});

/**
 * Statics
 */
AlunoSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).exec(cb);
};

mongoose.model('Aluno', AlunoSchema);


