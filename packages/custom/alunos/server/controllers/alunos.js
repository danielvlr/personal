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
            var aluno = new aluno(req.body);
            aluno.user = req.user;

            aluno.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the aluno'
                    });
                }

                Alunos.events.publish({
                    action: 'created',
                    user: {
                        name: req.user.name
                    },
                    url: config.hostname + '/Alunos/' + aluno._id,
                    name: aluno.title
                });

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

                Alunos.events.publish({
                    action: 'updated',
                    user: {
                        name: req.user.name
                    },
                    name: aluno.title,
                    url: config.hostname + '/Alunos/' + aluno._id
                });

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

                Alunos.events.publish({
                    action: 'deleted',
                    user: {
                        name: req.user.name
                    },
                    name: aluno.title
                });

                res.json(aluno);
            });
        },
        /**
         * Show an aluno
         */
        show: function(req, res) {

            Alunos.events.publish({
                action: 'viewed',
                user: {
                    name: req.user.name
                },
                name: req.aluno.title,
                url: config.hostname + '/Alunos/' + req.aluno._id
            });

            res.json(req.aluno);
        },
        /**
         * List of Alunos
         */
        all: function(req, res) {
            //var query = req.acl.query('Aluno');

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