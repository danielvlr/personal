'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Aluno = mongoose.model('Aluno'),
    config = require('meanio').loadConfig(),
    _ = require('lodash');

module.exports = function(Alunos) {

    return {
        /**
         * Find aluno by id
         */
        aluno: function(req, res, next, id) {
            Aluno.load(id, function(err, aluno) {
                if (err) return next(err);
                if (!aluno) return next(new Error('Failed to load aluno ' + id));
                req.aluno = aluno;
                next();
            });
        },
        /**
         * Create an aluno
         */
        create: function(req, res) {
            var aluno = new Aluno(req.body);
            //aluno.user = req.user;
            aluno.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the aluno'
                    });
                }
                res.json(aluno);
            });
        },
        /**
         * Update an aluno
         */
        update: function(req, res) {
            var aluno = req.aluno;

            aluno = _.extend(aluno, req.body);


            aluno.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot update the aluno'
                    });
                }
                res.json(aluno);
            });
        },
        /**
         * Delete an aluno
         */
        destroy: function(req, res) {
            var aluno = req.aluno;
            aluno.remove(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot delete the aluno'
                    });
                }
                res.json(aluno);
            });
        },
        /**
         * Show an aluno
         */
        show: function(req, res) {         
            res.json(req.aluno);
        },
        /**
         * List of Alunos
         */
        all: function(req, res) {
            //var query = req.acl.query('Aluno');

            console.log(req.aluno);
            Aluno.find({}).exec(function(err, alunos) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot list the Alunos'
                    });
                }
                res.json(alunos)
            });

        } 
    };
}