'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
var hasAuthorization = function(req, res, next) {
  next();
};

var hasPermissions = function(req, res, next) {
    next();
};

module.exports = function(Alunos, app, auth) {
  
  var alunos = require('../controllers/alunos')(Alunos);

  app.route('/api/alunos')
    .get(auth.isMongoId, alunos.all)
    .post(auth.requiresLogin, hasPermissions, alunos.create);


  app.route('/api/alunos/:alunoId')
    .get(auth.isMongoId, alunos.show)
    .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, hasPermissions, alunos.update)
    .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, alunos.destroy);

  // Finish with setting up the articleId param
  app.param('alunoId', alunos.aluno);
};
