'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
 */
var AlunoSchema = new Schema({
		nome: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			index: {unique: true}
		},
		dataNascimento: {
			type: String,
		},
		dataInicio: {
			type: String,
		},
		sexo: {
			type: String,
		},

		anamnese:{
			estatura: {
				type: String,
			},
			peso: {
				type: String,
			},
			sistemaCardiovascular: {
				type: String
			},
			sistemaRespiratorio: {
				type: String
			},
			sistemaMusculoEsqueletico: {
				type: String
			},
			colunaVertebral: {
				type: String
			},
			pas: {
				type: String
			},
			pad: {
				type: String
			},
			fcr: {
				type: String
			},
			fcm: {
				type: String
			},
			asCondCardiaca: {
				type: String
			},
			asDorPeito: {
				type: String
			},
			asDorPeitoExercicio: {
				type: String
			},
			asPerdeEquilibrio: {
				type: String
			},
			asProblemaJuntas: {
				type: String
			},
			asRemedioPressao: {
				type: String
			},
			asRazaoNaoAtividade: {
				type: String
			}
		}
});

/**
 * Statics
 */
AlunoSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Aluno', AlunoSchema);


